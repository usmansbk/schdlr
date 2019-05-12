import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { Headline, TouchableRipple } from 'react-native-paper';
import { CachedImage } from 'react-native-cached-image';
import UserAvatar from 'components/common/UserAvatar';
import Loading from 'components/common/Loading';
import numeral from 'numeral';
import colors from 'config/colors';

export default ({
  navigation,
  loading,
  user: {
    id,
    pictureUrl,
    name,
    followingCount=0,
    createdCount=0,
  }
}) => loading ? <Loading /> : (
  <ScrollView contentContainerStyle={styles.header}>
    <CachedImage
      source={{uri: pictureUrl}}
      resizeMode="cover"
      style={styles.backgroundImage}
    />
    <View style={styles.image}>
      <UserAvatar
        src={pictureUrl}
        size={AVATAR_HEIGHT}
        name={name}
      />
    </View>
    <Headline style={styles.headline}>{name}</Headline>
    <TouchableRipple onPress={() => navigation.push('UserBoards', {
      id,
      name,
      profile: navigation.getParam('profile', false)
    })}>
      <View style={styles.countRow}>
        <View style={styles.item}>
          <Text style={styles.count}>{numeral(followingCount).format('0a')}</Text>
          <Text style={styles.label}>Following</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.count}>{numeral(createdCount).format('0a')}</Text>
          <Text style={styles.label}>Created</Text>
        </View>
      </View>
    </TouchableRipple>
  </ScrollView>
);

const AVATAR_HEIGHT = 120;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary_light
  },
  avatar: {
    width: AVATAR_HEIGHT,
    height: AVATAR_HEIGHT,
  },
  image: {
    width: AVATAR_HEIGHT,
    height: AVATAR_HEIGHT,
    borderRadius: AVATAR_HEIGHT / 2,
    borderWidth: 4,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5
  },
  headline: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-bold',
    textAlign: 'center',
    color: colors.white
  },
  count: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 8,
    marginBottom: 4
  },
  label: {
    color: colors.white,
    fontSize: 16,
  },
  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'blue'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  }
})