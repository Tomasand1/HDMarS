import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 20,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 10,
  smallViewWidth: 105,
  smallViewHeight: 80,
  pullRectangle: {
    height: 4,
    width: 36,
  },

  padding: {
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
    xxl: 25,
  },

  space: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
    xxl: 32,
  },

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 44,
    large: 60,
    logo: 200,
  },
};

export default metrics;
