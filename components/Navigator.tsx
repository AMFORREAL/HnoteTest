/**
 * 主页状态栏下方的导航栏
 */

import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Navigator() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>分类</Text>
      <View style={styles.tools}></View>
    </View>
  )
}

/**
 * 
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'row',
    height: 55,
    padding: 5,
    margin: 1,
    alignItems: 'center',
    alignContent: 'space-between',
  },
  text: {
    color: 'blue',
    fontSize: 28
  },
  tools: {
    flex: 1,
    height: 24,
    backgroundColor: 'yellow',
    alignContent: 'flex-end',
  }
})