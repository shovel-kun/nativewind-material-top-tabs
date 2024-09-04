import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs
      screenOptions={
        {
          // Uncommenting the following lines will fix the tab bar alignment,
          // but the pressable area is still off
          // tabBarContentContainerStyle: {
          //   flex: 1,
          //   flexDirection: 'row',
          //   justifyContent: 'space-around',
          // },
        }
      }>
      <MaterialTopTabs.Screen name="index" options={{ title: 'Tab One' }} />
      <MaterialTopTabs.Screen name="two" options={{ title: 'Tab Two' }} />
    </MaterialTopTabs>
  );
}
