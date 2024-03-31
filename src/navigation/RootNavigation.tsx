import { Icon, useTheme } from '@ui-kitten/components';
import { Routes } from '../app/Routes';
import { Routes as ReactRouterNativeRoutes, Route } from 'react-router-native';
import { DashboardScreen } from '../screens/DashboardScreen';
import { AdvertisementScreen } from '../screens/AdvertisementScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ChatListScreen } from '../screens/ChatListScreen';
import { AppDrawer } from '../app/AppDrawer';
import { DashboardFilterScreen } from '../screens/DashboardFilterScreen';

export const RootNavigator = () => {
    const theme = useTheme();

    return (
        <ReactRouterNativeRoutes>
            <Route path={Routes.Dashboard} element={<AppDrawer />}>
                <Route index={true} Component={DashboardScreen} />
                <Route
                    path={Routes.DashboardFilterScreen}
                    Component={DashboardFilterScreen}
                />
                <Route
                    path={Routes.AdvertisementScreen}
                    Component={AdvertisementScreen}
                />
                <Route path={Routes.Messages} Component={ChatListScreen} />
                <Route path={Routes.MessageScreen} Component={ChatScreen} />
            </Route>
        </ReactRouterNativeRoutes>
    );
};
