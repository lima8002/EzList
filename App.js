import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>EzList</Text>
      <TextInput style={styles.textInput} placeholder='insert your task' />
      <TouchableOpacity style={styles.addButton}>
        <Text>Add</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    padding:10,
    fontSize: 30,
  },
  textInput: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    
  }, 
  addButton: {
    alignItems: 'center',
    backgroundColor:'lightblue', 
    padding:10,
    marginHorizontal:80,
    marginTop:10,
    borderRadius:5,
  }
})