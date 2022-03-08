/**
 * 主页状态栏下方的导航栏
 */

import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditingScreen from '../../pages/EditingScreen';



export default function Navigator() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text_sorting}>分类</Text>
      <View style={styles.tools}>
        <Image
          style={styles.img}
          source={require('../../assets/search.png')} />
        <Image
          style={styles.img}
          source={require('../../assets/settings.png')} />
        <View>
          <Pressable
            onPress={() => navigation.navigate(EditingScreen)}>
            <Image
              style={styles.img}
              source={require('../../assets/add.png')} />
          </Pressable>
        </View>

      </View>

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
  },
  text_sorting: {
    color: '#415058',
    fontSize: 28
  },
  tools: {
    flex: 1,
    flexDirection: 'row',
    height: 24,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-end'

  },
  img: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginRight: 8,
  }
})
