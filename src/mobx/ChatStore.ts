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
    status: 'sending' | 'sent' | 'delivered' | 'read' | 'failed';
    imageUri?: string | null;
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

    // Actions
    sendMessage(text: string, image: null | string) {
        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            text,
            timestamp: new Date(),
            sender: this.currentUser,
            isRead: false,
            status: 'sending',
            imageUri: image
        };

        this.messages.push(newMessage);

        // Simulate API call
        setTimeout(() => {
            runInAction(() => {
                const messageIndex = this.messages.findIndex(msg => msg.id === newMessage.id);
                if (messageIndex !== -1) {
                    this.messages[messageIndex].status = 'sent';
                }
            });
        }, 1000);
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

    // For demo purposes, load some initial messages
    async loadInitialMessages() {
        this.isLoading = true;
        this.error = null;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            runInAction(() => {
                this.messages = [
                    {
                        id: '1',
                        text: 'Hey there!',
                        timestamp: new Date(Date.now() - 3600000),
                        sender: {
                            id: 'user2',
                            name: 'John Doe',
                        },
                        isRead: true,
                        status: 'read'
                    },
                    {
                        id: '2',
                        text: 'Hi! How are you?',
                        timestamp: new Date(Date.now() - 3500000),
                        sender: this.currentUser,
                        isRead: true,
                        status: 'read'
                    },
                    // Add more sample messages as needed
                ];
            });
        } catch (error) {
            runInAction(() => {
                this.error = 'Failed to load messages';
            });
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    // Computed properties
    get unreadCount() {
        return this.messages.filter(msg => !msg.isRead && msg.sender.id !== this.currentUser.id).length;
    }

    get sortedMessages() {
        return [...this.messages].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }

    get lastMessage() {
        return this.sortedMessages[0];
    }
}

// Create a single instance
export const chatStore = new ChatStore(); 