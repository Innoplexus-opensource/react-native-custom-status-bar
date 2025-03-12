import React from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';
import { getStatusBarHeight } from './status-bar-height/index';

const CustomStatusBar = ({ backgroundColor, barStyle }) => {
  return (
    <SafeAreaView style={[styles.statusbar, { backgroundColor, height: getStatusBarHeight() }]}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  statusbar: {
    height: Platform.OS === 'ios' ? getStatusBarHeight() : 0
  }
})

export default CustomStatusBar;