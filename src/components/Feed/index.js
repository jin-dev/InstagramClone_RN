import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
const data = [
  {
    user: {
      imageUri: '',
      name: 'Jin',
    },
    imageUri:
      'https://d3b39vpyptsv01.cloudfront.net/photo/1/2/9a2f78736be803a7b66e34de5f314573.jpg',
    caption: 'Beaufiful city #Italy',
    likesCount: 777,
    postedAt: '10 mins ago',
  },
  {
    user: {
      imageUri: '',
      name: 'Jin2',
    },
    imageUri:
      'https://d3b39vpyptsv01.cloudfront.net/photo/1/2/9a2f78736be803a7b66e34de5f314573.jpg',
    caption: 'Beaufiful city #Italy',
    likesCount: 777,
    postedAt: '10 mins ago',
  },
  {
    user: {
      imageUri: '',
      name: 'Jin3',
    },
    imageUri:
      'https://d3b39vpyptsv01.cloudfront.net/photo/1/2/9a2f78736be803a7b66e34de5f314573.jpg',
    caption: 'Beaufiful city #Italy',
    likesCount: 777,
    postedAt: '10 mins ago',
  },
];

const Feed = () => (
  <FlatList data={data} renderItem={({item}) => <Post post={item} />} />
);

export default Feed;
