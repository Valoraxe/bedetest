import Listitem from "@/components/listItem";
import { IndexPageStyles as styles } from "@/styles/styles";
import { DataProps } from "@/types/types";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../../assets/data.json";

export default function HomeScreen() {
  const [games, setGames] = useState<DataProps[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setGames(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => <Listitem item={item} />}
      />
    </SafeAreaView>
  );
}
