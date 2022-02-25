/**
 * 主页状态栏下方的导航栏
 */

import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';


export default function Navigator() {
  return (
    <View style={styles.container}>
      <Text style={styles.text_sorting}>分类</Text>
      <View style={styles.tools}></View>
      <Image
        style={styles.img}
        source={require('../assets/search.png')} />
      <Image
        style={styles.img}
        source={require('../assets/gear.png')} />
      <Image
        style={styles.img}
        source={require('../assets/add.png')} />
    </View>
  )
}

/**
 * 
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    height: 55,
    padding: 5,
    margin: 1,
    alignItems: 'center',
    alignContent: 'space-between',
  },
  text_sorting: {
    color: '#415058',
    fontSize: 28
  },
  tools: {
    flex: 1,
    height: 24,
    backgroundColor: '#f2f2f2',
    alignContent: 'flex-end',
  },
  img: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginRight: 8,
  }
})