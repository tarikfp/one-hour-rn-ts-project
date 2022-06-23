import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteNames } from "../route-names";
import { BottomTabParamList } from "./tabbar";

// User bottom tab
export type UserStackParamList = {
  [RouteNames.UserList]: undefined;
  [RouteNames.AddUser]: undefined;
  [RouteNames.UserDetail]: { id: number };
};

// User stack navigation prop
export type UserStackNavigationProp<
  RouteName extends keyof UserStackParamList,
> = CompositeNavigationProp<
  StackNavigationProp<UserStackParamList, RouteName>,
  BottomTabNavigationProp<BottomTabParamList>
>;

// User stack route prop
export type UserStackRouteProp<RouteName extends keyof UserStackParamList> =
  RouteProp<UserStackParamList, RouteName>;
