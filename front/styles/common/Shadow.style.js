import { StyleSheet } from "react-native";

const shadowStyles = StyleSheet.create({
    drinkShadow: {
        /* shadow */
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 1,
    },
});

export default shadowStyles;
