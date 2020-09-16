import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export const Item = (props) => {
    return (
        <View>
            <Text>{props.task_name}</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    
})




