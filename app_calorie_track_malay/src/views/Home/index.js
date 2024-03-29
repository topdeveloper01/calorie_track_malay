import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// custom input
import Diary from '../Diary';
import Discover from '../Discover';
import vProgress from '../Progress';
import vMore from '../More';
import {constant} from '../../utils'

const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator
      initialRouteName="Diary"
      tabBarOptions={{
        activeTintColor: constant.C_BLACK_70,
        inactiveTintColor : constant.C_BLACK_30,
        showLabel : false,
        style : {height : 70, backgroundColor : constant.C_BLACK_0, },
        tabStyle : {}
      }}
    >
      <Tab.Screen
        name="Diary"
        children={()=> <Diary rootnav={props.navigation} />}
        options={{
          tabBarLabel: 'Diary',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        children={()=> <Discover rootnav={props.navigation} />}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" color={color} size={size} />
          ),
        //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={vProgress}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={vMore}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;