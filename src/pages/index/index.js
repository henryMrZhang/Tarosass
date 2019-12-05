import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '../../app.scss'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  hrefcss3(e) {
    if (e == 'flexcol') {
      Taro.navigateTo({
        url: `/pages/index/flexcol`
      })
    } else if (e == 'css3') {
      Taro.navigateTo({
        url: `/pages/index/css3study`
      })
    }

  }
  render() {
    return (
      <View className=''>
        <View className='' onClick={this.hrefcss3.bind(this, 'css3')}>
          hrefcss3
       </View>
        <View className='' onClick={this.hrefcss3.bind(this, 'flexcol')}>
          栅格化布局
       </View>

      </View>
    )
  }
}


