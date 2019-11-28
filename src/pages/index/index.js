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
        <View className='bobatn_cred'>红</View>
        <View className='bobatn_cyellow'>黄</View>

        <View className='box'>12122</View>
        <View className='fixl'>Mixin</View>
        <View className='fixl2'>嗯哼</View>
        <View className='box_1'>1</View>
        <View className='box_2'>2</View>
        <View className='box_3'>3</View>
        <View className='box_4'>4</View>
      </View>
    )
  }
}
