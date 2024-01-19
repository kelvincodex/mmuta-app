import 'react-native-gesture-handler';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {RouteContainerProvider} from "@/router/Index";
export default function App() {
  return (
      <SafeAreaProvider>
          <RouteContainerProvider />
      </SafeAreaProvider>
  );
}


