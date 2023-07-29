import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntryList from './components/EntryList';
import AllEntriesScreen from './screens/AllEntriesScreen';
import OverEntry from './screens/OverlimitEntriesScreen';
import AddEntryScreen from './screens/AddEntryScreen';
import EditEntryScreen from './screens/EditEntryScreen';
import ButtonPressable from './components/ButtonPressable';
import { useState } from 'react';
import styles from './MyStyles';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const [limit, setLimit] = useState(500);

  const TabNavi = ( {navigation} ) => (
    <Tab.Navigator>
      <Tab.Screen 
        name="All" 
        component={AllEntriesScreen} 
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
                  <AntDesign name="pluscircleo" size={16} color={styles.black} />
                </ButtonPressable>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <AntDesign
                name={focused ? "infocirlce" : "infocirlceo"}
                size={18} 
                color={focused ? styles.red : styles.black}
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
                  <AntDesign name="pluscircleo" size={16} color={styles.black} />
                </ButtonPressable>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <AntDesign 
                  name={focused ? "clockcircle" : "clockcircleo"}
                  size={18} 
                  color={focused ? styles.red : styles.black} />
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
            component={AddEntryScreen}
          />
          <Stack.Screen
            name="Edit"
            component={EditEntryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
