import React, { useState } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const Item = (props) => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>{props.task_name}</Text>  
            <View style={styles.icons}>
                <TouchableOpacity style={styles.textButton} onPress={ () => {props.done(props.id)} }>
                    <AntDesign name="checkcircleo" size={24} color={[ props.checkDone ? "green" : "black" ]} />
                </TouchableOpacity>    
                <TouchableOpacity style={styles.textButton} onPress={ () => {props.delete(props.id)} }>
                    <FontAwesome name="trash-o" size={28} color={[ props.checkDelete ? "gray" : "black" ]}   />
                </TouchableOpacity>   
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        borderTopWidth:0.5,
        borderColor:'gray',
        padding: 10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15
    },
    icons:{
        flexDirection: 'row',
        alignItems:'flex-end',
        
    },
    text: {
        fontSize: 18,
    },
    textButton:{
        fontSize: 24,
        marginHorizontal:12
          
    },


})




