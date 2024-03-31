import React, { useCallback, useEffect, useState } from 'react';
import { Button, Icon, Input, Layout, List, Text } from '@ui-kitten/components';
import { SafeAreaLayout } from '../ui/SafeAreaLayout/SafeAreaLayout';
import { useAppDrawer } from '../app/AppDrawerContext';
import { View, Image } from 'react-native';
import { useLocation, useNavigate } from 'react-router-native';
import { Routes } from '../app/Routes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating } from '../ui/Rating/Rating';

const DATA = [
    {
        id: 1,
        mainImage: require('../../assets/images/fatima.jpeg'),
        allImages: [
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/fatima.jpeg'),
        ],
        name: 'Fatima Pirova',
        rating: 3.8,
        isOnline: true,
    },
    {
        id: 2,
        mainImage: require('../../assets/images/fatima.jpeg'),
        allImages: [
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/fatima.jpeg'),
        ],
        name: 'Fatima Pirova',
        rating: 3.8,
        isOnline: true,
    },
    {
        id: 3,
        mainImage: require('../../assets/images/fatima.jpeg'),
        allImages: [
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/fatima.jpeg'),
        ],
        name: 'Fatima Pirova',
        rating: 3.8,
        isOnline: true,
    },
    {
        id: 4,
        mainImage: require('../../assets/images/fatima.jpeg'),
        allImages: [
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/fatima.jpeg'),
        ],
        name: 'Fatima Pirova',
        rating: 3.8,
        isOnline: true,
    },
    {
        id: 5,
        mainImage: require('../../assets/images/fatima.jpeg'),
        allImages: [
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/ramil.jpeg'),
            require('../../assets/images/fatima.jpeg'),
            require('../../assets/images/fatima.jpeg'),
        ],
        name: 'Fatima Pirova',
        rating: 3.8,
        isOnline: true,
    },
];

export const DashboardFilterScreen = () => {
    const { openDrawer } = useAppDrawer();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const {
        state: { searchText: searchTextFromDashboard },
    } = useLocation();

    useEffect(() => {
        if (searchTextFromDashboard && !searchText) {
            setSearchText(searchTextFromDashboard);
        }
    }, [searchTextFromDashboard, setSearchText]);

    const onPressAdv = (advId: any) => () => {
        navigate(Routes.AdvertisementScreen, {
            state: {
                id: advId,
                fromDashboard: true,
            },
        });
    };

    const renderAdvertisement = ({ item }: any): React.ReactElement => {
        const advId = item.id;
        return (
            <Layout>
                <TouchableOpacity activeOpacity={1} onPress={onPressAdv(advId)}>
                    <List
                        contentContainerStyle={{ gap: 4 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={item.allImages}
                        renderItem={({ item }: any): React.ReactElement => (
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{ borderRadius: 5, overflow: 'hidden' }}
                                onPress={onPressAdv(advId)}
                            >
                                <Image
                                    style={{
                                        resizeMode: 'cover',
                                        width: 200,
                                        height: 140,
                                    }}
                                    source={item}
                                />
                            </TouchableOpacity>
                        )}
                    />
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Text category="h6">{item.name}</Text>
                    </View>
                    <Rating value={item.rating} size="small" />
                </TouchableOpacity>
            </Layout>
        );
    };

    return (
        <SafeAreaLayout topInset>
            <Layout
                style={{
                    paddingHorizontal: 16,
                    paddingTop: 16,
                    paddingBottom: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                }}
            >
                <Button
                    accessoryLeft={<Icon name="arrow-ios-back-outline" />}
                    status="control"
                    style={{ width: 32 }}
                    onPress={() => navigate(-1)}
                />
                <Input
                    style={{ flex: 1 }}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <Button
                    accessoryLeft={<Icon name="search" />}
                    status="primary"
                    appearance="ghost"
                    style={{ paddingHorizontal: 0, paddingVertical: 0 }}
                />
            </Layout>
            <List
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 32,
                    padding: 16,
                    paddingBottom: 50,
                }}
                data={DATA}
                renderItem={renderAdvertisement}
            />
        </SafeAreaLayout>
    );
};
