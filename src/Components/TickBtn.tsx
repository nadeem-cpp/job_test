import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TickBtn = () => {
  return (
    <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 10, backgroundColor: "grey" }} >
    <Text style={{ textAlign: "center", color: "white" }}>✓</Text>
</View>
  )
}

export default TickBtn