// src/constants/index.js

import { Appearance } from 'react-native';
import LightColors from './Colors.Light';
import DarkColors from './Colors.Dark';
export { default as NavigationStrings } from './NavigationStrings';

const colorScheme = Appearance.getColorScheme();

const Colors = colorScheme === 'dark' ? DarkColors : LightColors;

export { Colors };