/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SwitchIOS,
  TouchableHighlight
} = React;

var InfoPage = require('./InfoPage');
var SwipePage = require('./SwipePage');

var SignUpPage = React.createClass({
  getInitialState() {
    return {
      matchMaker: true,
      potential: true,
    };
  },
  _onPressButton() {
    if (this.state.potential || this.state.matchMaker) {
      this.props.navigator.push({
        title: 'Information',
        component: InfoPage,
        passProps: { user: this.props.user, matchMaker: this.state.matchMaker, potential: this.state.potential }
      });
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.rowItem}>
          <SwitchIOS
            onValueChange={(value) => this.setState({matchMaker: value})}
            value={this.state.matchMaker} />
          <Text>I want to match friends</Text>
        </View>
        <View style={styles.rowItem}>
          <SwitchIOS
            onValueChange={(value) => this.setState({potential: value})}
            value={this.state.potential} />
          <Text>I want to be matched</Text>
        </View>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Continue</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = SignUpPage;
