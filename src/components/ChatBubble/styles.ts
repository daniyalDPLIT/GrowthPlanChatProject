import { StyleSheet } from 'react-native';
import { width } from '../../utils/dimensions';
import { colors } from '../../utils/app-colors';
import { fontFamily } from '../../utils/font-family';

export default StyleSheet.create({
    container: {
        marginVertical: width(1),
        marginHorizontal: width(3),
    },
    ownMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    otherMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ownMessageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    otherMessageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    youCircle: {
        width: width(8),
        height: width(8),
        borderRadius: width(4),
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width(2),
    },
    youText: {
        color: colors.background,
        fontFamily: fontFamily.bold,
        fontSize: width(3),
    },
    messageBubble: {
        maxWidth: width(60),
        padding: width(3),
        borderRadius: width(3),
        backgroundColor: colors.myMessageBubble,
    },
    ownMessageText: {
        color: colors.myMessageText,
        fontFamily: fontFamily.regular,
        fontSize: width(3.8),
    },
    otherMessageText: {
        color: colors.messageText,
        fontFamily: fontFamily.regular,
        fontSize: width(3.8),
    },
    timestamp: {
        fontSize: width(2.8),
        color: colors.secondaryText,
        marginTop: width(1),
    },
    messageImage: {
        width: width(50),
        height: width(30),
        borderRadius: width(2),
        marginBottom: width(2),
    },
    avatar: {
        width: width(10),
        height: width(10),
        borderRadius: width(5),
        marginRight: width(2),
    },
}); 