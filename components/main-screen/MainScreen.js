import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import ListItemGroup from './ListItemGroup';

const imageWidth = Dimensions.get('window').width * 0.4
const imageHeight = imageWidth;

const scheludeItemsList = [
    {
        id: 1,
        title: 'Група 2012 рік',
        time: '12:30 - 13:45'
    },
    {
        id: 2,
        title: 'Група 2010 рік',
        time: '14:15 - 15:30'
    },
    {
        id: 3,
        title: 'Група 2008 рік',
        time: '18:00 - 19:45'
    }
]

export default function MainScreen() {

    const renderItem = ({ item, index }) => {
        return <ListItemGroup item={item} key={JSON.stringify(item.id)} />
    }

    return (
        <View style={{ paddingTop: 30, marginHorizontal: 30, height: '100%' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '40%', }}>
                    <Text style={{ fontSize: 36, fontWeight: "800", marginTop: 40, }}>Привіт, Олег</Text>
                    <Text style={{ fontSize: 14, color: '#444', marginTop: 20, }}>Сьогодні, 5 травня</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
                    <Image style={{ height: imageWidth, width: imageHeight, }} source={require("../../photos/main_screen_top2.png")} />
                </View>
            </View>
            <Text style={{ marginTop: 40, fontSize: 20, fontWeight: 'bold', color: '#06224A', marginBottom: 20 }}>Розклад занять</Text>
            <FlatList
                data={scheludeItemsList}
                renderItem={renderItem}
                keyExtractor={(item) => JSON.stringify(item.id)}
                contentContainerStyle={{ flex: 1 }}
            />

            <View style={{
                marginBottom: 20,
                flexDirection: 'row'
            }}
            >
                <Text>
                    Приєднатися до спорядження
                </Text>
                <Button mode='contained'>Next</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
