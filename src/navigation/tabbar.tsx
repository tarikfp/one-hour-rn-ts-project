import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types";
import { RouteNames } from "./route-names";
import { getBottomTabBarRoutes } from "./helpers/tabbar-routes";

const Tab = createBottomTabNavigator<BottomTabParamList>();

function TabBar() {
  const bottomTabBarRoutes = React.useMemo(() => getBottomTabBarRoutes(), []);

  return (
    <Tab.Navigator initialRouteName={RouteNames.UserStack}>
      {bottomTabBarRoutes.map((routeParams) => (
        <Tab.Screen key={routeParams.name} {...routeParams} />
      ))}
    </Tab.Navigator>
  );
}

export default TabBar;
