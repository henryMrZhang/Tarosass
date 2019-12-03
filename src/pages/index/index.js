import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '../../app.scss'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <Text className='sasstest'>sasstest</Text> */}
        <View className='nestedsty'>
          <Text className='inlinesty'>嵌套试验</Text>
        </View>
        <View className='top'>
          <View className='top_txt'>复合的选择器</View>
          <View className='top_bggrey'></View>
        </View>
        <View className='fontsty'>属性嵌套</View>
        <View className='font_font'>插值试验</View>

        <View className='btn_success'></View>
        <View className='btn_error'></View>
        <View className='btn_warning'></View>
      </View>
    )
  }
}


