import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, FlatList, View } from 'react-native'


// Importing component item
import {Item} from './components/Item'

export default class App extends Component {

  // create state to save the task
  state = {
    taskText: '',
    done: false,
    delete: false
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
                     onChangeText={text => this.setState({taskText: text})} 
                     ref={(input) => (this._textInput = input)}/>
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
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }

  renderList = ({item}) => (
    <Item 
      task_name={ item.task_name }
      id={ item.id } 
      done= { this.doneItem }
      delete={ this.removeItem }
      checkDone={ this.state.done }
      checkDelete={ this.state.delete }
    />
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

    // sort the list
    this.sortList()
    
    // return new state and clear textInput
    this.setState({taskText:''})
    this._textInput.clear()
    this._textInput.focus()


  }

  removeItem = (itemId) => {
    this.taskData.forEach( (item,index) => {
      if (item.id == itemId) {
        this.listData.splice( index, 1 )
      }
    } )
    this.showToast('item deleted', 2000 )
    this.saveList()
    this.setState({expenseAmount:0})
  }

  doneItem = (itemId) => {
    this.taskData.forEach( (item) => {
      if (item.id == itemId) {
        this.setState({done:true})
      }
    } )
    this.setState({one:false})  
  }

  // sort the list with the last added on top
  sortList = () => {
    //compare id and move the new one to the top
    this.taskData.sort( (item1,item2)=> {
      return item2.id - item1.id
    })
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
    padding: 5,
    fontSize:18,
  }, 
  addButton: {
    alignItems: 'center',
    backgroundColor:'lightblue', 
    padding:10,
    marginHorizontal:80,
    borderRadius:5,
    marginBottom:5,
  }
})