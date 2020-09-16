import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, FlatList, View } from 'react-native'


// Importing component item
import {Item} from './components/Item'

export default class App extends Component {

  // create state to save the task
  state = {
    taskText: ''
  }

  // array to store data 
  taskData = []

  // return the main screen
  render() {
    return (
      <SafeAreaView>
        <View style={styles.main}>
          <Text style={styles.title}>EzList</Text>
          <TextInput style={styles.textInput} placeholder='insert your task' 
                     onChangeText={text => this.setState({taskText: text})} />
        </View>
        <View>
          <TouchableOpacity style={styles.addButton} onPress={this.addItem}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.taskData}
          renderItem={this.renderList}
          keyExtractor={item => item.id}
          extraData={this.state.taskText}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }

  renderList = ({item}) => (
    <Item task_name={item.task_name}/>
  )

  addItem = () => {
    if(this.state.taskText == '') {
      return
    }
    console.log('aqui')
    // create variables to store itemId and listItem
    let itemId = new Date().getTime().toString()
    let taskItem = {
      id: itemId,
      task_name: this.state.taskText,
    }
    
    // push to list
    this.taskData.push(taskItem)
    
    // return new state
    this.setState({taskText:''})
  }
}



const styles = StyleSheet.create({
  main: {
    margin: 10,
    marginTop: 25
  },
  title:{
    fontSize: 30,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5 
  }, 
  addButton: {
    alignItems: 'center',
    backgroundColor:'lightblue', 
    padding:10,
    marginHorizontal:80,
    borderRadius:5,
  }
})