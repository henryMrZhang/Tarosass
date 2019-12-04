import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '../../app.scss'
// import './index.scss'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '我的'
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
            <View className='index'>
                wade
            </View>
        )
    }
}
