import React from 'react';
import Details from './Container';
import { withNavigationFocus } from 'react-navigation';
import DeleteConfirm from 'components/dialogs/DeleteEvent';
import CancelConfirm from 'components/dialogs/CancelEvent';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import Suspense from 'components/common/Suspense';
import { ONE_TIME_EVENT } from 'lib/constants';
import { I18n } from 'aws-amplify';

class Screen extends React.Component {
  state = { display: false };
  _goBack = () => this.props.navigation.goBack();

  componentDidMount = () => {
    setTimeout(() => this.setState({
      display: true
    }), 0);
  };

  shouldComponentUpdate = nextProps => nextProps.isFocused;

  _navigateToRepeat = () => this.props.navigation.navigate('NewEvent', { id: this.props.navigation.getParam('id'), isNew: true });
  _navigateToEdit = ({ id }) => this.props.navigation.navigate('EditEvent', { id });
  _navigateToSchedule = (id) => this.props.navigation.navigate('Schedule', { id });
  _navigateToComments = (id, title, date) => this.props.navigation.navigate('Comments', { id, title, date });
  _navigateToUser = (id) => this.props.navigation.navigate('UserProfile', { id });
  _navigateToBanner = (id) => this.props.navigation.navigate('Banner', { id });
  _navigateToBookmarks = (id) => this.props.navigation.navigate('EventBookmarks', { id });

  _openDeleteDialog = () => this.deleteConfirmRef.getWrappedInstance().open();
  _openCancelDialog = () => {
    console.log(this.cancelConfirmRef.wrappedInstance.wrappedInstance.open())
  };
  
  render() {
    const {
      display
    } = this.state;
    if (!display) return <Suspense />;

    const {
      navigation,
      event,
      error,
      loading,
      onRefresh
    } = this.props;
    const id = navigation.getParam('id');
    const refStartAt = navigation.getParam('refStartAt');
    const refEndAt = navigation.getParam('refEndAt');
    const cardView = navigation.getParam('cardView');

    if (loading && !event) return <Loading loading={loading} />;
    if (error && !event) return <Error onRefresh={onRefresh} loading={loading} />;
    if (!event) return <Error
      notFound
      message={I18n.get("ERROR_404")}
      caption={I18n.get("ERROR_404_caption")}
    />

    const isRecurring = event.recurrence !== ONE_TIME_EVENT;
    
    return (
      <>
        <Details
          id={id}
          cardView={cardView}
          event={event}
          refStartAt={refStartAt}
          refEndAt={refEndAt}
          handleBack={this._goBack}
          handleDelete={this._openDeleteDialog}
          handleCancel={this._openCancelDialog}
          handleEdit={this._navigateToEdit}
          handleRepeat={this._navigateToRepeat}
          navigateToSchedule={this._navigateToSchedule}
          navigateToComments={this._navigateToComments}
          navigateToBanner={this._navigateToBanner}
          navigateToUser={this._navigateToUser}
          navigateToBookmarks={this._navigateToBookmarks}
        />
        <DeleteConfirm
          id={id}
          banner={event.banner}
          onRef={ref => this.deleteConfirmRef = ref}
        />
        <CancelConfirm
          id={id}
          date={isRecurring ? refStartAt : null}
          ref={ref => this.cancelConfirmRef = ref}
        />
      </>
    )
  }
}

export default withNavigationFocus(Screen);