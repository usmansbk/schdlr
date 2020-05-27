import React from 'react';
import {
  Caption,
  ActivityIndicator
} from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import { I18n } from 'aws-amplify';

export default inject('stores')(observer(
  ({ hide, loading, onPress, stores, hasMore }) => {
    if (hide) return null;
    return (
      <TouchableOpacity
        disabled={!hasMore || loading}
        onPress={onPress}
        style={stores.appStyles.eventsList.footerContainer}
      >
        <View style={stores.appStyles.eventsList.footerContent}>
          { 
            loading ? <ActivityIndicator animating size={12} /> : (
              hasMore && (
                <Caption style={stores.appStyles.eventsList.footerText}>
                  { I18n.get("FOLLOWERS_loadMore")}
                </Caption>
              )
            )
          }
        </View>
      </TouchableOpacity>
    )
  }
))
