import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/dimensions';
import { colors } from '../../utils/app-colors';
import { fontFamily } from '../../utils/font-family';

export default StyleSheet.create({
    container: {
        maxWidth: width(70),
        minWidth: width(20),
        padding: width(3),
        borderRadius: width(3),
        marginVertical: width(1),
        marginHorizontal: width(3),
    },
    ownMessage: {
        backgroundColor: colors.myMessageBubble,
        alignSelf: 'flex-end',
        borderTopRightRadius: width(1),
    },
    otherMessage: {
        backgroundColor: colors.messageBubble,
        alignSelf: 'flex-start',
        borderTopLeftRadius: width(1),
    },
    text: {
        fontFamily: fontFamily.regular,
        fontSize: width(3.8),
        lineHeight: width(5),
    },
    ownMessageText: {
        color: colors.myMessageText,
    },
    otherMessageText: {
        color: colors.messageText,
    },
    timestamp: {
        fontSize: width(2.8),
        marginTop: width(1),
        color: colors.secondaryText,
    },
    avatar: {
        width: width(10),
        height: width(10),
        borderRadius: width(5),
        marginRight: width(2),
    },
    messageFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: width(1),
    },
    status: {
        fontSize: width(2.8),
        color: colors.secondaryText,
    },
    messageImage: {
        width: width(60),
        height: width(40),
        borderRadius: width(2),
        marginBottom: width(2),
    },
}); 