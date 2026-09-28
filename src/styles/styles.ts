import { StyleSheet } from "react-native";

export const DetailsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export const GamePageStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameContainer: {
    width: "100%",
    height: "100%",
  },
});

export const IndexPageStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    padding: 5,
    width: 200,
    borderRadius: 10,
  },
  text: {
    padding: 20,
    fontSize: 24,
    fontWeight: 500,
    textAlign: "center",
    color: "white",
  },
});

export const ListItemStyles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: 500,
  },
  image: {
    width: 80,
    height: 80,
  },
});
