import { Dimensions, PixelRatio } from 'react-native';

// DIMENSIONS
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

// SCALING
const guidelineBaseHeight = 568;
const guidelineBaseWidth = 320;

const verticalRatio = WINDOW_HEIGHT / guidelineBaseHeight;
const horizontalRatio = WINDOW_WIDTH / guidelineBaseWidth;

export const verticalScale = size => verticalRatio * size;
export const horizontalScale = size => horizontalRatio * size;
export const fontScale = size => size * PixelRatio.getFontScale();
