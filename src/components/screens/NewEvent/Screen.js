import React from 'react';
import SimpleToast from 'react-native-simple-toast';
import moment from 'moment';
import Form from 'components/forms/Event';
import eventTypes from 'components/forms/Event/types';
import frequency from 'components/forms/Event/frequency';
import { BOARD_CLOSED } from 'lib/constants';

export default class NewEventScreen extends React.Component {
  static defaultProps = {
    boards: []
  };
  _handleBack = () => this.props.navigation.goBack();
  _handleSubmit = async (form) => {
    try {
      const result = await this.props.onSubmit(form);
      this.props.navigation.replace('EventDetails', {
        id: result.data.createEvent.id
      });
    } catch(error) {
      SimpleToast.show(error.message, SimpleToast.SHORT);
    }
  };
  _getInitialValues = () => {
    const { event={}, boardId } = this.props;
    const {
      title,
      description,
      venue,
      startAt,
      endAt,
      allDay,
      eventType,
      repeat,
      until,
      forever,
      board={}
    } = event;

    const location = (venue && venue.location) ? {
      ...venue.location
    } : {
      longitude: null,
      latitude: null
    };

    const targetDate = this.props.navigation.getParam('targetDate', moment().toISOString())
    const initialStartAt = moment(targetDate).toISOString();
    const initialEndAt = moment(targetDate).add(2, 'hours').toISOString();
    const start = startAt || initialStartAt;
    const end = endAt || initialEndAt;

    return ({
      title: title || '',
      description: description || '',
      venue: {
        address: venue && venue.address || '',
        location
      },
      startAt: start,
      endAt: end,
      allDay: Boolean(allDay),
      eventType: eventType || eventTypes[0].id,
      repeat: repeat || frequency[0].id,
      until,
      forever,
      boardId: board.id || boardId
    });
  };

  render() {
    return (
      <Form
        initialValues={this._getInitialValues()}
        isNew={this.props.isNew}
        boards={this.props.boards.filter(board => board.isAuthor && (board.status !== BOARD_CLOSED) && (board.id[0] !== '-'))}
        handleCancel={this._handleBack}
        onSubmit={this._handleSubmit}
        locked={Boolean(this.props.boardId)}
      />
    )
  }
}