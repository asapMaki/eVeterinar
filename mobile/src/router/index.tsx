import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LogInStack from './LogInStack';
import LoggedInStack from './LoggedInStack';
import {connect} from 'react-redux';

class RootStack extends Component {
  render() {
    let {isUserSignedIn} = this.props;

    return <NavigationContainer>{isUserSignedIn ? <LoggedInStack /> : <LogInStack />}</NavigationContainer>;
  }
}

let mapStateToProps = state => {
  const {isUserSignedIn} = state;
  return {isUserSignedIn};
};

// export default RootStack;
export default connect(mapStateToProps, {})(RootStack);
