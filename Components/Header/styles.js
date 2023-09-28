import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../Constants/screenSize";
import {RFValue} from 'react-native-responsive-fontsize'
import { colors } from "../../Constants/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: screenHeight * 0.10,
    },
    icon: {
        fontSize: RFValue(42, screenHeight),
        color: colors.white,
        marginRight: RFValue(8, screenWidth)
    },
    title: {
        fontSize: RFValue(37, screenHeight),
        fontWeight: 'bold',
        color: colors.white
    }
})