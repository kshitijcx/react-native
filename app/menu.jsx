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
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";
const menu = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const separatorCompo = <View style={styles.separator} />;
  const headerCompo = <Text>Top of List</Text>;
  const footerCompo = <Text>End of Menu</Text>;
  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id?.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separatorCompo}
        // ListHeaderComponent={headerCompo}
        ListFooterComponent={footerCompo}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text>No Items</Text>}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
};
export default menu;

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    footerComp: {
      marginHorizontal: "auto",
    },
  });
}
