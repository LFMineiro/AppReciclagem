import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import UserIcon from '@/assets/icons/UserIcon';
import AddImage from '@/assets/icons/AddImage'
import { useNavigation } from 'expo-router';


const AddProductScreen = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigation = useNavigation()


  const handlePost = () => {
    if(!description || !category || !price) {
      Alert.alert('Erro', "Por favor preencha todos os campos")
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      title: description,
      price: `R$ ${price}`,
      imageUrl: 'https://via.placeholder.com/150',
      material: category,
    }

    navigation.navigate('Home', {newProduct})

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Adicionar Produto</Text>
        
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scroll}>
          <TouchableOpacity style={styles.imageButton}>
            <Text style={styles.imageButtonText}>Adicionar foto</Text>
            <AddImage />
          </TouchableOpacity>

          <View style={styles.selectPhoto}>
            <Image source={require("../../../assets/images/latinhas.webp")} style={styles.imageAl}/>
          </View>

          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Descrição do produto"
            placeholderTextColor="#999"
            value={description}
            onChangeText={setDescription}
            multiline={true}
          />



          <TextInput
            style={styles.input}
            placeholder="Material escolhido"
            placeholderTextColor="#999"
            value={category}
            onChangeText={setCategory}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite o valor do produto"
            placeholderTextColor="#999"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>POSTAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 

  },
  header: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '##e0e0e0',

  },
  
  scroll: {
    width: '100%'
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200ee', 
    marginBottom: 24,

  },
  imageAl: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  selectPhoto: {
   
    marginBottom: 20,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
  
  },
  username: {
    color: '#333',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    color: '#333',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 120, 
    textAlignVertical: 'top', 
  },
  imageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  imageButtonText: {
    color: '#6200ee',
    fontSize: 16,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: '#6200ee', // Cor base
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 25,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
