import * as React from "react";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import tw from "../../theme/tailwind";

interface AppSafeAreaViewProps {
  edges?: ReadonlyArray<Edge>;
  testId?: string;
  backgroundColor?: string;
}

const AppSafeAreaComponent: React.FC<AppSafeAreaViewProps> = ({
  children,
  testId,
  backgroundColor = tw.color("background"),
  edges,
}) => {
  const style = {
    flex: 1,
    backgroundColor,
  };
  const defaultEdges: Edge[] = ["top", "bottom"];
  return (
    <SafeAreaView
      testID={testId ?? "app.safeareaview"}
      style={style}
      edges={edges ? [...edges, ...defaultEdges] : [...defaultEdges]}>
      {children}
    </SafeAreaView>
  );
};

export const AppSafeAreaView = AppSafeAreaComponent;
