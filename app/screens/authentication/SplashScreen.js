import { View, ActivityIndicator } from 'react-native';
import color from '../../config/color';

const SplashScreen = () => {
  return <View style={{ flex: 1, backgroundColor: color.BLACK, justifyContent: "center" }}>
      <ActivityIndicator color={"#ffffff"} />
    </View>
  
};

export default SplashScreen;

