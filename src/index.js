import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import rootReducer from './reducers'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

console.log(process.env.UI_TYPE);

if (process.env.UI_TYPE === 'H5') {
  let initRootFontSize = function () {
    let deviceWidth = window.innerWidth
    let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
    let calc = 7.5
    if (deviceWidth > 768) deviceWidth = 768
    if (deviceWidth < 320) deviceWidth = 320
    if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
    let fontSize = Math.ceil(deviceWidth / calc)
    if (fontSize % 2 === 1) {
      fontSize--
    }
    document.documentElement.style.fontSize = fontSize + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
  }
  window.addEventListener('resize', initRootFontSize)
  initRootFontSize()
}