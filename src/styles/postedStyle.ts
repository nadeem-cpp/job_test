import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#28a745',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    iconContainer: {
      marginBottom: 20,
    },
    checkmarkIcon: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkmarkText: {
      fontSize: 40,
      color: '#28a745',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 16,
    },
    message: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 30,
    },
    button: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
    },
    buttonText: {
      color: '#28a745',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default styles;