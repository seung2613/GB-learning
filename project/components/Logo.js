import React, { memo } from 'react';
import { Image, StyleSheet,View } from 'react-native';

const Logo = () => (
  <View>
    <Image source={require('../assets/thumbnail_GB_Logo_EN.png')} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: 230,
    height: 240,
    resizeMode: 'contain'
  },
});


export default memo(Logo);
