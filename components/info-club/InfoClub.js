import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import ClubListItem from './ClubListItem'
import InsetShadow from 'react-native-inset-shadow'

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

    const [open, setOpen] = useState(undefined)
    const [searchText, setSearchText] = useState('')

    const renderItem = ({ item }) => {
        return (<ClubListItem id={toString(item.title)} item={item} open={open} setOpen={setOpen} />)
    }

    return (
        <View style={styles.container}>
            <View style={styles.search_wrapper}>
                <View
                    style={
                        { 
                            // borderWidth: 1, borderRadius: 30, borderColor: "#24d", 
                            // height: 60, 
                            flex: 1,
                        }
                    }
                >
                    <InsetShadow shadowRadius={100} shadowOffset={4}>
                        {/* <TextInput
                            placeholder="Пошук"
                            value={searchText}
                            onChangeText={setSearchText}
                            style={{padding: 10,}}
                        // right={() => <IconButton
                        //     icon="camera"
                        //     color={"#000"}
                        //     size={50}
                        //     onPress={() => console.log('Pressed')}
                        // />}
                        /> */}
                        <TextInput
                            // label="Email"
                            mode={'outlined'}
                            value={searchText}
                            onChangeText={text => setSearchText(text)}
                        />
                    </InsetShadow>
                </View>
            </View>

            <Text style={styles.title}>Клуби поблизу:</Text>
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
        height: 70,
    },
    title: {
        fontSize: 24,
        // fontFamily: 'Rubik',
        margin: 10,
        fontWeight: "100",
    }
})
