import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const names = {
  "arrow-left": "arrowleft",
  "add": "plus-a",
  "search": "search1",
  "pin": "pushpin",
  "pino": "pushpino",
  "share": "sharealt",
  "map": "enviromento",
  "mapo": "enviromento",
  "trash": "delete",
  "edit-2": "edit",
  "bookmark": "star",
  "bookmarko": "staro",
  "notification": "bells",
  "settings": "setting",
  "sync": "sync",
  "import": "export2",
  "help": "questioncircleo",
  "comments": "message1",
  "logout": "logout",
  "mute": "sound",
  "x": "close",
  "copy": "copy1",
  "picture": "picture",
  "archive": "hourglass",
  "send": "pluscircleo"
};

export default ({ name, color, size, style, onPress }) => {
  return <Icon
    size={size}
    name={names[name] || name}
    color={color}
    style={style}
    onPress={onPress}
  />;
};