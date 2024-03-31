import {
    Card,
    List,
    TopNavigation,
    Text,
    Icon,
    useTheme,
    Button,
    Layout,
    Input,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../ui/SafeAreaLayout/SafeAreaLayout';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { Routes } from '../app/Routes';
import { useAppDrawer } from '../app/AppDrawerContext';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';

const TOP_LIST_DATA = [
    {
        id: 1,
        sectionInfo: {
            id: 1,
            name: 'SPA & Massage',
        },
        topAds: [
            {
                id: 1,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 2,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 3,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 4,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 5,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
        ],
    },
    {
        id: 2,
        sectionInfo: {
            id: 2,
            name: 'Fitness & Yoga',
        },
        topAds: [
            {
                id: 6,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 7,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 8,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 9,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 10,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
        ],
    },
    {
        id: 3,
        sectionInfo: {
            id: 3,
            name: 'Beauty',
        },
        topAds: [
            {
                id: 6,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 7,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 8,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 9,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 10,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
        ],
    },
    {
        id: 4,
        sectionInfo: {
            id: 4,
            name: 'Psychology',
        },
        topAds: [
            {
                id: 6,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 7,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 8,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 9,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
            {
                id: 10,
                mainImage: require('../../assets/images/fatima.jpeg'),
                name: 'Fatima Pirova',
                rating: 3.8,
                isOnline: true,
            },
        ],
    },
];

export const DashboardScreen = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { openDrawer } = useAppDrawer();
    const [searchText, setSearchText] = useState('');

    const renderSection = ({ item }: any): React.ReactElement => {
        const { id, sectionInfo, topAds } = item;

        return (
            <View style={{}}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: 16,
                    }}
                >
                    <Text style={{}} category="h6">
                        {sectionInfo.name}
                    </Text>
                    <Button
                        style={{}}
                        size="tiny"
                        appearance="ghost"
                        accessoryRight={
                            <Icon name="arrow-ios-forward-outline" />
                        }
                    >
                        See All
                    </Button>
                </View>
                <List
                    contentContainerStyle={{ gap: 32 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topAds}
                    renderItem={({
                        item: { id, mainImage, name, rating, isOnline },
                    }: any): React.ReactElement => (
                        <Pressable
                            style={{ width: 200, gap: 4 }}
                            onPress={() =>
                                navigate(Routes.AdvertisementScreen, {
                                    state: {
                                        id,
                                        fromDashboard: true,
                                    },
                                })
                            }
                        >
                            <Image
                                style={{
                                    resizeMode: 'cover',
                                    width: 200,
                                    height: 140,
                                }}
                                source={mainImage}
                            />
                            <View style={{}}>
                                <Text style={{}} category="s2">
                                    {name}
                                </Text>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
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
                    onChangeText={setSearchText}
                />
                <Button
                    accessoryLeft={<Icon name="search" />}
                    status="primary"
                    appearance="ghost"
                    style={{ paddingHorizontal: 0, paddingVertical: 0 }}
                    onPress={() =>
                        navigate(Routes.DashboardFilterScreen, {
                            state: { searchText },
                        })
                    }
                />
            </Layout>
            <List
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 32,
                    padding: 16,
                    paddingBottom: 50,
                }}
                data={TOP_LIST_DATA}
                renderItem={renderSection}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    horizontalItem: {
        width: 256,
    },
});
