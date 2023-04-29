//import {  Text, View, Button } from 'react-native';
//LIBRERIAS PARA EL MANEJO DE L NAVEGACION ENTRE PANTALLAS
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//
import User from './screens/User';
import Rent from './screens/Rent';
import Car from './screens/Car';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return true;
};

export default function App() {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={User} />
            <Stack.Screen name="Profile" component={Car} />
            <Stack.Screen name="Settings" component={Rent} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={User} />
            <Stack.Screen name="SignUp" component={User} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function CarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selecciona tu carro</Text>
    </View>
  );
}

function RentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Renta carro</Text>
    </View>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Car" component={Car} />
      <Tab.Screen name="Rent" component={Rent} />
    </Tab.Navigator>
  );
}


