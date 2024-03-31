import { Children, cloneElement } from 'react';
import {
    GestureResponderEvent,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { BlurView } from 'expo-blur';

type BackdropViewProps = {
    children: JSX.Element;
    backdropStyle?: ViewStyle;
    style?: ViewStyle;
    backdropBlured?: boolean;
    cloneChildren?: boolean;
    onBackdropPress?: (event: GestureResponderEvent) => void;
};

export const BackdropView: React.FC<BackdropViewProps> = ({
    children,
    backdropStyle,
    backdropBlured = false,
    cloneChildren = true,
    onBackdropPress,
    style,
}) => {
    const renderChildElement = (source: any) => {
        return cloneElement(source, {
            style: [source.props.style, style],
        });
    };

    const componentChildren = cloneChildren
        ? Children.map(children, renderChildElement)
        : children;

    return (
        <BlurView
            intensity={backdropBlured ? 90 : 0}
            tint="dark"
            style={StyleSheet.absoluteFill}
        >
            <TouchableOpacity
                style={[StyleSheet.absoluteFill, backdropStyle]}
                activeOpacity={1.0}
                onPress={onBackdropPress}
            />
            {componentChildren}
        </BlurView>
    );
};
