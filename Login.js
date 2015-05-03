'use strict';

var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var FBLogin = require('react-native-facebook-login');

var ParseReact = require('parse-react');
var SwipePage = require('./SwipePage');
var SignUpPage = require('./SignUpPage');


var FBapi = 'https://graph.facebook.com/v2.3/';

var Login = React.createClass({

  getInitialState: function(){
    return {
      user: null,
    };
  },

  getFBInfoForUser: function(user) {
    var _this = this;

    var FBInfoURL = FBapi + `${user.userId}?fields=picture,email,first_name,gender,last_name&access_token=${user.token}&width=100`;

    fetch(FBInfoURL)
      .then((response) => response.json())
      .then((responseData) => {
        var query = new Parse.Query("Person");
        query.equalTo("email", responseData.email).find({
          success: function(results) {
            // Do something with the returned Parse.Object values
            if (results.length === 0) {
                // ParseReact.Mutation.Create("Person", responseData).dispatch().then(()=> {
                _this.props.navigator.replace({
                  title: 'MatchMaker',
                  component: SignUpPage,
                  passProps: {user: responseData}
                });
                // });
              // this.props.navigator.push({
              //
              // });
            } else {
              _this.props.navigator.replace({
                title: 'Home',
                component: SwipePage,
                passProps: {user: responseData.email}
              });
            }
          },
          error: function(error) {

          }
        });

        console.log("Gets here");
        // _this.props.navigator.push({
        //
        // })
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
