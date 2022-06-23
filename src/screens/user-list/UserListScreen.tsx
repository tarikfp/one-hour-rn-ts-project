import * as React from "react";
import { ActivityIndicator, Button, ScrollView, View } from "react-native";
import { RouteNames } from "../../navigation/route-names";
import {
  UserStackNavigationProp,
  UserStackRouteProp,
} from "../../navigation/types/user";
import { useAppDispatch, useAppSelector } from "../../rtk/app/hooks";
import { getAllUsersAsyncThunk, setUserById } from "../../rtk/features/user";
import { AppSafeAreaView } from "../../components/layout/AppSafeAreaView";
import UserItem from "../../components/user-item/UserItem";
import tw from "../../theme/tailwind";
import _ from "lodash";

type Props = {
  navigation: UserStackNavigationProp<RouteNames.UserList>;
  route: UserStackRouteProp<RouteNames.UserList>;
};

export default function UserListScreen({ navigation, route }: Props) {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getAllUsersAsyncThunk());
  }, []);

  React.useEffect(() => {
    if (userState.error) {
      throw new Error(userState.error);
    }
  }, [userState.error]);

  const _onNavigateToUserDetail = React.useCallback(
    (userId: number) => () => {
      dispatch(setUserById(userId));
      navigation.navigate(RouteNames.UserDetail, { id: userId });
    },
    [],
  );

  const _onNavigateToAddUser = () => {
    navigation.navigate(RouteNames.AddUser);
  };

  return (
    <AppSafeAreaView>
      <ScrollView
        bounces={false}
        bouncesZoom={false}
        style={tw`flex-1`}
        contentContainerStyle={[
          tw`bg-background justify-start items-center`,
          { flexGrow: 1 },
        ]}>
        {userState.loading && <ActivityIndicator size={40} />}

        {!userState.loading &&
          userState.users.map((user) => (
            <View style={tw`w-full flex-row justify-start`}>
              <UserItem
                onPress={_onNavigateToUserDetail(user.id)}
                user={_.pick(user, ["age", "firstName", "image", "lastName"])}
              />
            </View>
          ))}
      </ScrollView>

      <Button onPress={_onNavigateToAddUser} title="Add user" />
    </AppSafeAreaView>
  );
}
