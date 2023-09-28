import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { screenHeight, screenWidth } from "../../Constants/screenSize";
import { colors } from "../../Constants/colors";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    headerText: {
        marginVertical: 20,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500',
        color: colors.grey
    },
})