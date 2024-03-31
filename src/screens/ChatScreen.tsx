import {
    Avatar,
    Button,
    Icon,
    Layout,
    Text,
    useTheme,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../ui/SafeAreaLayout/SafeAreaLayout';
import { Keyboard, Pressable, TextInput, View } from 'react-native';
import { useLocation, useNavigate } from 'react-router-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { KeyboardShift } from '../ui/KeyboardShift/KeyboardShift';
import { AutoExpandingTextInput } from '../ui/TextInput/AutoExpandingTextInput';
import { ScrollView } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import { formatDateForMessages } from '../utils/formatDateForMessages';
import { Backdrop } from '../ui/Backdrop/Backdrop';
import React from 'react';

const DATA = [
    {
        id: 1,
        text: `Contrary to popular`,
        sender: {
            id: 1,
            name: 'Ramil Zakirov',
            avatar: null,
        },
        createdAt: new Date(),
        isRead: true,
    },
    {
        id: 2,
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem`,
        sender: {
            id: 2,
            name: 'Fatima Pirova',
            avatar: null,
        },
        createdAt: new Date(),
        isRead: true,
    },
    {
        id: 3,
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem`,
        sender: {
            id: 1,
            name: 'Ramil Zakirov',
            avatar: null,
        },
        createdAt: new Date(),
        isRead: true,
    },
    {
        id: 4,
        text: `Contrary to popular belief`,
        sender: {
            id: 2,
            name: 'Fatima Pirova',
            avatar: null,
        },
        createdAt: new Date(),
        isRead: true,
    },
    {
        id: 5,
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem`,
        sender: {
            id: 1,
            name: 'Ramil Zakirov',
            avatar: null,
        },
        createdAt: new Date(),
        isRead: true,
    },
];

export const ChatScreen = () => {
    const {
        state: { companion },
    } = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const inputRef = useRef<TextInput>(null);
    const [inputText, setInputText] = useState('');
    const [contextVisibleMessage, setContextVisibleMessage] =
        useState<any>(null);
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);

    useEffect(() => {
        const listenerShow = Keyboard.addListener('keyboardWillShow', () => {
            setIsKeyboardShow(true);
        });
        const listenerHide = Keyboard.addListener('keyboardWillHide', () => {
            setIsKeyboardShow(false);
        });

        return () => {
            listenerShow.remove();
            listenerHide.remove();
        };
    }, []);

    const renderMessage = (message: any) => {
        if (message.sender.id === 2) {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 8,
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text
                        category="c1"
                        appearance="hint"
                        style={{ marginBottom: 12 }}
                    >
                        {new Date(message.createdAt)
                            .toTimeString()
                            .substring(0, 5)}
                    </Text>
                    <Layout
                        level="4"
                        style={{
                            maxWidth: '80%',
                            padding: 12,
                            borderRadius: 18,
                            borderBottomRightRadius: 2,
                            backgroundColor: theme['color-primary-600'],
                        }}
                    >
                        <Text
                            category="p1"
                            style={{ color: theme['color-basic-100'] }}
                        >
                            {message.text}
                        </Text>
                    </Layout>
                </View>
            );
        }

        return (
            <View
                style={{
                    flexDirection: 'row',
                    gap: 8,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                }}
            >
                <Layout
                    level="4"
                    style={{
                        maxWidth: '80%',
                        padding: 12,
                        borderRadius: 18,
                        borderBottomLeftRadius: 2,
                    }}
                >
                    <Text category="p1">{message.text}</Text>
                </Layout>
                <Text
                    category="c1"
                    appearance="hint"
                    style={{ marginBottom: 12 }}
                >
                    {new Date(message.createdAt).toTimeString().substring(0, 5)}
                </Text>
            </View>
        );
    };

    const renderContextMenu = (message: any) => {
        return (
            <View
                style={{
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                }}
            >
                <Button accessoryRight={<Icon name="undo-outline" />}>
                    Reply
                </Button>
                <Button accessoryRight={<Icon name="copy-outline" />}>
                    Copy text
                </Button>
            </View>
        );
    };

    const onPressSendMessage = useCallback(
        (alternativeInputText: string) => {
            const text = alternativeInputText || inputText;

            if (text) {
                // dispatch(pushMessage({
                //     threadId: thread.id,
                //     message: text,
                //     senderId: SENDER_USER
                // }));

                inputRef.current?.clear();
                Keyboard.dismiss();

                // setTimeout(() => sendMessage(text), 100);
            }
        },
        [inputText, inputRef.current]
    );

    let messagesBody = null;

    if (DATA.length > 0) {
        messagesBody = (
            <ScrollView style={{ flex: 1, transform: [{ scaleY: -1 }] }}>
                <View
                    style={{
                        transform: [{ scaleY: -1 }],
                        justifyContent: 'flex-end',
                        gap: 8,
                        paddingHorizontal: 16,
                        paddingBottom: 20,
                    }}
                >
                    {DATA.map((message, i) => {
                        let dateEl = null;
                        const mDateText = renderMessageDate(
                            message,
                            i === 0 ? null : DATA[i - 1]
                        );

                        if (mDateText) {
                            dateEl = (
                                <View style={{ alignItems: 'center' }}>
                                    <Layout
                                        level="3"
                                        style={{
                                            borderRadius: 10,
                                            paddingHorizontal: 8,
                                            paddingVertical: 4,
                                            marginVertical: 16,
                                        }}
                                    >
                                        <Text category="c1">{mDateText}</Text>
                                    </Layout>
                                </View>
                            );
                        }

                        const showMessageBackdrop =
                            contextVisibleMessage &&
                            contextVisibleMessage.id === message.id;

                        return (
                            <React.Fragment key={message.id}>
                                {dateEl}
                                <Backdrop
                                    showBackdrop={showMessageBackdrop}
                                    backdropBlured={true}
                                    onBackdropPress={() => {
                                        setContextVisibleMessage(null);
                                    }}
                                >
                                    <Pressable
                                        style={{ width: '100%' }}
                                        onLongPress={() =>
                                            setContextVisibleMessage(message)
                                        }
                                    >
                                        {showMessageBackdrop ? (
                                            <View
                                                style={{
                                                    width: '100%',
                                                    gap: 8,
                                                    alignItems: 'flex-end',
                                                    marginTop: -16,
                                                    marginLeft: -8,
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        width: '100%',
                                                        paddingVertical: 16,
                                                        paddingHorizontal: 8,
                                                        borderRadius: 20,
                                                    }}
                                                >
                                                    {renderMessage(message)}
                                                </View>
                                                {renderContextMenu(
                                                    contextVisibleMessage
                                                )}
                                            </View>
                                        ) : (
                                            renderMessage(message)
                                        )}
                                    </Pressable>
                                </Backdrop>
                            </React.Fragment>
                        );
                    })}
                </View>
            </ScrollView>
        );
    }

    return (
        <SafeAreaLayout
            topInset
            style={{
                flex: 1,
                backgroundColor: theme['background-basic-color-2'],
            }}
        >
            <KeyboardShift style={{ flex: 1 }}>
                <Layout
                    style={{
                        paddingHorizontal: 16,
                        paddingTop: 16,
                        paddingBottom: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 16,
                    }}
                    level="1"
                >
                    <Button
                        accessoryLeft={<Icon name="arrow-ios-back" />}
                        status="control"
                        style={{ width: 32 }}
                        onPress={() => navigate(-1)}
                    />
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            gap: 16,
                        }}
                    >
                        <Avatar source={companion.avatar} size="small" />
                        <View>
                            <Text category="c2" appearance="hint">
                                Massage
                            </Text>
                            <Text category="h6">{companion.name}</Text>
                        </View>
                    </View>
                    <Button
                        accessoryLeft={<Icon name="phone-outline" />}
                        status="control"
                        style={{ width: 32 }}
                        onPress={() => null}
                    />
                </Layout>
                <Layout level="1" style={{ flex: 1 }}>
                    {messagesBody}
                </Layout>
                <SafeAreaLayout
                    bottomInset={!isKeyboardShow}
                    level="2"
                    style={[
                        {
                            flexDirection: 'row',
                            gap: 8,
                            alignItems: 'flex-end',
                            paddingHorizontal: 8,
                            paddingTop: 8,
                        },
                        isKeyboardShow ? { paddingBottom: 8 } : {},
                    ]}
                >
                    <Button
                        status="primary"
                        appearance="ghost"
                        accessoryLeft={<Icon name="plus-outline" />}
                        onPress={() => onPressSendMessage(inputText)}
                        style={{ paddingHorizontal: 0, paddingVertical: 0 }}
                    />
                    <AutoExpandingTextInput
                        ref={inputRef}
                        maxHeight={200}
                        style={{
                            flex: 1,
                            backgroundColor: theme['background-basic-color-4'],
                            borderRadius: 10,
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                        }}
                        placeholder={'Message'}
                        onChangeText={(txt) => {
                            setInputText(txt);
                        }}
                    />
                    <Button
                        status="primary"
                        appearance="ghost"
                        accessoryLeft={<Icon name="arrow-upward-outline" />}
                        onPress={() => onPressSendMessage(inputText)}
                        style={{ paddingHorizontal: 0, paddingVertical: 0 }}
                    />
                </SafeAreaLayout>
            </KeyboardShift>
        </SafeAreaLayout>
    );
};

const renderMessageDate = (currentMessage: any, prevMessage: any) => {
    const currentCreatedAt = dayjs(new Date(currentMessage.createdAt));

    const prevCreatedAt =
        prevMessage === null ? null : dayjs(new Date(prevMessage.createdAt));

    if (prevMessage === null) {
        return formatDateForMessages(currentMessage.createdAt);
    }

    if (currentCreatedAt.isSame(prevCreatedAt, 'day')) {
        return null;
    }

    return formatDateForMessages(currentMessage);
};
