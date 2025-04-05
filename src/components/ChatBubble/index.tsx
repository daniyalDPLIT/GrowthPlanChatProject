import React from 'react';
import { View, Text, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import { ChatMessage } from '../../mobx/ChatStore';
import styles from './styles';

interface ChatBubbleProps {
    message: ChatMessage;
    isOwnMessage: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = observer(({ message, isOwnMessage }) => {
    const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <View style={[
            styles.container,
            isOwnMessage ? styles.ownMessageContainer : styles.otherMessageContainer
        ]}>
            {isOwnMessage ? (
                <View style={styles.ownMessageWrapper}>
                    <View style={styles.youCircle}>
                        <Text style={styles.youText}>You</Text>
                    </View>
                    <View style={styles.messageBubble}>
                        {message.imageUri && (
                            <Image source={{ uri: message.imageUri }} style={styles.messageImage} />
                        )}
                        <Text style={styles.ownMessageText}>{message.text}</Text>
                        <Text style={styles.timestamp}>{formattedTime}</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.otherMessageWrapper}>
                    <Image
                        source={{ uri: message.sender.avatar }}
                        style={styles.avatar}
                    />
                    <View style={styles.messageBubble}>
                        {message.imageUri && (
                            <Image source={{ uri: message.imageUri }} style={styles.messageImage} />
                        )}
                        <Text style={styles.otherMessageText}>{message.text}</Text>
                        <Text style={styles.timestamp}>{formattedTime}</Text>
                    </View>
                </View>
            )}
        </View>
    );
});

export default ChatBubble; 