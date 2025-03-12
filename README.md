# @innoplexus/react-native-custom-status-bar

A customizable status bar component for React Native applications, supporting both Android and iOS platforms.

## Features

- Set status bar color for both Android and iOS
- Customize status bar style (`light-content`, `dark-content`)
- Supports auto adjustment to the device's status bar height

## Installation

Using npm:
```bash
npm install @innoplexus/react-native-custom-status-bar
```

Using yarn:
```bash
yarn add @innoplexus/react-native-custom-status-bar
```

## Usage

Import and use the `CustomStatusBar` component in your React Native app:

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import CustomStatusBar from '@innoplexus/react-native-custom-status-bar';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      {/* Customizable Status Bar */}
      <CustomStatusBar backgroundColor="#6200ea" barStyle="light-content" />
      
      <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>
        Hello, World!
      </Text>
    </View>
  );
};

export default App;
```

## Props

| Prop Name       | Type     | Default      | Description |
|---------------|----------|--------------|-------------|
| `backgroundColor` | `string` | `#ffffff` | Sets the status bar background color |
| `barStyle`    | `"light-content" \| "dark-content"` | `"dark-content"` | Sets the status bar text/icon color |
| `hidden`      | `boolean` | `false` | Hides or shows the status bar |

---

This package helps you customize the status bar easily in Android and iOS 🚀

Authors
===============

1. Sominath Thore, `Innoplexus <https://www.innoplexus.com/>`__.


