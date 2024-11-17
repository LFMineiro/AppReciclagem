import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BuyProductScreen = ({navigation, route}) => {
    const { item } = route.params

    return (
        <View style={styles.container}>
          <Image source={{ uri: item.imageUrl }} style={styles.imageProduct} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.chatButtonText}>Ir para o Chat</Text>
          </TouchableOpacity>     
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
      imageProduct: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      price: {
        fontSize: 20,
        color: '#6200ee',
        marginBottom: 20,
      },
      chatButton: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      },
      chatButtonText: {
        color: '#fff',
        fontSize: 18,
      },
    });
    
    export default BuyProductScreen;