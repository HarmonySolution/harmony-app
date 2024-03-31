import {
    Icon,
    Input,
    Layout,
    List,
    useTheme,
    Text,
    ListItem,
    Avatar,
    Button,
} from '@ui-kitten/components';
import { ScreenComponentProps } from '../typings/ScreenComponentProps';
import { ListRenderItemInfo, View, ViewStyle } from 'react-native';
import { useState } from 'react';
import { SafeAreaLayout } from '../ui/SafeAreaLayout/SafeAreaLayout';
import { formatDateForMessages } from '../utils/formatDateForMessages';
import { Routes } from '../app/Routes';
import { useAppDrawer } from '../app/AppDrawerContext';
import { useNavigate } from 'react-router-native';

const DATA = [
    {
        id: 1,
        lastMessage: {
            id: 1,
            text: 'Hey! How are you?',
            createdAt: new Date(),
            isRead: true,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
    {
        id: 2,
        lastMessage: {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            createdAt: new Date(),
            isRead: false,
            sender: {
                id: 1,
                name: 'Ramil Zakirov',
                avatar: require('../../assets/images/ramil.jpeg'),
            },
        },
    },
];

export const ChatListScreen = () => {
    const theme = useTheme();
    const { openDrawer } = useAppDrawer();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string>();

    const renderItem = (info: ListRenderItemInfo<any>): React.ReactElement => (
        <MessageItem
            style={{
                paddingVertical: 16,
                paddingHorizontal: 16,
                borderBottomWidth: 1,
                borderBottomColor: theme['background-basic-color-3'],
            }}
            message={info.item}
            onPress={() =>
                navigate(Routes.MessageScreen, {
                    state: {
                        companion: info.item.lastMessage.sender,
                    },
                })
            }
        />
    );

    return (
        <SafeAreaLayout style={{ flex: 1 }} topInset>
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
                    accessoryLeft={<Icon name="menu-outline" />}
                    status="control"
                    style={{ width: 32 }}
                    onPress={openDrawer}
                />
                <Input
                    style={{ flex: 1 }}
                    placeholder="Search"
                    value={searchQuery}
                    accessoryRight={<Icon name="search" />}
                />
            </Layout>
            <List
                style={{ flex: 1 }}
                data={DATA}
                renderItem={renderItem}
                ListFooterComponent={
                    <View
                        style={{
                            height: 28,
                        }}
                    />
                }
            />
        </SafeAreaLayout>
    );
};

export const MessageItem = (props: any): React.ReactElement => {
    const { message, onPress, ...listItemProps } = props;
    const { lastMessage } = message;
    const theme = useTheme();

    const renderProfileAvatar = (): React.ReactElement => (
        <Avatar
            style={{
                width: 40,
                height: 40,
                marginRight: 10,
            }}
            source={lastMessage.sender.avatar}
        />
    );

    return (
        <ListItem
            {...listItemProps}
            onPress={onPress}
            title={
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <Text>{lastMessage.sender.name}</Text>
                        </View>
                        {lastMessage.isRead && (
                            <Icon
                                width={16}
                                height={16}
                                fill={theme['color-primary-default']}
                                name="done-all"
                            />
                        )}
                        <Text
                            style={{
                                marginLeft: 4,
                                textAlign: 'right',
                            }}
                            appearance="hint"
                            category="c1"
                        >
                            {formatDateForMessages(
                                lastMessage.createdAt,
                                true,
                                true
                            )}
                        </Text>
                    </View>
                </View>
            }
            description={
                <Text numberOfLines={2} ellipsizeMode="tail">
                    {lastMessage.text}
                </Text>
            }
            accessoryLeft={renderProfileAvatar}
        />
    );
};
