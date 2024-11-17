import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const LocationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>AÇÕES</Text>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Compradoras')} style={styles.button}>
          <Text style={styles.buttonText}>VENDA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Coletoras')} style={styles.button}>
          <Text style={styles.buttonText}>COLETA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Vendedoras')} style={styles.button}>
          <Text style={styles.buttonText}>COMPRA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Descarte')} style={styles.button}>
          <Text style={styles.buttonText}>DESCARTE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    color: '#6200ee',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#6200ee', // Cor do botão
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationScreen;