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
  Image,
  SwitchIOS,
  TouchableHighlight,
  TextInput
} = React;

var SwipePage = require('./SwipePage');

var InfoPage = React.createClass({
  getInitialState() {
    return {
      user: null,
      image: null,
      first_name: this.props.user.first_name
    };
  },
  render: function() {
    console.log(this.props.user);
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.user.picture.data.url }} style={styles.image}/>
        <Text>First Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.props.user.first_name} />
          <Text>Last Name</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.props.user.last_name} />
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
  },
  image: {
    width: 50,
    height: 50
  }
});

module.exports = InfoPage;
