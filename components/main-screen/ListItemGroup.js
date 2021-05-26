import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Surface } from 'react-native-paper'

export default function ListItemGroup({ item }) {
    return (
        <View style={{ padding: 5, }}>
            <Surface style={{ elevation: 4, borderRadius: 15, flexDirection: 'row' }}>
                <View style={{ width: 20, backgroundColor: '#06224A', marginRight: 10, height: "100%", borderTopLeftRadius: 15, borderBottomLeftRadius: 15, }} />

                <View style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: 'bold', color: '#06224A', marginBottom: 10, }}>
                        {item.title}
                    </Text>
                    <Text style={{ color: '#ccc' }}>
                        {item.time}
                    </Text>
                </View>
            </Surface>
        </View>
    )
}

const styles = StyleSheet.create({})
