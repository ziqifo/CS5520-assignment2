import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntryList from './component/EntryList';
import AllEntry from './screen/AllEntriesScreen';
import OverEntry from './screen/OverlimitEntriesScreen';
import AddEntry from './screen/AddEntryScreen';
import EditEntry from './screen/EditEntryScreen';
import ButtonPressable from './component/ButtonPressable';
import { useState } from 'react';
import myStyling from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const [limit, setLimit] = useState(500);

  const TabNavi = ( {navigation} ) => (
    <Tab.Navigator>
      <Tab.Screen 
        name="All" 
        component={AllEntry} 
        initialParams={{ 
          titleText: 'All Entries'
        }}
        options={({ route }) => {
          return {
            headerRight: () => {
              return (
                <ButtonPressable
                  onPressed={() => {navigation.navigate('Add', { limit: limit });}}
                >
                  <AntDesign name="pluscircleo" size={16} color={myStyling.black} />
                </ButtonPressable>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <AntDesign
                name={focused ? "infocirlce" : "infocirlceo"}
                size={18} 
                color={focused ? myStyling.red : myStyling.black}
                />
              );
            },
            tabBarLabel: () => {
              return (
                <Text>All Entries</Text>
              );
            },
          };
        }}
      />
      <Tab.Screen name="Over" component={OverEntry} initialParams={{ 
          titleText: 'Over-Limit Entries'
        }}
        options={({ route }) => {
          return {
            headerRight: () => {
              return (
                <ButtonPressable
                  onPressed={() => {navigation.navigate('Add', { limit: limit });}}
                >
                  <AntDesign name="pluscircleo" size={16} color={myStyling.black} />
                </ButtonPressable>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <AntDesign 
                  name={focused ? "clockcircle" : "clockcircleo"}
                  size={18} 
                  color={focused ? myStyling.red : myStyling.black} />
              );
            },
            tabBarLabel: () => {
              return (
                <Text>Over-Limit Entries</Text>
              );
            },
          };
        }}
        />
    </Tab.Navigator>
  );

  return (
      <NavigationContainer
        theme={DefaultTheme}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavi}
            options={({ route }) => {
              return {
                headerShown: false
              };
            }}
          />
          <Stack.Screen
            name="Add"
            component={AddEntry}
          />
          <Stack.Screen
            name="Edit"
            component={EditEntry}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
