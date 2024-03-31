import React, { useContext, useState } from 'react';

interface AppDrawerContextProps {
    isOpened: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
}

const AppDrawerContext = React.createContext<AppDrawerContextProps>(
    {} as AppDrawerContextProps
);

export const useAppDrawer = () => useContext(AppDrawerContext);

export const AppDrawerProvider: React.FC<{
    children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const openDrawer = () => {
        setIsOpened(true);
    };

    const closeDrawer = () => {
        setIsOpened(false);
    };

    return (
        <AppDrawerContext.Provider
            value={{
                openDrawer,
                closeDrawer,
                isOpened,
            }}
        >
            {children}
        </AppDrawerContext.Provider>
    );
};
