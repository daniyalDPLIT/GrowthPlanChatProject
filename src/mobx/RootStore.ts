import { chatStore } from './ChatStore';

export class RootStore {
    chatStore = chatStore;
}

export const rootStore = new RootStore(); 