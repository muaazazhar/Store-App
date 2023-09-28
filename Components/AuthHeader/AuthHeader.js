import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AuthHeader = ({text, icon}) => {
  return (
    <View style={styles.container}>
        <Icon name={icon} style={styles.icon}/>
        <Text style={styles.title}>{text}</Text>
    </View>
  )
}

export default AuthHeader