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
    const getStatusText = () => {
        switch (message.status) {
            case 'sending': return '⋯';
            case 'sent': return '✓';
            case 'delivered': return '✓✓';
            case 'read': return '✓✓';
            case 'failed': return '!';
            default: return '';
        }
    };

    const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <View style={[
            styles.container,
            isOwnMessage ? styles.ownMessage : styles.otherMessage
        ]}>
            {message.imageUri && (
                <Image source={{ uri: message.imageUri }} style={styles.messageImage} />
            )}
            <Text style={[
                styles.text,
                isOwnMessage ? styles.ownMessageText : styles.otherMessageText
            ]}>
                {message.text}
            </Text>
            <View style={styles.messageFooter}>
                <Text style={styles.timestamp}>{formattedTime}</Text>
                {isOwnMessage && (
                    <Text style={styles.status}>{getStatusText()}</Text>
                )}
            </View>
        </View>
    );
});

export default ChatBubble; 