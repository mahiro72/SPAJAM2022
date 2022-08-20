import { StyleSheet,StatusBar } from "react-native";

const scrollStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });

export default scrollStyles;
