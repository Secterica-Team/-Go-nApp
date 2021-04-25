<<<<<<< HEAD
import React, {useState} from 'react'
import {FlatList, StyleSheet, Text, View, TextInput, Image} from 'react-native'
import Icon, {IconButton,} from 'react-native-paper'
import ClubListItem from './ClubListItem'
// import { NeuInput } from 'react-native-neu-element';
// import { Image } from 'react-native';
import { Shadow } from 'react-native-neomorph-shadows';
import photo1 from "../info-club/2.png"
import photo2 from "../info-club/image_2021-04-25_21-16-39.png"
import photo3 from "../info-club/3.png"


=======
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import ClubListItem from './ClubListItem'
import InsetShadow from 'react-native-inset-shadow'
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a

const data = [
    {
        id: 1,
        title: "Клуб Лева - Сихів",
        address: "вул. Зубрівська, 38",
<<<<<<< HEAD
        image: photo1,
=======
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
    },
    {
        id: 2,
        title: "Еколенд",
        address: 'вул. Скрипника, 11',
<<<<<<< HEAD
        image: photo2,
=======
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
    },
    {
        id: 3,
        title: "Клуб Лева - Південний",
        address: 'вул. Щирецька, 36',
<<<<<<< HEAD
        image: photo1,
=======
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
    },
    {
        id: 4,
        title: "Junior Club",
        address: "пр. Червоної Калини, 37, 2 поверх ",
<<<<<<< HEAD
        image: photo3,
=======
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
    },
]


export default function InfoClub() {

    const [open, setOpen] = useState(undefined)
    const [searchText, setSearchText] = useState('')
<<<<<<< HEAD
    // const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState(null);
    const renderItem = ({item}) => {
        return (<ClubListItem id={toString(item.title)} item={item} open={open} setOpen={setOpen}/>)
=======

    const renderItem = ({ item }) => {
        return (<ClubListItem id={toString(item.title)} item={item} open={open} setOpen={setOpen} />)
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
    }

    return (
        <View style={styles.container}>
            <View style={styles.search_wrapper}>
                <View
                    style={
<<<<<<< HEAD
                        {
                            // borderWidth: 1, borderRadius: 30, borderColor: "#24d",
                            // height: 60,
=======
                        { 
                            // borderWidth: 1, borderRadius: 30, borderColor: "#24d", 
                            // height: 60, 
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
                            flex: 1,
                        }
                    }
                >
<<<<<<< HEAD
                    <View>
                        <Image
                            source={require('../info-club/Button.png')}
                            style={styles.imageStyle}
                        />
                        <TextInput
                                placeholder="Пошук"
                                style={styles.input}
                        />
                    </View>
=======
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
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
                </View>
            </View>

            <Text style={styles.title}>Клуби поблизу:</Text>
            <FlatList
<<<<<<< HEAD
                style={{flex: 1,}}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.title.toString()}
                ItemSeparatorComponent={() => <View
                    style={{width: "100%", height: 1, backgroundColor: '#dadada'}}>

                </View>}
=======
                style={{ flex: 1, }}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.title.toString()}
                ItemSeparatorComponent={() => <View style={{ width: "100%", height: 1, backgroundColor: '#dadada' }}></View>}
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        margin: 20,
    },
<<<<<<< HEAD
    input: {
        position: 'absolute',
        top: 0,
        height: 50,
        width: 330,
        marginTop: 30,
        paddingLeft: 20,
        borderRadius: 40,
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 1
    },
    search: {},
    search_wrapper: {
        height: 100,
=======
    search: {

    },
    search_wrapper: {
        height: 70,
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
    },
    title: {
        fontSize: 24,
        // fontFamily: 'Rubik',
        margin: 10,
        fontWeight: "100",
<<<<<<< HEAD
    },
    imageStyle: {
        padding: 10,
        marginTop: 40,
        marginLeft: 300,
        height: 30,
        width: 40,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

=======
    }
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
})
