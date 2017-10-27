import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';

const FIXED_STRING_LENGTH = 150 * 1000 * 1000
const SAVE_STRING_LENGTH = 10 * 1000 * 1000

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.fixedString = 'a'.repeat(FIXED_STRING_LENGTH)
  }

  componentDidMount() {
    setTimeout(this.saveString, 5000)
  }

  saveString = () => {
    AsyncStorage.setItem('foo', 'a'.repeat(SAVE_STRING_LENGTH)).then(() => {
      setTimeout(this.saveString, 2000)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          This app saves long string via AsyncStorage.setItem every 2 seconds,
          gradually increases its memory usage and eventually gets killed by
          iOS because it wants too much memory when running on device
          (iPad Mini 2 ME800SL/A).
        </Text>
      </View>
    );
  }
}
