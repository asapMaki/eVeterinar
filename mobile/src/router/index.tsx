import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LogInStack from './LogInStack';
import LoggedInStack from './LoggedInStack';
import {connect} from 'react-redux';

class RootStack extends Component {
  render() {
    let {isUserSignedIn, user} = this.props;
    console.tron.log(user);
    return (
      <NavigationContainer>{isUserSignedIn ? <LoggedInStack role={user.role} /> : <LogInStack />}</NavigationContainer>
    );
  }
}

let mapStateToProps = state => {
  const {isUserSignedIn, user} = state;
  return {isUserSignedIn, user};
};

// export default RootStack;
export default connect(mapStateToProps, {})(RootStack);
