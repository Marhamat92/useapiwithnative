import React from 'react'
import { SafeAreaView,View,Text,Button,FlatList } from 'react-native'

function UserCard(props) {
  return (
   <View>
       <Text>{props.name}</Text>
   </View>
  )
}

export default UserCard