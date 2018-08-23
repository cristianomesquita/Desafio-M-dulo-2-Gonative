import React from 'react'
import { View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import api from 'services/api'

import styles from './styles'

class Repositories extends React.Component {
  static navigationOptions = {
    title: 'GitIssues'
  }

  async componentDidMount() {
    try {
      const response = await api.get(`/repos/react-community/react-navigation`)
      console.tron.log(response)
    } catch (error) {
      console.tron.log(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar novo repositório"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
          <TouchableOpacity style={styles.button}>
            <Icon name="plus" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Repositories
