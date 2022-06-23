import * as React from "react";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  useWindowDimensions,
  Button,
} from "react-native";
import { RouteNames } from "../../navigation/route-names";
import {
  UserStackNavigationProp,
  UserStackRouteProp,
} from "../../navigation/types/user";
import { useAppDispatch } from "../../rtk/app/hooks";
import { addUser } from "../../rtk/features/user";
import { AppSafeAreaView } from "../../components/layout/AppSafeAreaView";
import tw from "../../theme/tailwind";
import { Formik } from "formik";
import _ from "lodash";
import { getAddUserInitialValues } from "./types/index";

type Props = {
  navigation: UserStackNavigationProp<RouteNames.AddUser>;
  route: UserStackRouteProp<RouteNames.AddUser>;
};

export default function AddUserScreen({ navigation, route }: Props) {
  const dispatch = useAppDispatch();
  const { width, height } = useWindowDimensions();

  const handleFormSubmit = (values: any) => {
    dispatch(addUser(values));
    navigation.goBack();
  };

  return (
    <AppSafeAreaView>
      <ScrollView
        bounces={false}
        bouncesZoom={false}
        style={tw`flex-1`}
        contentContainerStyle={{ flexGrow: 1 }}>
        <Formik
          enableReinitialize
          initialValues={getAddUserInitialValues}
          onSubmit={handleFormSubmit}>
          {(client) => (
            <View style={tw`flex-1 justify-evenly items-center p-[24px]`}>
              <View
                style={tw`h-[50px] w-full flex-row items-center justify-between`}>
                <Text>First name</Text>
                <TextInput
                  style={tw`h-[50px] bg-paper w-[${width / 2}px]`}
                  value={client.values.firstName}
                  onChangeText={client.handleChange("firstName")}
                />
              </View>

              <View
                style={tw`h-[50px] w-full flex-row items-center justify-between`}>
                <Text>Last name</Text>
                <TextInput
                  style={tw`h-[50px] bg-paper w-[${width / 2}px]`}
                  value={client.values.lastName}
                  onChangeText={client.handleChange("lastName")}
                />
              </View>
              <Button onPress={client.handleSubmit} title="submit" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </AppSafeAreaView>
  );
}
