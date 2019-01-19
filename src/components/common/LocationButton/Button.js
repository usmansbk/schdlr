import React from 'react';
import { IconButton } from 'react-native-paper';

export default ({
  size,
  color,
  address,
  longitude,
  latitude
}) => (
  <IconButton
    disabled={!(longitude && latitude)}
    icon="map"
    color={color}
    size={size}
    onPress={() => alert(address)}
  />
);
