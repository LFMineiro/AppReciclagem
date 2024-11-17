import { View, FlatList  } from 'react-native';
import CardHorizantalStore from './store';

export interface StoreProps {
    id: string
    name: string
    image: any
}

const reciclableStores: StoreProps[] = [
    { id: '1', name: 'Latinhas', image: require('../../../assets/images/latas.png') },
    { id: '2', name: 'Garrafas', image: require('../../../assets/images/garrafas.png') },
  ];

export function TrendingStores() {
    return (
        <View>
            <FlatList 
            data = {reciclableStores}
            renderItem={ ({ item }) => <CardHorizantalStore store = {item} /> }
            horizontal={true}
            /> 
        </View>
    )   
}

const styles = StyleSheet.create()