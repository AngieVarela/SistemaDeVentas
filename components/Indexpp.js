import VendedorScreen from "./VendedorScreen";
import FuncionVentasS from "./VentaScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Vendedor"
        component={VendedorScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="people-outline"
              color={"#FFA1CF"}
              size={20}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Ventas"
        component={FuncionVentasS}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="move-outline"
              color={"#FFA1CF"}
              size={20}
            ></Ionicons>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
