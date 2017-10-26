Sample project demonstrating the memory leak in React Native's `AsyncStorage`
when passing large string to `setItem` and running at iPad Mini 2 (ME800SL/A)
with iOS 11.0.3.

```js
// App.js
import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(this.saveHugeString, 5000)
  }

  saveHugeString = () => {
    AsyncStorage.setItem('foo', 'a'.repeat(50000000)).then(() => {
      setTimeout(this.saveHugeString, 5000)
    })
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
```

![](./xcode-screenshot.png)

```
$ react-native info

Environment:
  OS:  macOS High Sierra 10.13
  Node:  8.8.1
  Yarn:  1.2.1
  npm:  5.4.2
  Watchman:  4.9.0
  Xcode:  Xcode 9.0.1 Build version 9A1004
  Android Studio:  Not Found

Packages: (wanted => installed)
  react: 16.0.0 => 16.0.0
  react-native: 0.49.3 => 0.49.3
```
