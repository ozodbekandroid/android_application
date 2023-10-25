import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Setting from './components/Setting';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraverComponent from './components/DraverComponent';
const Note = createDrawerNavigator()
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <NavigationContainer>
        <Note.Navigator drawerContent={DraverComponent}>
          <Note.Screen name='Home' component={Home} />
          <Note.Screen name='Setting' component={Setting} />
        </Note.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
