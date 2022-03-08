import { StyleSheet } from 'react-native'
import ScaleSize from '../model/ScaleSize'

const TopBarStyle = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    height: ScaleSize(55),
    padding: ScaleSize(5),
    margin: 1,
    alignItems: 'center',
  },
  button: {
    width: ScaleSize(24),
    height: ScaleSize(24),
    marginLeft: ScaleSize(8),
    marginRight: ScaleSize(8),
  },
  tools: {
    flex: 1,
    flexDirection: 'row',
    height: ScaleSize(24),
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-end'
  },
})
export default TopBarStyle
