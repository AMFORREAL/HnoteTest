import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Navigator from '../components/view/Navigator';
import NoteTitle from '../components/view/NoteTitle';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Navigator navigation={navigation}></Navigator>

        <ScrollView style={styles.content}>
          <NoteTitle>

          </NoteTitle>
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  innerContainer: {
    padding: 15,
    flexDirection: 'column',
  },
  text: {
    color: '#1e90ff',
    fontSize: 40,
  },
  statusBar: {
    height: 40,
    backgroundColor: 'orange'
  },
  capitalText: {
    color: '#43525a'
  },
  content: {
    padding: 3,
    marginTop: 1,
  }

});