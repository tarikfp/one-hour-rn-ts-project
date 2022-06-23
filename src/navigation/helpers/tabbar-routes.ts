import {RouteConfig} from '@react-navigation/native';
import {RouteNames} from '../route-names';
import {BottomTabParamList} from '../types';
import UserStack from '../stacks/UserStack';

export const getBottomTabBarRoutes = (): Array<
  RouteConfig<BottomTabParamList, any, any, any, any>
> => [
  {
    options: {tabBarLabel: 'Users'},
    name: RouteNames.UserStack,
    component: UserStack,
  },
];
