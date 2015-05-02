'use strict';

var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var FBLogin = require('react-native-facebook-login');

var FBapi = 'https://graph.facebook.com/v2.3/';

var Login = React.createClass({
  getInitialState: function(){
    return {
      user: null,
    };
  },

  getFBInfoForUser: function(user) {
    var FBInfoURL = FBapi + `${user.userId}?fields=picture,email,about,education,first_name,gender,last_name,hometown&access_token=${user.token}`;
    console.log(FBInfoURL);
    fetch(FBInfoURL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      });
  },

  render: function() {
    var _this = this;
    var user = this.state.user;

    return (
      <View style={styles.container}>
        <FBLogin style={{ marginBottom: 10, }}
          permissions={["email","user_friends"]}
          onLogin={function(data){
            console.log("Logged in!");
            console.log(data);
            _this.getFBInfoForUser(data.credentials);
            _this.setState({ user : data.credentials });
          }}
          onLogout={function(){
            console.log("Logged out.");
            _this.setState({ user : null });
          }}
          onLoginFound={function(data){
            console.log("Existing login found.");
            console.log(data);
            _this.getFBInfoForUser(data.credentials);
            _this.setState({ user : data.credentials });
          }}
          onLoginNotFound={function(){
            console.log("No user logged in.");
            _this.setState({ user : null });
          }}
          onError={function(data){
            console.log("ERROR");
            console.log(data);
          }}
          onCancel={function(){
            console.log("User cancelled.");
          }}
          onPermissionsMissing={function(data){
            console.log("Check permissions!");
            console.log(data);
          }}
        />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = Login;
