import 'react-native-gesture-handler';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {RouteContainerProvider} from "@/router/Index";
import {Provider} from "react-redux";
import {persistor, rootStore} from "@/store";
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (
      <SafeAreaProvider>
          <Provider store={rootStore}>
              <PersistGate loading={null} persistor={persistor}>
                <RouteContainerProvider />
              </PersistGate>
          </Provider>
      </SafeAreaProvider>
  );
}


