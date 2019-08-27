import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';


export default class SelectHome extends Component {

    static navigationOptions = {
        title: 'Controle',
        headerStyle: {
            backgroundColor: "#3D45CE"
        },

        headerTintColor: '#FFF',
        headerTitleStyle: {
        }
    }


    render() {
        return (

            <View style={styles.container}>

                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#3D45CE"
                />

                <View style={{ backgroundColor: '#565CCE', borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>
                    <Text style={style = styles.textItens}>Cômodos</Text>

                    <ScrollView
                        style={styles.scrollMenu}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                        <TouchableOpacity style={styles.buttonMenu}>
                            <Image style={styles.buttonImg}
                                source={require('../assets/room.png')} />
                            <Text style={style = styles.buttonText}>Sala</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu}>
                            <Image style={styles.logo}
                                source={require('../assets/garage.png')} />
                            <Text style={style = styles.buttonText}>Garagem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu}>
                            <Image style={styles.logo}
                                source={require('../assets/bedtime.png')} />
                            <Text style={style = styles.buttonText}>Quarto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu}>
                            <Image style={styles.logo}
                                source={require('../assets/kitchen.png')} />
                            <Text style={style = styles.buttonText}>Cozinha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu}>
                            <Image style={styles.logo}
                                source={require('../assets/growth.png')} />
                            <Text style={style = styles.buttonText}>Jardim</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>






                <ScrollView style={styles.scrollControle}>
                    <View style={styles.viewControle}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.buttonImg}
                                    source={require('../assets/lampOn.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOff.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 1</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOn.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/lampOff.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 2</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/tvOn.png')} />
                                <Text style={style = styles.buttonText}>Televisão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/radioOn.png')} />
                                <Text style={style = styles.buttonText}>Rádio</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.buttonImg}
                                    source={require('../assets/lampOn.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOff.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 1</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOn.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/lampOff.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 2</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/tvOn.png')} />
                                <Text style={style = styles.buttonText}>Televisão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/radioOn.png')} />
                                <Text style={style = styles.buttonText}>Rádio</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/tvOn.png')} />
                                <Text style={style = styles.buttonText}>Televisão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/radioOn.png')} />
                                <Text style={style = styles.buttonText}>Rádio</Text>
                            </TouchableOpacity>

                        </View>




                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/tvOn.png')} />
                                <Text style={style = styles.buttonText}>Televisão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/radioOn.png')} />
                                <Text style={style = styles.buttonText}>Rádio</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/tvOn.png')} />
                                <Text style={style = styles.buttonText}>Televisão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/radioOn.png')} />
                                <Text style={style = styles.buttonText}>Rádio</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/tvOn.png')} />
                                <Text style={style = styles.buttonText}>Televisão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/radioOn.png')} />
                                <Text style={style = styles.buttonText}>Rádio</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/tvOn.png')} />
                                <Text style={style = styles.buttonText}>Televisão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/radioOn.png')} />
                                <Text style={style = styles.buttonText}>Rádio</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.buttonImg}
                                    source={require('../assets/lampOn.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOff.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 1</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOn.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/lampOff.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 2</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.buttonImg}
                                    source={require('../assets/lampOn.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOff.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 1</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/fanOn.png')} />
                                <Text style={style = styles.buttonText}>Ventilador 2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonControle}>
                                <Image style={styles.logo}
                                    source={require('../assets/lampOff.png')} />
                                <Text style={style = styles.buttonText}>Lâmpada 2</Text>
                            </TouchableOpacity>

                        </View>




                    </View>
                </ScrollView>




            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#D7D8E5',
    },

    scrollMenu: {
        marginBottom: 5,
        backgroundColor: '#565CCE',
        height: 90,
    },

    scrollControle: {

        marginTop: 30,

        backgroundColor: '#D7D8E5',



    },

    viewControle: {
        flex: 1,
    },

    input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    buttonMenu: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: "#999FF7",
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 8,
    },

    buttonControle: {
        flexDirection: 'row',
        height: 40,
        width: '48%',
        backgroundColor: "#999FF7",
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 15,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 3,
    },

    buttonImg: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textItens: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontFamily: 'Times New Roman',
        alignItems: 'center',
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: 15,

    }

})


