import { ButtonStyles as styles } from "@/styles/styles";
import { ButtonProps } from "@/types/types";
import { Text, TouchableOpacity, View } from "react-native";

export default function Button({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
