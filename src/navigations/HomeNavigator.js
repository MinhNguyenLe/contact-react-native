/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createNavigatorFactory,
  createStackNavigator,
} from '@react-navigation/stack';
import {View, Text} from 'react-native';

const CreateContact = () => {
  return (
    <View>
      <Text>Hello contacts</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Contact"
        component={CreateContact}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
