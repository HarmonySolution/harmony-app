import { Dimensions, UIManager, findNodeHandle } from 'react-native';

type Props = {
    element: any;
    offset?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
};

export const isElementFitsToWindow = ({
    element,
    offset: { top = 0, bottom = 0, left = 0, right = 0 } = {},
}: Props) => {
    const windowDim = Dimensions.get('window');

    return new Promise((resolve) => {
        const node = findNodeHandle(element)!;
        UIManager.measureInWindow(node, (x, y, w, h) => {
            if (x < left) {
                resolve(false);
                return;
            }

            if (y < top) {
                resolve(false);
                return;
            }

            if (windowDim.height < y + h + bottom) {
                resolve(false);
                return;
            }

            if (windowDim.width < x + w + right) {
                resolve(false);
                return;
            }

            resolve(true);
        });
    });
};
