import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Body = ({flex, wantElevation, children}) => {
  const [customStyle, setCustomStyle] = useState({})
  
  useEffect(()=>{
    if(!wantElevation) {
      setCustomStyle({
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        elevation: 0,
      })
    }else{
      setCustomStyle({
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        elevation: 10,
      })
    }
  },[])
  return (
    <View style={{...styles.container, flex, ...customStyle}}>
        {children}
    </View>
  )
}

export default Body;

Body.defaultProps={
  wantElevation: true
}