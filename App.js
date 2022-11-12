  import { StatusBar } from "@react-navigation/stack";
  import { StyleSheet,Text,View,TouchableOpacity,TextInput,} from "react-native";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./components/Indexpp.js"

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      <View>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Principal}
                options={{ title: "SISTEMA DE VENTAS" }} />
            </Stack.Navigator>
          </NavigationContainer>
      </View>
     );

  }