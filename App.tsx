import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navigator from './components/Navigator'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <View style={styles.innerContainer}>
        <Navigator></Navigator>

        <ScrollView style={styles.content}>

        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  innerContainer: {
    padding: 11,
    flex: 1,
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
