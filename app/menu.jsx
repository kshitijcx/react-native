import {
  Appearance,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import { Colors } from "@/constants/Colors";
const menu = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
      <FlatList
        data={[{ data: "hello" }, { data: "hello" }, { data: "hello" }]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.data}</Text>
          </View>
        )}
      />
    </Container>
  );
};
export default menu;

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}
