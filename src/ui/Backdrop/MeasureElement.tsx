import React from 'react';
import {
    findNodeHandle,
    UIManager,
    StatusBar,
    MeasureInWindowOnSuccessCallback,
} from 'react-native';

type MeasureElementProps = {
    children: JSX.Element;
    onMeasure: (dimension: {
        x: number;
        y: number;
        w: number;
        h: number;
    }) => void;
};

export const MeasureElement: React.FC<MeasureElementProps> = ({
    children,
    onMeasure,
}) => {
    const ref = React.useRef<any>();

    const onUIManagerMeasure: MeasureInWindowOnSuccessCallback = (
        x,
        y,
        w,
        h
    ) => {
        if (!w && !h) {
            measureSelf();
        } else {
            onMeasure({ x, y, w, h });
        }
    };

    const measureSelf = () => {
        const node = findNodeHandle(ref.current)!;
        UIManager.measureInWindow(node, onUIManagerMeasure);
    };

    return React.cloneElement(children, { ref, onLayout: measureSelf });
};
