import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    StyledComponentProps,
    LayoutProps,
    Layout,
    useTheme,
} from '@ui-kitten/components';

export interface SafeAreaLayoutProps extends StyledComponentProps, LayoutProps {
    topInset?: boolean;
    bottomInset?: boolean;
    children?: React.ReactNode;
}

export const SafeAreaLayout: React.FC<SafeAreaLayoutProps> = ({
    topInset,
    bottomInset,
    ...props
}) => {
    const theme = useTheme();
    const insetsConfig = useSafeAreaInsets();

    return (
        <Layout
            {...props}
            style={[
                {
                    paddingTop: topInset ? insetsConfig.top : 0,
                    paddingBottom: bottomInset ? insetsConfig.bottom : 0,
                },
                props.style,
            ]}
        />
    );
};
