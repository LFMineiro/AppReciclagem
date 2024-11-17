
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../login/LoginScreen';
import RegisterScreen from '../register/RegisterScreen';
import HomeScreen from '../home/HomeScreen';
import AddProductScreen from '../addproduct/AddProductScreen';
import LocationScreen from '../locations/LocationScreen';
import BuyOrgScreen from '../buyorg/BuyOrgScreen'
import CollectOrgScreen from '../colectorg/CollectOrgScreen'
import SellOrgScreen from '../sellorg/SellOrgScreen'
import DiscardesScreen from '../discardes/DiscardesScreen'
import BuyProductScreen from '../buyProduct/BuyProductScreen'
import ChatScreen from '../Chat/ChatScreen'

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  AddProduct: undefined;
  Compradoras: undefined;
  Vendedoras: undefined;
  Coletoras: undefined;
  Acoes: undefined;
  Descarte: undefined;
  BuyProduct: undefined;
  Chat: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
      <Stack.Screen name="Acoes" component={LocationScreen} />
      <Stack.Screen name="Compradoras" component={BuyOrgScreen} />
      <Stack.Screen name="Vendedoras" component={SellOrgScreen} />
      <Stack.Screen name="Coletoras" component={CollectOrgScreen} />
      <Stack.Screen name="Descarte" component={DiscardesScreen} />
      <Stack.Screen name="BuyProduct" component={BuyProductScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigator