import React from "react";
import { AppSafeAreaProvider } from "./components/layout";
import { Provider } from "react-redux";
import { store } from "./rtk/app/store";
import RootNavigator from "./navigation/root-navigator";
import { NavigationContainer } from "@react-navigation/native";
import ErrorBoundary from "./screens/error-boundary/ErrorBoundary";

const App = () => {
  return (
    <AppSafeAreaProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ErrorBoundary>
      </Provider>
    </AppSafeAreaProvider>
  );
};

export default App;
