import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../Constants/screenSize";
import { colors } from "../../Constants/colors";

export default StyleSheet.create({
    modal: {
        width: '100%',
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0
    },
    container: {
        backgroundColor: colors.white,
        height: screenHeight * 0.55,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    dragBar: {
        width: 140,
        borderRadius: 10,
        borderColor: colors.lightGray,
        borderWidth: 2.5,
        backgroundColor: colors.lightGray,
    },
    divider: {
        width: '100%',
        borderRadius: 10,
        borderColor: colors.lightGray,
        borderWidth: 3,
        backgroundColor: colors.lightGray
    },
    modalImage: {
        height: screenHeight * 0.2,
        width: screenWidth * 0.5
    },
    quantityContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quantityWrapper: {
        alignItems: 'center',
        padding: 0,
        margin: 0
    },
    quantityText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    quantityButtonWrapper: {
        flexDirection: 'row',
        width: screenWidth *0.27,
        justifyContent: 'space-between'
    },
    quantityButton: {
        borderRadius: 50,
        width: 50,
        height: 50,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quantityIcon: {
        fontWeight: 'bold',
        fontSize: 20
    },
    totalPriceWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    priceText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    modalButton: {
        backgroundColor: colors.bg,
        width: '70%',
        height: '8%',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17
    }
})