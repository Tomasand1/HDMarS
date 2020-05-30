import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Metrics = {
    baseMargin: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    padding: {
        xs: 5,
        sm: 10,
        md: 15,
        lg: 20,
        xl: 30,
        xxl: 40,
    },
    margin: {
        xxs: 3,
        xs: 5,
        sm: 10,
        md: 20,
        lg: 30,
        xl: 40,
        xxl: 50,
        xxxl: 60,
    },
    icons: {
        xxs: 17,
        xs: 20,
        sm: 25,
        md: 30,
        lg: 35,
        xl: 45,
        xxl: 50,
    },
    images: {
        sm: 20,
        md: 44,
        lg: 60,
        xl: 80,
        xxl: 200,
        xxxl: 400,
    },
};

export default Metrics;

export { width as screenWidth, height as screenHeight };
