import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor:"white"
    },
    progressBar: {
        backgroundColor: "#f5f5f5",
        padding: 16,

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: "lightgrey",
        borderRadius: 7,
        marginBottom: 10,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    skillsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 7,
        backgroundColor: "lightgrey"
        // alignContent:"center",
    },
    skillInput: {
        padding: 10,
        borderRadius: 4,
        marginBottom: 5,
        marginTop: 5,
    },
    addButton: {
        backgroundColor: '#28a745',
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginEnd: 8,
    },
    addButtonText: {
        color: 'white',
        fontSize: 32,
    },
    skillsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skillTag: {
        backgroundColor: '#e9ecef',
        padding: 5,
        borderRadius: 4,
        marginRight: 8,
        marginTop: 8,
    },
    picker: {
        height: 50,
        marginBottom: 10,
        backgroundColor: "lightgrey",
        borderRadius: 6,
    },
    button: {
        backgroundColor: '#28a745',
        padding: 16,
        marginHorizontal: 16,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        borderColor: "lighgrey",
        borderBottomWidth: 0.5,
        marginTop: 10.
    },
    previewHeader: {
        marginBottom: 16,
    },
    stepText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#28a745',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    jobCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16,
    },
    jobHeader: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    jobInfo: {
        flex: 1,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    company: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 8,
        marginTop: 4,
        fontSize: 12,
    },
    postedTime: {
        fontSize: 12,
        color: '#999',
        marginTop: 8,
    },
    jobDescription: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    jobRequirements: {
        marginBottom: 16,
    },
});

export default styles;