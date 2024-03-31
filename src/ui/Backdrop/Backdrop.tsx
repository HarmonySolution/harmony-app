import { useCallback, useEffect, useState } from 'react';
import { BackdropView } from './BackdropView';
import { MeasureElement } from './MeasureElement';
import { Modal, NativeSyntheticEvent, View, ViewStyle } from 'react-native';
import { isElementFitsToWindow } from '../../utils/isElementFitsToWindow';

type BackdropProps = {
    showBackdrop?: boolean;
    backdropBlured?: boolean;
    children: JSX.Element;
    backdropStyle?: ViewStyle;
    onBackdropPress?: (event: NativeSyntheticEvent<any>) => void;
    onBackdropShow?: (event: NativeSyntheticEvent<any>) => void;
};

export const Backdrop: React.FC<BackdropProps> = ({
    showBackdrop = false,
    backdropBlured = false,
    children,
    backdropStyle,
    onBackdropPress,
    onBackdropShow,
}) => {
    const [isMeasured, setIsMeasured] = useState(false);
    const [displayFrame, setDisplayFrame] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

    const onContentMeasure = useCallback(
        ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => {
            setDisplayFrame({
                top: y,
                left: x,
                width: w,
                height: h,
            });
            setIsMeasured(true);
        },
        [setDisplayFrame]
    );

    // useEffect(() => {
    //     const fn = async () => {
    //         const isElementFits = await isElementFitsToWindow({ element: e.target, offset: { bottom: 200, top: 150 } });

    //         setShowScrollableBackdrop(isElementFits === false);
    //     };

    //     showBackdrop && fn();
    // }, [showBackdrop, children]);

    if (!showBackdrop) {
        return children;
    }

    return (
        <>
            <MeasureElement onMeasure={onContentMeasure}>
                {children}
            </MeasureElement>
            {isMeasured && (
                <Modal
                    transparent={true}
                    statusBarTranslucent={false}
                    visible={true}
                    onRequestClose={onBackdropPress}
                    onShow={onBackdropShow}
                    onDismiss={onBackdropPress as any}
                >
                    <BackdropView
                        backdropBlured={backdropBlured}
                        backdropStyle={{
                            // backgroundColor: 'rgba(0,0,0,0.5)',
                            ...backdropStyle,
                        }}
                        onBackdropPress={onBackdropPress}
                    >
                        <View style={[{ position: 'absolute' }, displayFrame]}>
                            {children}
                        </View>
                    </BackdropView>
                </Modal>
            )}
        </>
    );
};
