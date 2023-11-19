import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';

const splashImage = require('./assets/splash.png')

export default function App() {
  return (
    <View style={tw`flex-1 bg-emerald-950`}>
      <View>
        <Image source={splashImage} style={{ width: 400, height: 280 }} />
        <Text style={tw`text-white`}>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
