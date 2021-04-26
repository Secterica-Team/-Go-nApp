import React, {useState} from 'react'
import {FlatList, StyleSheet, Text, View, TextInput, Image} from 'react-native'
import ClubListItem from './ClubListItem'
import photo1 from "../info-club/info_photos/2.png"
import photo2 from "../info-club/info_photos/image_2021-04-25_21-16-39.png"
import photo3 from "../info-club/info_photos/3.png"



const data = [
    {
        id: 1,
        title: "Клуб Лева - Сихів",
        address: "вул. Зубрівська, 38",
        image: photo1,
    },
    {
        id: 2,
        title: "Еколенд",
        address: 'вул. Скрипника, 11',
        image: photo2,
    },
    {
        id: 3,
        title: "Клуб Лева - Південний",
        address: 'вул. Щирецька, 36',
        image: photo1,
    },
    {
        id: 4,
        title: "Junior Club",
        address: "пр. Червоної Калини, 37, 2 поверх ",
        image: photo3,
    },
]


export default function InfoClub() {

    const [open, setOpen] = useState(undefined)
    const [searchText, setSearchText] = useState('')
    // const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState(null);
    const renderItem = ({item}) => {
        return (<ClubListItem id={toString(item.title)} item={item} open={open} setOpen={setOpen}/>)
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
                    <View>
                        <Image
                            source={require('./info_photos/Button.png')}
                            style={styles.imageStyle}
                        />
                        <TextInput
                                placeholder="Пошук"
                                style={styles.input}
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.title}>Клуби поблизу:</Text>
            <FlatList
                style={{flex: 1,}}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.title.toString()}
                ItemSeparatorComponent={() => <View
                    style={{width: "100%", height: 1, backgroundColor: '#dadada'}}>

                </View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        margin: 20,
    },
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
    },
    title: {
        fontSize: 24,
        // fontFamily: 'Rubik',
        margin: 10,
        fontWeight: "100",
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

})
