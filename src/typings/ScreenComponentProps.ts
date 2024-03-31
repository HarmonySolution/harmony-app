import { RouteProp } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';

export type ScreenComponentProps<
    ParamList extends ParamListBase = {},
    RouteName extends keyof ParamList = any
> = {
    route: RouteProp<ParamList, RouteName>;
    navigation: any;
};
