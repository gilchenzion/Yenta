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
} = React;

var Swiper = require('react-native-swiper');

var Swipe = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper}
              showsButtons={false}
              showsPagination={false}
              loop={false}
              index={1}
              onMomentumScrollEnd={function(e){
                if (this.state.index == 0) {
                  console.log("NO NO NO NO");
                } else if (this.state.index == 2) {
                  console.log("YES YES YES");
                } else {
                  console.log("Do nothing");
                }
              }}>
        <View style={styles.slide1}>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>This is someones name</Text>
        </View>
        <View style={styles.slide3}>
        </View>
      </Swiper>
    );
  }
});

var SwipePage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Swipe />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = SwipePage;
