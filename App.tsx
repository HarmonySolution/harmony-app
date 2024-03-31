import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from './src/app/Navigator';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import 'react-native-gesture-handler';
import { AppDrawerProvider } from './src/app/AppDrawerContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <SafeAreaProvider>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <AppDrawerProvider>
                                <Navigator />
                            </AppDrawerProvider>
                        </GestureHandlerRootView>
                    </SafeAreaProvider>
                </ApplicationProvider>
            </PersistGate>
        </Provider>
    );
}
