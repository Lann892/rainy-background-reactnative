# react-native-snow-bg
It can be used for ios and android as nice rainy background!

![](Example/rainy-bg.gif)

# Usage
Install module:
```
npm install --save rainy-background-reactnative
```

or

```
yarn add rainy-background-reactnative
```

Add it to any View in you app:
```js
import Rainy from 'rainy-background-reactnative';

export default function App() {
  return (
    <View>
      ...
      <Rainy fullScreen rainCount={100} fallSpeed="medium" />
    </View>
  );
}
```

# Snow props
| Props                | Type          | Description  | Default      |
| --------------------- |:-------------:| ------------ | ------------ |
| `rainCount` | `Integer`     | How many snowflakes to render.      |`100` |
| `fallSpeed`  | `slow` , `medium`, `fast`     | How fast snowflakes will fall.| `medium`         |
| `fullScreen`    | `Boolean`     | If `true` component will always take screen width and height. If `false` it will take 100% parent width and height. Usefult if  you want snow background to fill jsut a part of your screen.      | `false` |