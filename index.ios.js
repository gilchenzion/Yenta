/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

window.React = React;

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var Login = require('./Login');

var Yenta = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Login',
          component: Login,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Yenta', () => Yenta);
