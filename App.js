import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#ff2800' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}
        >
          <Stack.Screen 
          name="MealsCategories" 
          component={CategoriesScreen} 
          options={{
            title: 'All Categories'
          }}
          />

          <Stack.Screen 
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId
          //   };
          // }}
          />

          <Stack.Screen 
          name="MealDetail"
          component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
