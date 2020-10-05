import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const ProfilePicture = (uri) => (
  <View style={styles.container}>
    <Image source={{uri: uri}} style={styles.image} />
  </View>
);

export default ProfilePicture;
