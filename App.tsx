import 'react-native-gesture-handler';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {RouteContainerProvider} from "@/router/Index";
import {Provider} from "react-redux";
import {persistor, rootStore} from "@/store";
import { PersistGate } from 'redux-persist/integration/react';
import {useEffect} from "react";
import {Text} from "react-native";
export default function App() {

    useEffect(() => {
        if((Text as any).defaultProps == null) (Text as any).defaultProps = {};
        (Text as any).defaultProps.allowFontScaling = false;
    }, []);
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


