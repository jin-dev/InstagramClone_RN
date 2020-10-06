import React from 'react';
import {Text, Image} from 'react-native';
import styles from './styles';
const Body = ({imageUri}) => (
    <>
    <Text>HAHA</Text>
  <Image source={{uri: imageUri}} style={styles.image} />
  </>
);
export default Body;
