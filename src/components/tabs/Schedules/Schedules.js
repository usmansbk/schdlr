import React from 'react';
import memoize from 'memoize-one';
import List from 'components/lists/Schedules';
import FAB from 'components/common/Fab';

export default class Schedules extends React.Component {

  _mergeAllSchedules = memoize(
    (data) => {
      if (!data) return [];
      const { created, following } = data;
      return created.items
        .concat(following.items.filter(item => Boolean(item.schedule)).map(item => item.schedule));
    }
  );

  get schedules() {
    return this._mergeAllSchedules(this.props.data)
  }

  shouldComponentUpdate = (nextProps) => nextProps.navigation.isFocused();

  _navigateToNewSchedule = () => this.props.navigation.navigate('NewSchedule');
  
  render() {
    return (
      <>
        <List schedules={this.schedules} />
        <FAB
          icon="plus"
          onPress={this._navigateToNewSchedule}
        />
      </>
    )
  }
}