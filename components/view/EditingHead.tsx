import React from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'

export default function EditingHead() {
  return (
    <View style={styles.container}>
      <View>

      </View>
      <View style={styles.tools}>
        <Pressable>
          <Image
            style={styles.image}
            source={require('../../assets/markdownTools.png')} />
        </Pressable>
        <Pressable>
          <Image
            style={styles.image}
            source={require('../../assets/goBack.png')} />
        </Pressable>
        <Pressable>
          <Image
            style={styles.image}
            source={require('../../assets/goForward.png')} />
        </Pressable>
        <Pressable>
          <Image
            style={styles.image}
            source={require('../../assets/eye.png')} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 43,
    justifyContent: 'space-between',
    backgroundColor: 'green',
    flexDirection: 'row',

  },
  tools: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'yellow',
    flexDirection: 'row',
    padding: 8,
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginRight: 8,
  }
})