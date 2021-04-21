import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import ClubListItem from './ClubListItem'

const data = [
    {
        id: 1,
        title: "Клуб Лева - Сихів",
        address: "вул. Зубрівська, 38",
    },
    {
        id: 2,
        title: "Еколенд",
        address: 'вул. Скрипника, 11',
    },
    {
        id: 3,
        title: "Клуб Лева - Південний",
        address: 'вул. Щирецька, 36',
    },
    {
        id: 4,
        title: "Junior Club",
        address: "пр. Червоної Калини, 37, 2 поверх ",
    },
]


export default function InfoClub() {

    const renderItem = ({ item }) => {
        return (<ClubListItem id={toString(item.title)} item={item} />)
    }

    return (
        <View style={styles.container}>
            <View style={styles.search_wrapper}>
                <TextInput
                    placeholder="Пошук"
                    right={() => <IconButton
                        icon="camera"
                        color={"#000"}
                        size={50}
                        onPress={() => console.log('Pressed')}
                    />}
                />
            </View>

            <Text>Клуби поблизу:</Text>
            <FlatList
                style={{ flex: 1, }}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.title.toString()}
                ItemSeparatorComponent={() => <View style={{ width: "100%", height: 1, backgroundColor: '#dadada' }}></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        margin: 20,
    },
    search: {

    },
    search_wrapper: {
        // margin: 20,
    },
})
