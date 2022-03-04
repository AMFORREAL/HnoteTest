import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navigator from './components/view/Navigator'
import NoteTitle from './components/view/NoteTitle';
import HomeScreen from './pages/HomeScreen';
import EditingScreen from './pages/EditingScreen'
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
      <Stack.Navigator
        screenOptions={{
          header: () => null
        }}>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen} />
        <Stack.Screen
          name='EditingScreen'
          component={EditingScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


