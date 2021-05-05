import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import ListItemGroup from './ListItemGroup';

const imageWidth = Dimensions.get('window').width * 0.4
const imageHeight = imageWidth;

export default function MainScreen() {

    const renderItem = ({item, index}) => {
        return <ListItemGroup item={item} key={index}/>
    }

    return (
        <View style={{ marginTop: 30, marginLeft: 30 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '40%', }}>
                    <Text style={{ fontSize: 36, fontWeight: "800", marginTop: 40, }}>Привіт, Олег</Text>
                    <Text style={{ fontSize: 10, color: '#444', marginTop: 20, }}>Сьогодні, 5 травня</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
                    <Image style={{ height: imageWidth, width: imageHeight, }} source={require("../../photos/main_screen_top2.png")} />
                </View>
            </View>
            <Text style={{ marginTop: 40, fontSize: 20, }}>Розклад занять</Text>
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
