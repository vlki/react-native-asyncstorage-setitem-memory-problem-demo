import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	componentDidMount() {
		setInterval(this.tick, 5000)
	}

	tick() {
		AsyncStorage.setItem('foo', 'a'.repeat(5000000))
	}

  render() {
    return (
      <View style={styles.container}>
				<Text>This app saves huge string via AsyncStorage every 5 seconds</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
