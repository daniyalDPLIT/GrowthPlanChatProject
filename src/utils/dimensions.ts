import { Dimensions } from 'react-native';

const width = (number: number): number => {
    const fullWidth = Dimensions.get('window').width;
    if (number >= 100) return fullWidth;
    else if (number <= 0) return 0;
    return fullWidth * (number / 100);
};

const height = (number: number): number => {
    const fullHeight = Dimensions.get('window').height;
    if (number >= 100) return fullHeight;
    else if (number <= 0) return 0;
    return fullHeight * (number / 100);
};

export { height, width }; 