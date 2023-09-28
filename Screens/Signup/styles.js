import { StyleSheet } from "react-native";
import {RFValue} from 'react-native-responsive-fontsize'
import { screenHeight, screenWidth } from "../../Constants/screenSize";
import { colors } from "../../Constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },
    InputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        padding: RFValue(10, screenHeight),
        width: screenWidth * 0.9,
        marginBottom: RFValue(20, screenHeight),
    },
    InputField:{
        width: '53%',
        marginHorizontal: RFValue(2,screenWidth),
        fontSize: 15
    },
    inputLabel: {
        fontSize: 15,
        fontWeight: '500'
    },
    inputIcon: {
        fontSize: 15,
        marginRight: RFValue(2, screenWidth)
    },
    loginBtn: {
        backgroundColor: colors.bg,
        width: screenWidth * 0.3,
        height: screenHeight * 0.065,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: RFValue(20, screenHeight),
    },
    loginBtnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: RFValue(20, screenHeight)
    },
    registerText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerTouchableText: {
        color: colors.green,
    }
})