import React from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import TopBarStyle from './TopBarStyle'
import ScaleSize from '../model/ScaleSize'

export default function EditingHead() {
  return (
    <View style={TopBarStyle.container}>
      <View>

      </View>
      <View style={TopBarStyle.tools}>
        <Pressable>
          <Image
            style={TopBarStyle.button}
            source={require('../../assets/markdownTools.png')} />
        </Pressable>
        <Pressable>
          <Image
            style={TopBarStyle.button}
            source={require('../../assets/goBack.png')} />
        </Pressable>
        <Pressable>
          <Image
            style={TopBarStyle.button}
            source={require('../../assets/goForward.png')} />
        </Pressable>
        <Pressable>
          <Image
            style={TopBarStyle.button}
            source={require('../../assets/eye.png')} />
        </Pressable>
      </View>
    </View>
  )
}

