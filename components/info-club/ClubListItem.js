import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, IconButton, Surface, useTheme } from 'react-native-paper'
import { set } from 'react-native-reanimated'
import Collapsible from 'react-native-collapsible';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ClubListItem({ item, setOpen, open }) {

    const colors = useTheme().colors;

    return (

        <Surface style={{
            elevation: 2,
            marginVertical: 10,
            marginHorizontal: 2,
            borderRadius: 20,
        }}>
            <Card style={styles.container}>
                <Card.Title
                    title={item.title}
                    subtitle={item.address}
                    left={(props) => <Avatar.Image style={styles.image} source={item.image} {...props}  />}
                    right={(props) => (
                        <IconButton
                            {...props}
                            icon="chevron-down"
                            onPress={() => {
                                setOpen(open !== item.id ? item.id : undefined)
                                // console.log('clicked on ' + item.title)
                            }}
                        />)}
                />
                <Collapsible collapsed={open !== item.id}>
                    <View style={{ margin: 10, }}>
                        <Text style={{ marginBottom: 10, }}><Text style={styles.bald}>Вебсайт:</Text> clubleva.ua</Text>
                        <Text><Text style={styles.bald}>Телефон:</Text> 067 326 1383</Text>
                        <Button
                            style={styles.button}
                            mode={'outlined'}
                        >
                           <Text style={{color: "#0245A3", fontSize: 14}}> Приєднатися</Text>
                    </Button>

                    </View>
                </Collapsible>

                {/* <Text>{item}</Text> */}

            </Card >
        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        borderRadius: 20,
        // borderColor: '#E8E8E8'
    },
    bald: {
        fontWeight: 'bold'
    },
   button:{
       margin: 5,
       borderRadius: 100,
       borderColor: "#0245A3",
       borderWidth: 2,
       width: 170,

       alignSelf: 'flex-end',
   },

})
