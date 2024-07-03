import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import JobDetails  from './src/screens/JobDetails'
import JobPosted from './src/screens/JobPosted'
import JobPreview from './src/screens/JobPreview';
import Job from './src/Models/Job';


export type RootStackParamList = {
  JobDetails: undefined,
  JobPosted: undefined,
  JobPreview: {job:Job},
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='JobDetails'>
        <Stack.Screen name='JobDetails' component={JobDetails} options={{ title: 'Post a Job' }}/>
        <Stack.Screen name='JobPreview' component={JobPreview}/>
        <Stack.Screen name='JobPosted' component={JobPosted} options={{headerShown:false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}