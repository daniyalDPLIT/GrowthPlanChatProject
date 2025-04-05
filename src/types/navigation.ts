import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

export type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

// Declare global types for useNavigation hook
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
} 