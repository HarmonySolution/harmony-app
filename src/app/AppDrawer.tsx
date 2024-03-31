import { Drawer, DrawerItem, Icon, useTheme } from '@ui-kitten/components';
import { Outlet, useNavigate } from 'react-router-native';
import {
    View,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Easing,
} from 'react-native';
import DrawerHeadBg from '../../assets/images/drawer_head_bg.png';
import DrawerHeadBg2 from '../../assets/images/drawer_head_bg2.png';
import { Routes } from './Routes';
import { useAppDrawer } from './AppDrawerContext';
import { useEffect, useRef, useState } from 'react';

const ANIMATION_DURATION = 300;

export const AppDrawer = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { isOpened, closeDrawer, openDrawer } = useAppDrawer();
    const [isAnimatedOpened, setIsAnimatedOpened] = useState(false);
    const { width: windowWidth, height: windowHeight } =
        Dimensions.get('window');
    const drawerWidth = windowWidth * 0.768;
    const offsetValue = useRef(new Animated.Value(-drawerWidth)).current;
    const opacityValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(offsetValue, {
            toValue: isOpened ? 0 : -drawerWidth,
            duration: ANIMATION_DURATION,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
        }).start();
        Animated.timing(opacityValue, {
            toValue: isOpened ? 1 : 0,
            duration: ANIMATION_DURATION,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
        }).start(({ finished }) => {
            if (isOpened === false && isAnimatedOpened === true && finished) {
                setIsAnimatedOpened(false);
            }
        });

        if (isOpened === true && isAnimatedOpened === false) {
            setIsAnimatedOpened(true);
        }
    }, [
        offsetValue,
        opacityValue,
        isOpened,
        isAnimatedOpened,
        setIsAnimatedOpened,
    ]);

    return (
        <Animated.View
            style={{
                width: windowWidth,
                height: windowHeight,
                flexDirection: 'row',
                alignItems: 'stretch',
                transform: [{ translateX: offsetValue }],
            }}
        >
            <View
                style={{
                    width: drawerWidth,
                }}
            >
                <Drawer header={DrawerHeader}>
                    <DrawerItem
                        title="Main"
                        accessoryLeft={
                            <Icon
                                name="home-outline"
                                fill={theme['color-primary-default']}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        onPress={() => {
                            navigate(Routes.Dashboard);
                            closeDrawer();
                        }}
                    />
                    <DrawerItem
                        title="Messages"
                        accessoryLeft={
                            <Icon
                                name="message-circle-outline"
                                fill={theme['color-primary-default']}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        onPress={() => {
                            navigate(Routes.Messages);
                            closeDrawer();
                        }}
                    />
                    <DrawerItem
                        title="My booking"
                        accessoryLeft={
                            <Icon
                                name="checkmark-square-outline"
                                fill={theme['color-primary-default']}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        onPress={() => {
                            navigate(Routes.MyBooking);
                            closeDrawer();
                        }}
                    />
                    <DrawerItem
                        title="My Ads"
                        accessoryLeft={
                            <Icon
                                name="file-outline"
                                fill={theme['color-primary-default']}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        onPress={() => {
                            navigate(Routes.MyAds);
                            closeDrawer();
                        }}
                    />
                    <DrawerItem
                        title="Favorites"
                        accessoryLeft={
                            <Icon
                                name="heart-outline"
                                fill={theme['color-primary-default']}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        onPress={() => {
                            navigate(Routes.Favorites);
                            closeDrawer();
                        }}
                    />
                    <DrawerItem
                        title="Settings"
                        accessoryLeft={
                            <Icon
                                name="settings-outline"
                                fill={theme['color-primary-default']}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        onPress={() => {
                            navigate(Routes.Settings);
                            closeDrawer();
                        }}
                    />
                </Drawer>
            </View>
            <View style={{ width: windowWidth, height: windowHeight }}>
                <Outlet />
                {isAnimatedOpened && (
                    <TouchableOpacity
                        style={[StyleSheet.absoluteFill]}
                        onPress={closeDrawer}
                    >
                        <Animated.View
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                opacity: opacityValue,
                            }}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </Animated.View>
    );
};

const DrawerHeader = () => {
    const theme = useTheme();
    const { width: windowWidth } = Dimensions.get('window');
    const drawerWidth = windowWidth * 0.768;

    return (
        <View
            style={{
                overflow: 'hidden',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
        >
            <Image
                style={{
                    resizeMode: 'cover',
                    height: 160,
                    width: drawerWidth,
                }}
                source={DrawerHeadBg2}
            />
        </View>
    );
};
