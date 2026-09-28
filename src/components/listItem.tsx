import { ListItemStyles as styles } from "@/styles/styles";
import { ListItemProps } from "@/types/types";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Listitem({ item }: ListItemProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/details",
          params: {
            name: item.name,
            image: item.image,
            description: item.description,
            game: item.game_url,
          },
        })
      }
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
