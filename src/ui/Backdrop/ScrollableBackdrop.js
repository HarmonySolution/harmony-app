import { useEffect } from "react";
import { BackdropView } from "./BackdropView";
import { Dimensions, Modal, StatusBar, TouchableOpacity } from "react-native";
import { Scrollable } from "../Scrollable/Scrollable";

export const ScrollableBackdrop = ({
    showBackdrop = false,
    backdropStyle,
    children,
    onBackdropPress,
    onBackdropShow
}) => {
    useEffect(() => {
        StatusBar.setHidden(Boolean(showBackdrop));
        return () => StatusBar.setHidden(false);
    }, [showBackdrop]);

    if (!showBackdrop) {
        return children;
    };

    const windowHeight = Dimensions.get('window').height;

    return (
        <Modal
            transparent={true}
            statusBarTranslucent={false}
            visible={true}
            onRequestClose={onBackdropPress}
            onShow={onBackdropShow}
            onDismiss={onBackdropPress}
        >
            <BackdropView
                backdropStyle={[{backgroundColor: 'rgba(0,0,0,0.5)'}, backdropStyle]}
                backdropBlured={true}
                cloneChildren={false}
                onBackdropPress={onBackdropPress}
            >
                <Scrollable
                    scrollStyle={{ flex: 1 }}
                    style={{ minHeight: windowHeight }}
                    contentToBottom={true}
                    onPress={onBackdropPress}
                >
                    {children}
                </Scrollable>
            </BackdropView>
        </Modal>
    );
};