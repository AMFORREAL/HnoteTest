import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

export default function NoteTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>一阶</Text>
      <Text style={[styles.text, { fontSize: 13 }]}>2077.1.1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 17,
    justifyContent: 'center',
    padding: 8,
  },
  text: {
    fontSize: 16,
    color: '#101010'
  }
})