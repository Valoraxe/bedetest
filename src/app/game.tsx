import { GamePageStyles as styles } from "@/styles/styles";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function GameScreen() {
  const { game } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.gameContainer} source={{ uri: `${game}` }} />
    </SafeAreaView>
  );
}
