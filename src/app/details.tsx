import Button from "@/components/button";
import { DetailsPageStyles as styles } from "@/styles/styles";
import { ImageSource } from "@/types/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameScreen() {
  const { name, image, description, game } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image style={styles.image} source={{ uri: image } as ImageSource} />
        <Text style={styles.title}>{name}</Text>
        <Button
          onPress={() =>
            router.push({
              pathname: "/game",
              params: {
                game: game,
              },
            })
          }
          title={"PLAY GAME"}
        />
        <Text style={styles.text}>{description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
