import { chatStore } from './ChatStore';

export class RootStore {
    chatStore = chatStore;
    // Add other stores here as needed
}

export const rootStore = new RootStore(); 