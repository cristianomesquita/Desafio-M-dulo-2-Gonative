import { StackNavigator } from 'react-navigation'

import { colors } from 'styles'

import Repositories from 'pages/repositories'
import Issues from 'pages/issues'

const Navigation = StackNavigator(
  {
    Repositories: { screen: Repositories },
    Issues: { screen: Issues }
  },
  {
    initialRouteName: 'Repositories',
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: colors.black
    }
  }
)

export default Navigation
