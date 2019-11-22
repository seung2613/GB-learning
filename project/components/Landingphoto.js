import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Landingphoto = () => (
  
  <Image source={require('../assets/pic1.jpg')} style={styles.image} />
  
);

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 250,
    resizeMode: 'contain'
  },
});

export default memo(Landingphoto);
