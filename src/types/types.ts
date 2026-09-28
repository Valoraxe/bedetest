import { ImageSourcePropType } from "react-native";

export interface ButtonProps {
  onPress: Function;
  title: string;
}

export interface ListItemProps {
  item: DataProps;
}

export interface DataProps {
  name: string;
  image: string;
  game_url: string;
  description: string;
  category: string;
}

export type ImageSource = ImageSourcePropType | undefined;
