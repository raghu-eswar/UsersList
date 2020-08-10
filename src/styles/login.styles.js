import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
    },
    content: {
      width: '70%', 
      height: '50%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      marginTop: '20%',
   },
    input: {
      margin: 10,
      width: 250,
      height: 50,
      borderColor: '#f8bae1',
      borderWidth: 2,
      borderRadius: 50,
      textAlign: 'center',
    },  
    loginButton: {
      width: 100,
      alignSelf: 'center',
    }
  });