### How to reproduce error

1. ´yarn install´
2. ´cd next-app´
3. ´yarn dev´
4. visit http://localhost:8500

### Error

```

error - ../node_modules/@react-native/assets/registry.js
Module parse failed: Unexpected token (13:7)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| 'use strict';
|

> export type PackagerAsset = {
> | +\_\_packager_asset: boolean,
> | +fileSystemLocation: string,

Import trace for requested module:
../node_modules/@react-native/assets/registry.js
../node_modules/react-native/Libraries/Image/AssetRegistry.js
../node_modules/expo-asset/build/Asset.js
../node_modules/expo-asset/build/index.js
../node_modules/expo-font/build/FontLoader.web.js
../node_modules/expo-font/build/Font.js
../node_modules/expo-font/build/index.js
../node_modules/@expo/vector-icons/build/createIconSet.js
../node_modules/@expo/vector-icons/build/Icons.js
../expo-app/App.js

```

```

```
