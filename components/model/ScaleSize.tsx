import { Dimensions } from "react-native";
const defualtWith = 375

const screenW = Dimensions.get('window').width;
const scaleWidth = screenW / defualtWith

function ScaleSize(size: number): number {
  return size * scaleWidth
}

export default ScaleSize
