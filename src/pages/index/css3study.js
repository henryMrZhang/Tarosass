import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '../../app.scss'
import '../../style/csses.scss'

export default class Css3 extends Component {

    config = {
        navigationBarTitleText: 'css3'
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

    render() {
        return (
            <View className=''>
                <View className="boxes">
                    <View className="smallbox"></View>
                </View>
                <View className='colooo'>hahha</View>
            </View>
        )
    }
}
