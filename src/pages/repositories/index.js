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

  state = {
    data: [],
    inputText: null
  }

  loadRepositories = async () => {
    try {
      const response = await api.get(`/repos/${this.state.inputText}`)
      this.setState({ data: response.data })
    } catch (error) {
      console.tron.log(error)
    }
  }

  renderListItem = ({ item }) => {
    console.tron.log('FUCK')
  }

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
    />
  )

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
            onChangeText={text => this.setState({ inputText: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.loadRepositories}>
            <Icon name="plus" size={20} />
          </TouchableOpacity>
        </View>

        {this.renderList()}
      </View>
    )
  }
}

export default Repositories
