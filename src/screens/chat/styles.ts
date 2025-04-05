import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/dimensions';
import { colors } from '../../utils/app-colors';
import { fontFamily } from '../../utils/font-family';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: width(4),
    },
    header: {
        height: height(8),
        borderBottomWidth: width(0.3),
        justifyContent: 'center',
        paddingHorizontal: width(4),
    },
    headerTitle: {
        fontSize: width(4),
        fontFamily: fontFamily.medium,
    },
    chatContainer: {
        flex: 1,
        paddingVertical: width(2),
    },
    inputContainer: {
        flexDirection: 'row',
        paddingBottom: width(7),

        backgroundColor: colors.background,
        alignItems: 'center',
    },
    footerContainer: {
        borderTopWidth: width(0.2),
        borderTopColor: colors.secondaryText,
        paddingTop: height(2)
    },
    input: {
        flex: 1,
        maxHeight: width(30),
        backgroundColor: colors.secondaryBackground,
        borderRadius: width(3),
        paddingHorizontal: width(4),
        paddingVertical: width(3),
        marginRight: width(2),
        fontSize: width(4),
    },
    sendButton: {
        backgroundColor: colors.primary,
        borderRadius: width(2),
        padding: width(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: colors.secondaryText,
    },
    sendButtonText: {
        color: colors.text,
        fontSize: width(4),
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageList: {
        paddingHorizontal: width(4),
        paddingVertical: width(2),
    },
    attachButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width(2),
    },
    attachButtonText: {
        fontSize: width(5),
    },
    imagePreviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: width(2),
    },
    imagePreview: {
        width: width(20),
        height: width(20),
        borderRadius: width(2),
        marginRight: width(2),
    },
    removeImageButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.error,
        borderRadius: width(100),
        padding: width(1),
        position: "absolute",
        top: 0,
        left: width(14)
    },
    removeImageButtonText: {
        color: colors.messageBubble,
        fontSize: width(4),
    },
});