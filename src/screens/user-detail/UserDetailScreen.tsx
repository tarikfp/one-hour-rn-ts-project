import * as React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { AppSafeAreaView } from "../../components/layout";
import { useAppSelector } from "../../rtk/app/hooks";
import tw from "../../theme/tailwind";

export default function UserDetailScreen() {
  const selectedUser = useAppSelector((state) => state.user.user);
  const { width } = useWindowDimensions();

  return (
    <AppSafeAreaView>
      <View style={tw`flex-1 bg-background justify-start items-center`}>
        {selectedUser && (
          <View style={tw`flex-1 justify-evenly items-center`}>
            <Image
              style={tw`w-[${width / 1.5}px] h-[200px]`}
              source={{ uri: selectedUser.image }}
            />

            <UserDetailText
              value={selectedUser.firstName}
              label={"First name"}
            />
            <UserDetailText value={selectedUser.lastName} label={"Last name"} />
            <UserDetailText value={selectedUser.age.toString()} label={"Age"} />
            <UserDetailText
              value={
                selectedUser.company.address.address +
                " " +
                selectedUser.company.address.city +
                " " +
                selectedUser.company.address.state
              }
              label={"Company address"}
            />
          </View>
        )}
      </View>
    </AppSafeAreaView>
  );
}

const UserDetailText = ({ label, value }: { label: string; value: string }) => {
  return (
    <View style={tw`flex-row justify-evenly`}>
      <Text style={tw`text-primary`}>{label}: </Text>
      <Text style={tw`text-textDark`}>{value}</Text>
    </View>
  );
};
