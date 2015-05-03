/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
Parse.initialize('JksqOy90Tn2Ha2Q0URVFjUlF3LLFjIVpvMIHZ2MO', 'kjI3KWFgCGxkO279rF2G3e6oqKsQhETPIyssWajr');

window.React = React;
window.Parse = Parse;

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
        navigationBarHidden={true}
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
