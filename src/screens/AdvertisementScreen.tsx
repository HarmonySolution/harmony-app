import { ScrollView, Image, Dimensions, View } from 'react-native';
import { ScreenComponentProps } from '../typings/ScreenComponentProps';
import { Button, Icon, Text, useTheme } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCallback, useState } from 'react';
import { ManIcon } from '../ui/icons/ManIcon';
import { WomanIcon } from '../ui/icons/WomanIcon';
import { Routes } from '../app/Routes';
import { useLocation, useNavigate } from 'react-router-native';
import { useAppDrawer } from '../app/AppDrawerContext';
import { BlurView } from 'expo-blur';
import { Rating } from '../ui/Rating/Rating';

export const AdvertisementScreen = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { openDrawer } = useAppDrawer();
    const { top: topInset, bottom: bottomInset } = useSafeAreaInsets();
    const windowWidth = Dimensions.get('window').width;
    const [isFavorite, setIsFavorite] = useState(false);
    const {
        state: { id: advId, fromDashboard },
    } = useLocation();

    const onPressFavorite = useCallback(() => {
        setIsFavorite((x) => !x);
    }, [setIsFavorite]);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: theme['background-basic-color-2'],
                }}
                contentContainerStyle={{ paddingBottom: bottomInset }}
            >
                <View>
                    <Image
                        source={require('../../assets/images/fatima.jpeg')}
                        style={{ width: windowWidth, height: windowWidth }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: topInset,
                            paddingHorizontal: 16,
                            flexDirection: 'row',
                            gap: 8,
                            left: 0,
                            right: 0,
                        }}
                    >
                        {fromDashboard ? (
                            <Button
                                status="control"
                                style={{
                                    borderRadius: 48,
                                    width: 48,
                                }}
                                accessoryLeft={
                                    <Icon name="arrow-ios-back-outline" />
                                }
                                onPress={() => navigate(-1)}
                            />
                        ) : (
                            <Button
                                status="control"
                                style={{
                                    borderRadius: 48,
                                    width: 48,
                                }}
                                accessoryLeft={<Icon name="menu-outline" />}
                                onPress={openDrawer}
                            />
                        )}
                        <View style={{ flex: 1 }} />
                        <Button
                            status="control"
                            style={{
                                borderRadius: 48,
                                width: 48,
                            }}
                            accessoryLeft={
                                isFavorite ? (
                                    <Icon name="heart" fill={'red'} />
                                ) : (
                                    <Icon name="heart-outline" />
                                )
                            }
                            onPress={onPressFavorite}
                        ></Button>
                        <Button
                            status="control"
                            style={{
                                borderRadius: 48,
                                width: 48,
                            }}
                            accessoryLeft={
                                <Icon name="more-vertical-outline" />
                            }
                            onPress={() => navigate(-1)}
                        ></Button>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            paddingHorizontal: 16,
                            bottom: 16,
                            left: 0,
                            right: 0,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Button
                            status="control"
                            accessoryLeft={<Icon name="phone-outline" />}
                            style={{ width: 130, borderRadius: 100 }}
                        >
                            Call
                        </Button>
                        <Button
                            status="control"
                            accessoryLeft={<Icon name="paper-plane-outline" />}
                            style={{ width: 130, borderRadius: 100 }}
                            onPress={() =>
                                navigate(Routes.MessageScreen, {
                                    state: {
                                        companion: {
                                            id: 1,
                                            name: 'Fatima Pirova',
                                            avatar: require('../../assets/images/fatima.jpeg'),
                                        },
                                    },
                                })
                            }
                        >
                            Message
                        </Button>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
                    <Text category="s1" appearance="hint">
                        Services / Massage
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 16, paddingTop: 4 }}>
                    <Text category="h5">Fatima Pirova</Text>
                </View>
                <View style={{ paddingHorizontal: 16, paddingTop: 4 }}>
                    <Rating value={3.8} />
                </View>
                <View style={{ paddingHorizontal: 16, paddingTop: 20 }}>
                    <Text category="s1">Оказываю услуги:</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 16,
                            paddingVertical: 4,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 12,
                                alignItems: 'center',
                            }}
                        >
                            <ManIcon />
                            <Text>Мужчинам</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 12,
                                alignItems: 'center',
                            }}
                        >
                            <WomanIcon />
                            <Text>Женщинам</Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{
                        marginHorizontal: 16,
                        marginTop: 30,
                    }}
                    category="p1"
                >
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                </Text>
            </ScrollView>
            <BlurView
                intensity={15}
                tint="light"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: topInset,
                }}
            ></BlurView>
        </View>
    );
};
