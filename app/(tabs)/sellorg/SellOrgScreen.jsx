import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import filtersData from '../../../data/Filters.json'

const SellOrgScreen = () => {
    const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const vendaItems = filtersData.filter(item => item.Modalidade.includes('Venda'))
    setFilteredData(vendaItems);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organizações</Text>
      
      <FlatList
        data={filteredData}
        keyExtractor={item => item.Nome}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>Nome: {item.Nome}</Text>
              <Text>Materiais: {item.Materiais}</Text>
              <Text>Localização: {item.Localização}</Text>
              <Text>Contato: {item.Contato}</Text>
            </View>
          </View>
        )}
      />
    </View>
    
); 
}

export default SellOrgScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#6200ee',
        textAlign: 'center',
      },
      itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
      },
      itemImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15,
      },
      itemInfo: {
        flex: 1,
      },
      itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
})