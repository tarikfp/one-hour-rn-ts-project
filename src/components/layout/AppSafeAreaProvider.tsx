import * as React from "react";
import {
  Metrics,
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";

interface AppSafeAreaProviderProps {
  metrics?: Metrics;
}

const AppSafeAreaProviderComponent: React.FC<AppSafeAreaProviderProps> = ({
  children,
  metrics,
}) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => {
        if (insets) {
          return children;
        }
        return (
          <SafeAreaProvider initialMetrics={metrics}>
            {children}
          </SafeAreaProvider>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export const AppSafeAreaProvider = AppSafeAreaProviderComponent;
