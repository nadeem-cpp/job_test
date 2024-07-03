import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Job from '../Models/Job';
import styles from '../styles/style'
import EmptyBtn from '../Components/EmptyBtn';
import Bar from '../Components/Bar';
import PresentBtn from '../Components/PresentBtn';


type JobDetails = NativeStackScreenProps<RootStackParamList, 'JobDetails'>


const JobDetails = ({navigation}:JobDetails) => {
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const [jobType, setJobType] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');

    const addSkill = () => {
        if (skill) {
            setSkills([...skills, skill]);
            setSkill('');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.progressBar}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <PresentBtn/>
                    <Bar/>
                    <EmptyBtn/>
                    <Bar/>
                    <EmptyBtn/>
                    <Bar/>
                    <EmptyBtn/>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{color:"green"}}>Job Detail</Text>
                    <Text>Post Details </Text>
                    <Text>Preview</Text>
                    <Text>Payment</Text>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <Text style={styles.label}>Job Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter job title"
                    value={jobTitle}
                    onChangeText={setJobTitle}
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Your job description"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />

                <Text style={styles.label}>Skills</Text>
                <View style={styles.skillsContainer}>
                    <TextInput
                        style={styles.skillInput}
                        placeholder="Type skill"
                        value={skill}
                        onChangeText={setSkill}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addSkill}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.skillsList}>
                    {skills.map((sk, index) => (
                        <Text key={index} style={styles.skillTag}>{sk}</Text>
                    ))}
                </View>

                <Text style={styles.label}>Job Type</Text>
                <Picker
                    selectedValue={jobType}
                    style={styles.picker}
                    onValueChange={(itemValue) => setJobType(itemValue)}
                >
                    <Picker.Item label="Select job type" value="" />
                    <Picker.Item label="Full-time" value="full-time" />
                    <Picker.Item label="Part-time" value="part-time" />
                    <Picker.Item label="Contract" value="contract" />
                </Picker>

                <Text style={styles.label}>Education</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter job title"
                    value={education}
                    onChangeText={setEducation}
                />

                <Text style={styles.label}>Experience Level</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter job title"
                    value={experience}
                    onChangeText={setExperience}
                />
            </ScrollView>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.button}
            onPress={()=>navigation.navigate("JobPreview", {job: new Job(jobTitle, description, skills, jobType, education, experience, "Lahore")})}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

export default JobDetails;
