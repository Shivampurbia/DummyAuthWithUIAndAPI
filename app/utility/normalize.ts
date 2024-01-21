import { Dimensions, PixelRatio, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export var { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
export const FACTOR = 0.5;

// const guidelineBaseWidth = 1125;
// const guidelineBaseHeight = 2436;

//const guidelineBaseWidth = 1242;
//const guidelineBaseHeight = 2688;

const scale = (size:number) => width / guidelineBaseWidth * size;
const verticalScale = (size:number) => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor = FACTOR) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

// based on iPhone X's scale
const wscale =Platform.OS=='android'? SCREEN_WIDTH / 390: SCREEN_WIDTH / 375;
const hscale = SCREEN_HEIGHT / 812;

export default function normalize(
  sizeValue: number,
  based: 'width' | 'height' = 'width',
) {
  const newSize = based === 'height' ? sizeValue * hscale : sizeValue * wscale;
  if (Platform.OS === 'ios') {
    // if(PixelRatio.get() >= 3 && width >= 414 && height >= 896){  
    //   let value = newSize - ((newSize * 10)/100);
    //   return Math.round(PixelRatio.roundToNearestPixel(value));
    // } else {
    //   return Math.round(PixelRatio.roundToNearestPixel(newSize));
    // }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}