/**
 * 主页状态栏下方的导航栏
 */

import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditingScreen from '../../pages/EditingScreen';
import TopBarStyle from './TopBarStyle';
import ScaleSize from '../model/ScaleSize';



export default function Navigator() {
  const navigation = useNavigation()
  return (
    <View style={TopBarStyle.container}>
      <Text style={styles.text_sorting}>分类</Text>
      <View style={TopBarStyle.tools}>
        <Image
          style={TopBarStyle.button}
          source={require('../../assets/search.png')} />
        <Image
          style={TopBarStyle.button}
          source={require('../../assets/settings.png')} />
        <Pressable
          onPress={() => navigation.navigate(EditingScreen)}>
          <Image
            style={TopBarStyle.button}
            source={require('../../assets/add.png')} />
        </Pressable>

      </View>

    </View>
  )
}

/**
 * 
 */
const styles = StyleSheet.create({
  text_sorting: {
    color: '#415058',
    fontSize: ScaleSize(28)
  },
})
