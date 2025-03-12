import { Dimensions, Platform, StatusBar } from "react-native";

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP13_HEIGHT = 47;
const STATUSBAR_IP13MAX_HEIGHT = 47;
const STATUSBAR_IP14_HEIGHT = 47;
const STATUSBAR_IP14MAX_HEIGHT = 47;
const STATUSBAR_IP15_HEIGHT = 47;
const STATUSBAR_IP15MAX_HEIGHT = 47;
const STATUSBAR_IP16_HEIGHT = 47;
const STATUSBAR_IP16MAX_HEIGHT = 47;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP13_WIDTH = 390;
const IP13_HEIGHT = 844;

const IP13MAX_WIDTH = 428;
const IP13MAX_HEIGHT = 926;

const IP14_WIDTH = 390;
const IP14_HEIGHT = 844;

const IP14MAX_WIDTH = 428;
const IP14MAX_HEIGHT = 926;

const IP15_WIDTH = 390;
const IP15_HEIGHT = 844;

const IP15MAX_WIDTH = 428;
const IP15MAX_HEIGHT = 926;

const IP16_WIDTH = 390;
const IP16_HEIGHT = 844;

const IP16MAX_WIDTH = 428;
const IP16MAX_HEIGHT = 926;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhone12_v = false;
let isIPhone12Max_v = false;
let isIPhone13_v = false;
let isIPhone13Max_v = false;
let isIPhone14_v = false;
let isIPhone14Max_v = false;
let isIPhone15_v = false;
let isIPhone15Max_v = false;
let isIPhone16_v = false;
let isIPhone16Max_v = false;
let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneX_v = true;
        statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneXMax_v = true;
        statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone12_v = true;
        statusBarHeight = STATUSBAR_IP12_HEIGHT;
    } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone12Max_v = true;
        statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
    } else if (W_WIDTH === IP13_WIDTH && W_HEIGHT === IP13_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone13_v = true;
        statusBarHeight = STATUSBAR_IP13_HEIGHT;
    } else if (W_WIDTH === IP13MAX_WIDTH && W_HEIGHT === IP13MAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone13Max_v = true;
        statusBarHeight = STATUSBAR_IP13MAX_HEIGHT;
    } else if (W_WIDTH === IP14_WIDTH && W_HEIGHT === IP14_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone14_v = true;
        statusBarHeight = STATUSBAR_IP14_HEIGHT;
    } else if (W_WIDTH === IP14MAX_WIDTH && W_HEIGHT === IP14MAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone14Max_v = true;
        statusBarHeight = STATUSBAR_IP14MAX_HEIGHT;
    } else if (W_WIDTH === IP15_WIDTH && W_HEIGHT === IP15_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone15_v = true;
        statusBarHeight = STATUSBAR_IP15_HEIGHT;
    } else if (W_WIDTH === IP15MAX_WIDTH && W_HEIGHT === IP15MAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone15Max_v = true;
        statusBarHeight = STATUSBAR_IP15MAX_HEIGHT;
    } else if (W_WIDTH === IP16_WIDTH && W_HEIGHT === IP16_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone16_v = true;
        statusBarHeight = STATUSBAR_IP16_HEIGHT;
    } else if (W_WIDTH === IP16MAX_WIDTH && W_HEIGHT === IP16MAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone16Max_v = true;
        statusBarHeight = STATUSBAR_IP16MAX_HEIGHT;
    }
}

export const isIPhoneX = () => isIPhoneX_v;
export const isIPhoneXMax = () => isIPhoneXMax_v;
export const isIPhone12 = () => isIPhone12_v;
export const isIPhone12Max = () => isIPhone12Max_v;
export const isIPhone13 = () => isIPhone13_v;
export const isIPhone13Max = () => isIPhone13Max_v;
export const isIPhone14 = () => isIPhone14_v;
export const isIPhone14Max = () => isIPhone14Max_v;
export const isIPhone15 = () => isIPhone15_v;
export const isIPhone15Max = () => isIPhone15Max_v;
export const isIPhone16 = () => isIPhone16_v;
export const isIPhone16Max = () => isIPhone16Max_v;
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;

const getExpoRoot = () => global.Expo || global.__expo || global.__exponent;

export const isExpo = () => getExpoRoot() !== undefined;

export function getStatusBarHeight(skipAndroid) {
    return Platform.select({
        ios: statusBarHeight,
        android: skipAndroid ? 0 : StatusBar.currentHeight,
        default: 0
    })
}
