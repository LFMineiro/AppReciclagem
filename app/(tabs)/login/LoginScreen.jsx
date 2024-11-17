import React, { useRef } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity,Image,Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Input from '../../../components/Input'
import Mail from '../../../assets/icons/Mail'
import Password from '../../../assets/icons/Password'


const LoginScreen = ({ navigation }) => { 
  const emailRef = useRef("")
  const passRef = useRef("")

  const onSubmit = async () => {
    if(!emailRef.current || !passRef.current ) {
      Alert.alert('Login', "por favor preencha todos os campos!")
      return;
    }
    else {
      navigation.navigate('Home')
    }
  }
  
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/LogoUp.png")} style={styles.image}/>
      {/* <Text style={styles.title}>Recicla Fácil</Text> */}
      <Input 
      icon={<Mail />} 
      placeholder="Email" 
      style={styles.input} 
      keyboardType="email-address" 
      onChangeText={value => emailRef.current = value}
      />
      <Input 
      icon={<Password />} 
      placeholder="Senha" 
      style={styles.input} 
      onChangeText = {value => passRef.current = value}
      secureTextEntry           
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 5,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerText: {
    color: '#6200ee',
    marginTop: 16,
  },
});

export default LoginScreen;
