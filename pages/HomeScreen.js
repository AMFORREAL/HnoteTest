import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Navigator from '../components/view/Navigator';
import NoteTitle from '../components/view/NoteTitle';
import DefaultScreenStyle from './DefaultScreenStyle';

export default function HomeScreen({ navigation }) {
  return (
    <View style={DefaultScreenStyle.container}>
        <Navigator></Navigator>

        <ScrollView style={styles.content}>
          <NoteTitle>

          </NoteTitle>
        </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
 content: {
    padding: 3,
    marginTop: 1,
  }
});
