import React from "react";
import { View, Text, Button } from "react-native";
import { AppSafeAreaView } from "../../components/layout";
import tw from "../../theme/tailwind";

interface Props {
  reset?: () => void;
}

const FallbackScreen: React.FC<Props> = ({ reset, ...props }) => {
  return (
    <AppSafeAreaView>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`font-h2`}>{`Ooops...Something went wrong...`}</Text>
        <Button title={"Okay"} onPress={() => reset?.()} />
      </View>
    </AppSafeAreaView>
  );
};

export default FallbackScreen;
