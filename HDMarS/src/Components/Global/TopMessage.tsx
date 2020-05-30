import { showMessage } from 'react-native-flash-message';

const topMessage = (message: string, description = '', messageType: any = 'danger') => {
    showMessage({
        message,
        type: messageType,
        description,
    });
};

const topMessageAction = (
    message: string,
    messageType: any = 'danger',
    onPress: any = undefined,
) => {
    showMessage({
        message,
        type: messageType,
        onPress,
    });
};

export { topMessage, topMessageAction };
