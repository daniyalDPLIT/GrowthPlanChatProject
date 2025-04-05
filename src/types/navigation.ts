import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

export type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
} 