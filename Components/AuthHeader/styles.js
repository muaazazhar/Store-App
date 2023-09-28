import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../Constants/screenSize";
import {RFValue} from 'react-native-responsive-fontsize'
import { colors } from "../../Constants/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        flex: 1,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 0
    },
    icon: {
        fontSize: RFValue(42, screenHeight),
        color: colors.white,
        marginRight: RFValue(8, screenWidth)
    },
    title: {
        fontSize: RFValue(42, screenHeight),
        fontWeight: 'bold',
        color: colors.white
    }
})