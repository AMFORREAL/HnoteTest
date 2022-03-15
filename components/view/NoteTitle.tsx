import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import ScaleSize from '../model/ScaleSize'

export default function NoteTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>一阶</Text>
      <Text style={[styles.text, { fontSize: ScaleSize(13) }]}>2077.1.1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: ScaleSize(65),
    backgroundColor: '#fff',
    borderRadius: ScaleSize(17),
    justifyContent: 'center',
    padding: ScaleSize(8),
  },
  text: {
    fontSize: ScaleSize(16),
    color: '#101010'
  }
})
