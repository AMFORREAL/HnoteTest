import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navigator from './components/Navigator'
import NoteTitle from './components/NoteTitle';
import Home from './pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from 'react-native/Libraries/NewAppScreen';


const BlankHeader = () => {
  return (
    <View style={{
      height: 34,
      backgroundColor: '#f2f2f2',
    }}></View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BlankHeader></BlankHeader>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


