import React from 'react';
import {FlatList, View} from 'react-native';
import Story from '../Story';

const data = [
  {
    imageUri:
      'https://blog-cdn.routeperfect.com/wp-content/uploads/2018/12/05133442/shutterstock_166028657.jpg',
    name: 'test',
  },
  {
    imageUri: '',
    name: 'test2',
  },
  {
    imageUri: '',
    name: 'test3',
  },
  {
    imageUri: '',
    name: 'test4',
  },
];

const Stories = () => (
  <FlatList
    data={data}
    keyExtractor={({name}) => name}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
  />
);

export default Stories;
