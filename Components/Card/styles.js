import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../Constants/screenSize";
import { colors } from "../../Constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    cardContainer: {
        display: 'flex',
        height: screenHeight * 0.11,
        width: screenWidth * 0.3,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderColor: colors.white,
        margin: RFValue(10, screenHeight),
        padding: 5,
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: colors.grey,
        shadowRadius: 5,
        shadowOpacity: 0.8,
        elevation: 5,
        backgroundColor: 'white'
    },
    cardImage: {
        height: RFValue(50, screenHeight),
        width: RFValue(50,screenWidth)
    },
    cardName: {
        fontSize: 13,
        fontWeight: 'bold'
    }
})