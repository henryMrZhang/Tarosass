import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/css3study',
      'pages/my/my'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "selectedColor": "#0073e6",
      "borderStyle": "white",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          // "iconPath": './imgs/bottomtab/tab-home.png',
          // "selectedIconPath": './imgs/bottomtab/tab-home-pre.gif'
        },
        {
          "pagePath": "pages/my/my",
          "text": "我的",
          // "iconPath": './imgs/bottomtab/tab-quan.png',
          // "selectedIconPath": './imgs/bottomtab/tab-quan-pre.gif'
        },
        
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
