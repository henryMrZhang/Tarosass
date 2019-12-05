import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '../../app.scss'
import './index.scss'

export default class flexcol extends Component {

    config = {
        navigationBarTitleText: '栅格化布局'
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
    //   hrefcss3() {
    //     Taro.navigateTo({
    //       url:`/pages/index/css3study`
    //     })
    //   }
    render() {
        return (
            <View className=''>
                flexcol
            </View>
        )
    }
}


