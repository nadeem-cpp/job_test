import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/style';
import TickBtn from '../Components/TickBtn';
import Bar from '../Components/Bar';
import EmptyBtn from '../Components/EmptyBtn';
import PresentBtn from '../Components/PresentBtn';


type JobPreview = NativeStackScreenProps<RootStackParamList, 'JobPreview'>

const JobPreview = ({ route, navigation }: JobPreview) => {
    const { job } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.progressBar}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <TickBtn />
                    <Bar />
                    <TickBtn />
                    <Bar />
                    <PresentBtn />
                    <Bar />
                    <EmptyBtn />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Job Detail</Text>
                    <Text>Post Details </Text>
                    <Text>Preview</Text>
                    <Text style={{ color: "green" }}>Payment</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.previewHeader}>
                    <Text style={styles.stepText}>Preview</Text>
                    <Text style={styles.subtitle}>
                        This is a preview of what your job post will look like to job seekers.
                    </Text>
                </View>
                <View style={styles.jobCard}>
                    <View style={styles.jobHeader}>
                        <Image
                            source={{ uri: 'https://via.placeholder.com/50' }}
                            style={styles.logo}
                        />
                        <View style={styles.jobInfo}>
                            <Text style={styles.jobTitle}>{job.title}</Text>
                            <Text style={styles.company}>XYZ Solutions, in {job.jobLocation}</Text>
                            <View style={styles.tags}>
                                {job.skills.map((skill, index) => (
                                    <Text key={index} style={styles.tag}>{skill}</Text>
                                ))}
                            </View>
                            <Text style={styles.postedTime}>Posted {job.postedTime - new Date().getTime()} hours ago</Text>
                        </View>
                    </View>
                    <View style={styles.jobDescription}>
                        <Text style={styles.sectionTitle}>Job Description</Text>
                        <Text>{job.description}</Text>
                    </View>
                    <View style={styles.jobRequirements}>
                        <Text style={styles.sectionTitle}>Requirements</Text>
                        <Text>{job.description}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JobPosted')}>
                    <Text style={styles.buttonText}>Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

export default JobPreview;
