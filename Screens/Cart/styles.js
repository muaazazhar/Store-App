import { StyleSheet } from "react-native";
import { colors } from "../../Constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { screenHeight, screenWidth } from "../../Constants/screenSize";

export default StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noItemText: {
        fontSize: RFValue(12, screenWidth),
        fontWeight: '600',
        color: colors.grey
    },
    itemsView:{
        height: screenHeight * 0.8,
    },
    itemContainer: {
        alignSelf: 'center',
        height: screenHeight * 0.1,
        width: screenWidth * 0.9,
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        borderColor: colors.white,
        margin: RFValue(10, screenHeight),
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: colors.grey,
        shadowRadius: 5,
        shadowOpacity: 0.8,
        elevation: 5,
        backgroundColor: 'white'
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: screenWidth * 0.9,
        alignSelf: 'center',
        marginVertical: RFValue(10, screenHeight)
    },
    labelText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.grey
    },
    totalWrapper: {
        flexDirection: 'row',
        width: screenWidth * 0.85,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    totalText: {
        fontSize: RFValue(20, screenHeight),
        fontWeight: '500'
    },
    checkoutButton: {
        height: screenHeight * 0.05,
        backgroundColor: colors.bg,
        width: screenWidth * 0.5,
        alignSelf: 'center',
        marginBottom: RFValue(10, screenHeight),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17
    },
    divider: {
        width: '100%',
        borderRadius: 10,
        borderColor: colors.lightGray,
        borderWidth: 3,
        backgroundColor: colors.lightGray,
        marginVertical: RFValue(15, screenHeight)
    },
})