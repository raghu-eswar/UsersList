import React, { useState } from 'react';
import { StackActions } from '@react-navigation/native';
import { Button, TextInput, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../styles/login.styles'
import servises from '../services/loginServices'

export default function LoginScreen({ navigation }) {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    let user = servises.isAdmin(userName, password)
    if (user) {
      navigation.dispatch(
        StackActions.replace('Profile'))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.content} behavior='position'>
          <Icon name="unlock-alt" size={100} style={{alignSelf: 'center',  color:'#f38ccd'}} />
          <TextInput  style={styles.input} 
                      keyboardType='email-address' 
                      placeholder='User Name' 
                      value={userName}
                      onChangeText={(userName) => setUserName(userName)} />
          <TextInput  style={styles.input} 
                      secureTextEntry={true}
                      placeholder='Password'
                      value={password} 
                      onChangeText={(password) => setPassword(password)}/>
          <View style={styles.loginButton}>
          <Button title="Log In" color='#f8bae1' onPress={validate}/>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}