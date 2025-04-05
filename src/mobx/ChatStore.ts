import { makeAutoObservable, runInAction } from 'mobx';

export interface User {
    id: string;
    name: string;
    avatar?: string;
}

export interface ChatMessage {
    id: string;
    text: string;
    timestamp: Date;
    sender: User;
    isRead: boolean;
    status?: 'sending' | 'sent' | 'delivered' | 'read' | 'failed';
    imageUri?: string | null;
    receiverId: string
}

export class ChatStore {
    messages: ChatMessage[] = [];
    isLoading: boolean = false;
    error: string | null = null;
    currentUser: User = {
        id: 'user1',
        name: 'Current User'
    };

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    addMessage(message: ChatMessage) {
        runInAction(() => {
            this.messages.unshift(message);
        });
    }

    deleteMessage(messageId: string) {
        const index = this.messages.findIndex(msg => msg.id === messageId);
        if (index !== -1) {
            this.messages.splice(index, 1);
        }
    }

    markMessageAsRead(messageId: string) {
        const message = this.messages.find(msg => msg.id === messageId);
        if (message) {
            message.isRead = true;
            message.status = 'read';
        }
    }

    get unreadCount() {
        return this.messages.filter(msg => !msg.isRead && msg.sender.id !== this.currentUser.id).length;
    }

    get sortedMessages() {
        console.log(this.messages, "this.messages");
        return this.messages
        // return [...this.messages].sort((a, b) => b.timestamp?.getTime() - a.timestamp?.getTime());
    }

    get lastMessage() {
        return this.sortedMessages[0];
    }
}

// Create a single instance
export const chatStore = new ChatStore(); 