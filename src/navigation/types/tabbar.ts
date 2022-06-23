import {RouteNames} from '../route-names';

export type BottomTabParamList = {
  [RouteNames.UserStack]: undefined;
};

// Stack route type config
export type StackRoutesType<T> = Array<{
  name: keyof T;
  component: React.ComponentType<any>;
}>;
