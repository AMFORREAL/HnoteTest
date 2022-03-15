import React from 'react'
import { StyleSheet, TextInput, View, } from 'react-native'
import EditingHead from '../components/view/EditingHead'
import DefaultScreenStyle from './DefaultScreenStyle'

export default function EditingScreen() {
  return (
    <View style={DefaultScreenStyle.container}>
      <EditingHead></EditingHead>
      {/* <TextInput></TextInput> */}
    </View>
  )
}

const styles = StyleSheet.create({

})
