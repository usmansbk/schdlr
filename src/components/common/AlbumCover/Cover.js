import React from 'react';
import { View, Image } from 'react-native';
import getImageUrl from 'helpers/getImageUrl';

export default class Cover extends React.Component {
  render() {
    const { images } = this.props;
    const sources = images.map(img => ({ uri: getImageUrl(img, 320)}))
    return (
      <View style={{
        justifyContent: 'center',
        padding: 4,
      }}>
        {
          sources.slice(0, 4).map(img => (
            <Image
              defaultSource={require('../../../assets/placeholder.png')}
              style={{
                width: 100,
                height: 100,
                margin: 4
              }}
              source={img}
            />
          ))
        }
      </View>
    )
  }
}