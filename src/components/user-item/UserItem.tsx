import * as React from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { IUser } from "../../lib/types";
import tw from "../../theme/tailwind";

type Props = {
  user: Pick<Partial<IUser>, "firstName" | "lastName" | "age" | "image">;
  onPress: () => void;
};

function UserItem({ user, onPress }: Props) {
  const { height, width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={tw`rounded bg-paper justify-center items-center w-[${
        width / 3
      }px] h-[300px]`}
      onPress={onPress}>
      <Image
        style={tw`w-[${width / 1.5}px] h-[200px]`}
        source={{ uri: user.image }}
      />

      <Text style={tw`text-textDark mt-[50px] text-center`}>
        {user.firstName + " " + user.lastName}
      </Text>
    </TouchableOpacity>
  );
}

export default React.memo(UserItem);
