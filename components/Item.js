import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export const Item = (props) => {
    return (
        <View style={styles.main}>
            <Text>{props.task_name}</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        borderBottomWidth:1,
        padding: 10,
        marginHorizontal:10,
        flex:1,
        flexDirection:'row'
    }

})




