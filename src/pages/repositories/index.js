import React from 'react'
import { Text } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Repositories extends React.Component {
  static navigationOptions = {
    title: 'GitIssues'
  }

  componentDidMount() {
    console.tron.log(this.props)
    const navigation = NavigationActions.navigate({ routeName: 'Issues' })
    this.props.navigation.dispatch(navigation)
  }

  render() {
    return <Text>Repositories</Text>
  }
}

export default Repositories
