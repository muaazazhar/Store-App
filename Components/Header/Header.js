import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Header = ({text}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
    </View>
  )
}

export default Header