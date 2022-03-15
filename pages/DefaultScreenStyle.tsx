import { StyleSheet } from 'react-native'
import ScaleSize from '../components/model/ScaleSize'

const DefaultScreeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    backgroundColor: '#f2f2f2',
    padding: ScaleSize(15)
  },
})

export default DefaultScreeStyle
