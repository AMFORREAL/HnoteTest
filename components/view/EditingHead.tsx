import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

export default function EditingHead() {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.tools}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 43,
    justifyContent: 'center',

  },
  tools: {
    alignItems: 'flex-end'
  }
})