import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../styles/postedStyle';


type JobPosted = NativeStackScreenProps<RootStackParamList, 'JobPosted'>

const JobPosted = ({ navigation }:JobPosted) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.checkmarkIcon}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
      </View>
      <Text style={styles.title}>Your Job is Posted!</Text>
      <Text style={styles.message}>
        Congratulations! Your job has been successfully posted and is now visible to potential candidates. Good luck in your recruitment process!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JobDetails')}>
        <Text style={styles.buttonText}>Manage Jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobPosted;
