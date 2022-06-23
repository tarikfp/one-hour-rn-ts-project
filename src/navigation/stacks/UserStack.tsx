import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteNames } from "../route-names";
import { UserStackParamList } from "../types/user";
import { UserList } from "../../screens/user-list";
import { UserDetail } from "../../screens/user-detail";
import { StackRoutesType } from "../types";
import { AddUser } from "../../screens/add-user";

const Stack = createStackNavigator<UserStackParamList>();

const userStackRoutes: StackRoutesType<UserStackParamList> = [
  { name: RouteNames.UserList, component: UserList },
  { name: RouteNames.UserDetail, component: UserDetail },
  { name: RouteNames.AddUser, component: AddUser },
];

function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.UserList}>
      {userStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default UserStack;
