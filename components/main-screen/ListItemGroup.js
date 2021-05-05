import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ListItemGroup({item}) {
    return (
        <View>
            <Text>{JSON.stringify(item)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
