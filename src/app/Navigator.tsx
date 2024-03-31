import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { RootNavigator } from '../navigation/RootNavigation';

export const Navigator = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <NativeRouter>
                <RootNavigator />
            </NativeRouter>
        </TouchableWithoutFeedback>
    );
};
