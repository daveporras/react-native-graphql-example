import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import styles from './RootStyles';
import saveData from '../actions/saveData';
import { GET_USER } from '../queries';

const { container } = styles;

class Root extends PureComponent {
  static propTypes = {
    saveDataAction: func.isRequired,
    client: shape({}).isRequired,
  }

  async componentDidMount() {
    const { saveDataAction, client } = this.props;
    const request = await client.query({ query: GET_USER, variables: { id: '23' } });
    saveDataAction({ type: 'SAVE_USER', payload: request.data.user });
  }

  render() {
    console.log(this.props.user)
    return (
      <View style={container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ user: { user }, company: { company } }) => ({ user, company });

const mapDispatchToProps = dispatch => ({
  saveDataAction(payload) {
    dispatch(saveData(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(Root));
