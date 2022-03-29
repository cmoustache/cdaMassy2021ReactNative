import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SondagesScreen from './src/screens/SondagesScreen';
import CreerSondageScreen from './src/screens/CreerSondageScreen';
import EFGAddScreen from './src/screens/EFG/EFGAddScreen';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					screenOptions={{
						headerStyle: {
							backgroundColor: 'red',
						},
						headerTintColor: 'white',
					}}>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ title: "Ecran d'accueil" }}
					/>

					<Stack.Screen
						name='EFGAddScreen'
						component={EFGAddScreen}
						options={{ title: 'Créer un EFG' }}
					/>

					<Stack.Screen
						name='SondagesScreen'
						options={{ title: 'Sondages' }}
						initialParams={{ canalId: 1, currentUserId: 1 }}>
						{(props) => <SondagesScreen {...props} />}
					</Stack.Screen>

					<Stack.Screen
						name='CreerSondageScreen'
						options={{ title: 'Creer Sondage' }}
						initialParams={{ canalId: 1, currentUserId: 1 }}>
						{(props) => <CreerSondageScreen {...props} />}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
