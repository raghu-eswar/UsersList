import React from 'react';
import { Button, TextInput, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { styles } from '../styles/login.styles'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function LoginScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView style={styles.content} behavior='position'>
            <Icon name="unlock-alt" size={100} style={{alignSelf: 'center',  color:'#f38ccd'}} />
            <TextInput style={styles.input} keyboardType='email-address'></TextInput>
            <TextInput style={styles.input} keyboardType='email-address'></TextInput>
            <View style={styles.loginButton}>
            <Button title="Log In" color='#f8bae1' />
            </View>
          </KeyboardAvoidingView>
      </SafeAreaView>
    );
}