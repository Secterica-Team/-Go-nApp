import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, IconButton, Surface } from 'react-native-paper'
import { set } from 'react-native-reanimated'
import Collapsible from 'react-native-collapsible';

export default function ClubListItem({ item, setOpen, open }) {
    return (

        <Card style={styles.container}>
            <Surface style={{
                elevation: 4,
                borderRadius: 10,
            }}>
                <Card.Title
                    title={item.title}
                    subtitle={item.address}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="chevron-down" onPress={() => { setOpen(open? item.id:undefined) }} />}
                />
                <Collapsible collapsed={open===item.id}>
                </Collapsible>

                {/* <Text>{item}</Text> */}
            </Surface>

        </Card >
    )
}

const styles = StyleSheet.create({
    container: {
        // elevation: 5,
        // alignItems: 'center',
        // padding: 10,
        marginVertical: 10,

        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8E8'
    },
})
