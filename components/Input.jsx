import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
  return (
    <View style={styles.container}>
        {
            props.icon && props.icon
        }
      <TextInput
      ref={props.inputRef && props.inputRef}
      {...props}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderCurve: 'continuous',
        paddingHorizontal: 28,
        marginHorizontal:10,
        gap: 12,
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc'
        
    }
})