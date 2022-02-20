import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from "./store";
// 1) Setup Redux
//

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
