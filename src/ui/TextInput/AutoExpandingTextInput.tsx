import React, { ComponentProps, useState } from 'react';
import { TextInput, ViewStyle } from 'react-native';

type AutoExpandingTextInputProps = ComponentProps<typeof TextInput> & {
    maxHeight: number;
};

export const AutoExpandingTextInput = React.forwardRef<
    TextInput,
    AutoExpandingTextInputProps
>(({ style, maxHeight, onChangeText, ...props }, ref) => {
    const [text, setText] = useState('');
    const [height, setHeight] = useState(0);

    return (
        <TextInput
            ref={ref}
            {...props}
            multiline={true}
            onChangeText={(text) => {
                setText(text);
                onChangeText && onChangeText(text);
            }}
            onContentSizeChange={(event) =>
                setHeight(event.nativeEvent.contentSize.height)
            }
            style={[
                style,
                { height: Math.min(Math.max(40, height), maxHeight) },
            ]}
            value={text}
        />
    );
});
