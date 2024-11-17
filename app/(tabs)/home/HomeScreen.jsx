import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Heart from '../../../assets/icons/Heart';
import UserIcon from '../../../assets/icons/UserIcon';
import CartShopping from '../../../assets/icons/CartShopping';


const initialData = [
  { id: '1', title: '100 garrafas pet', price: 'R$ 30', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
  { id: '2', title: 'Caderno usado - 200 páginas', price: 'R$ 15', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
  { id: '3', title: 'Revistas antigas - 10 unidades', price: 'R$ 20', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
  { id: '4', title: 'Canudos plásticos - 500 unidades', price: 'R$ 10', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
  { id: '5', title: 'Sacolas plásticas - 100 unidades', price: 'R$ 5', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
  { id: '6', title: 'Caixa de papelão - grande', price: 'R$ 8', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
  { id: '7', title: 'Embalagens plásticas - 50 unidades', price: 'R$ 12', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
  { id: '8', title: 'Jornal velho - 1 kg', price: 'R$ 7', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
  { id: '9', title: 'Embalagens de iogurte - 20 unidades', price: 'R$ 6', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
  { id: '10', title: 'Livros antigos - 5 unidades', price: 'R$ 25', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
];

const HomeScreen = ({ navigation, route }) => {
  const [filter, setFilter] = useState('');
  const [mockData, setMockData] = useState(initialData)

  useEffect(() => {
    const loadProducts = async () => {
      const storedProducts = await AsyncStorage.getItem('products')
      if(storedProducts) {
        setMockData(JSON.parse(storedProducts))
      }

      else {
        const initialData = [
          { id: '1', title: '100 garrafas pet', price: 'R$ 30', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
          { id: '2', title: 'Caderno usado - 200 páginas', price: 'R$ 15', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
          { id: '3', title: 'Revistas antigas - 10 unidades', price: 'R$ 20', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
          { id: '4', title: 'Canudos plásticos - 500 unidades', price: 'R$ 10', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
          { id: '5', title: 'Sacolas plásticas - 100 unidades', price: 'R$ 5', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
          { id: '6', title: 'Caixa de papelão - grande', price: 'R$ 8', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
          { id: '7', title: 'Embalagens plásticas - 50 unidades', price: 'R$ 12', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
          { id: '8', title: 'Jornal velho - 1 kg', price: 'R$ 7', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
          { id: '9', title: 'Embalagens de iogurte - 20 unidades', price: 'R$ 6', imageUrl: 'https://via.placeholder.com/150', material: 'Plástico' },
          { id: '10', title: 'Livros antigos - 5 unidades', price: 'R$ 25', imageUrl: 'https://via.placeholder.com/150', material: 'Papel' },
        ];
        setMockData(initialData)
      }
    }
    loadProducts()
  
  }, [])

  const saveProducts = async (products) => {
    await AsyncStorage.setItem('products', JSON.stringify(products))
  }
  
useEffect(() => {
  if(route.params?.newProduct) {
    const updatedProducts = [...mockData, route.params.newProduct]
    setMockData(updatedProducts)
    saveProducts(updatedProducts)
  }
}, [route.params?.newProduct])

const deleteProduct = (id) => {
  const updatedProducts = mockData.filter((item) => item.id !== id)
  setMockData(updatedProducts)
  saveProducts(updatedProducts)
}


  const filteredData = mockData.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Recicla Fácil</Text>
        <View style={styles.iconsContainer}>
          <Heart />
          <CartShopping />
          <UserIcon />
        </View>
      </View>
      
      {/* Campo de filtro */}
      <TextInput
        style={styles.input}
        placeholder="Filtrar por título"
        value={filter}
        onChangeText={setFilter}
      />

      {/* Feed de produtos */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.product} 
            onPress={() => navigation.navigate('BuyProduct', { item })} 
          >
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.productMaterial}>Material: {item.material}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteProduct(item.id)} style={styles.deleteButton}>
              <MaterialIcons name='delete' size={24} color='green' />
            </TouchableOpacity> 
          </TouchableOpacity>
        )}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddProduct')}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.locationsButton} onPress={() => navigation.navigate('Acoes')}>
        <AntDesign name="info" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 28,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  product: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    justifyContent: 'center',
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#6200ee',
  
  },
  productMaterial: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  deleteButton: {
    padding: 5,

  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationsButton: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
