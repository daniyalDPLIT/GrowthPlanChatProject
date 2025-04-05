import React, { useEffect } from 'react';
import {
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Text,
    Image
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { ChatMessage, chatStore } from '../../mobx/ChatStore';
import styles from './styles';
import ChatBubble from '../../components/ChatBubble';
import { launchImageLibrary } from 'react-native-image-picker';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the local server

const ChatScreen = observer(() => {
    const [messageText, setMessageText] = React.useState('');
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const flatListRef = React.useRef<FlatList>(null);

    useEffect(() => {
        // Join the user's room
        socket.emit('join', chatStore.currentUser.id);

        // Listen for incoming messages
        socket.on('chat message', (msg) => {
            console.log(msg, 'im listne');

            chatStore.addMessage(msg);
        });

        // Clean up on unmount
        return () => {
            socket.off('chat message');
        };
    }, []);

    const handleSendMessage = () => {
        if (messageText.trim()) {
            const message: ChatMessage = {
                id: Date.now().toString(),
                text: messageText.trim(),
                timestamp: new Date(),
                sender: chatStore.currentUser,
                receiverId: 'user2', // Replace with actual receiver ID
                isRead: false,
                status: 'sent',
                imageUri: selectedImage,
            };

            // Emit the message to the server
            socket.emit('chat message', message);

            // Add the message to the local store
            // chatStore.addMessage(message);

            setMessageText('');
            setSelectedImage(null); // Clear the selected image after sending
            // Scroll to bottom after sending
            setTimeout(() => {
                flatListRef.current?.scrollToIndex({ index: 0, animated: true });
            }, 100);
        }
    };

    const handleAttachImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                maxWidth: 800,
                maxHeight: 600,
                quality: 0.8,
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const uri = response.assets?.[0]?.uri;
                    if (uri) {
                        setSelectedImage(uri);
                    }
                }
            }
        );
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <FlatList
                ref={flatListRef}
                data={chatStore.sortedMessages}
                inverted
                renderItem={({ item }) => (
                    <ChatBubble
                        message={item}
                        isOwnMessage={item.sender.id === chatStore.currentUser.id}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.messageList}
            />


            <View style={styles.footer}>
                {selectedImage && (
                    <View style={styles.imagePreviewContainer}>
                        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
                        <TouchableOpacity onPress={handleRemoveImage} style={styles.removeImageButton}>
                            <Text style={styles.removeImageButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.inputContainer}>

                    <TouchableOpacity onPress={handleAttachImage} style={styles.attachButton}>
                        <Text style={styles.attachButtonText}>📎</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        value={messageText}
                        onChangeText={setMessageText}
                        placeholder="Type a message..."
                        multiline
                        maxLength={1000}

                    />
                    <TouchableOpacity
                        style={[
                            styles.sendButton,
                            !messageText.trim() && styles.sendButtonDisabled
                        ]}
                        onPress={handleSendMessage}
                        disabled={!messageText.trim()}
                    >
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
});

export default ChatScreen; 