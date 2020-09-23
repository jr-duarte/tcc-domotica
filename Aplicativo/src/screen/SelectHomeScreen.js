import React, { Component } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
    FlatList,
} from 'react-native';

export default class SelectHome extends Component {
     constructor(props) {
        super(props);

        this.state = {
            arrData: []
        };
    }

    static navigationOptions = {
        title: 'Imóveis',
        headerStyle: {
            backgroundColor: "#3D45CE"
        },

        headerTintColor: '#FFF',
        headerTitleStyle: {
        }
    }

    tostMessage() {
        ToastAndroid.show('Residência offline, contate o administrador!', ToastAndroid.SHORT)
    }


    RenderElements() {
        return (

            [1, 2, 3, 4].forEach(element => {
                return (
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.push('SensorsActuator')}
                    >
                        <Text style={style = styles.buttonText}>{element}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    async getDateHouses() {
        let response = await axios.get(`https://apptcc-c7e29.firebaseio.com/houses.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
        })
        const data = Object.entries(response.data).map(item => ({ ...item[1], key: item[0] }));
        //console.log(data)
        return data
    }


    RenderElementsFlatList() {
        const dataHouse = []
        this.getDateHouses().then(house => dataHouse.push(house))
        const teste = dataHouse
        console.log(teste)
        return (
            <FlatList data={dataHouse}
                renderItem={({ item, index }) => <TouchableOpacity style={styles.button}
                    onPress={() => { if (item.active) { this.props.navigation.push('SensorsActuator') } else { this.tostMessage() } }}
                >
                    <Text style={style = styles.buttonText}>{item.address}</Text>
                </TouchableOpacity>}>
            </FlatList>
        )
    }

    render() {

        this.email = this.props.navigation.getParam('email')
        this.name = this.props.navigation.getParam('name')
        this.houses = this.props.navigation.getParam('houses')

        return (

            <View style={styles.container}>

                <ScrollView>
                    <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor="#3D45CE"
                    />

                    <View style={{ backgroundColor: '#5863F8', borderRadius: 15, borderBottomLeftRadius: 15, padding: 15, marginBottom: 15 }}>
                        <Text style={style = styles.textItens}>Escolha uma residência</Text>
                        {this.RenderElementsFlatList()}



                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.push('SensorsActuator')}
                        >
                            <Text style={style = styles.buttonText}>Av. Marquês de São Vicente, 3001, São Paulo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>R. Nebraska, 443, São Paulo</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>Av. Santa Maria, 45, Guarujá</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>R. Santa Clara, Rio de Janeiro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.push('SensorsActuator')}
                        >
                            <Text style={style = styles.buttonText}>Av. Marquês de São Vicente, 3001, São Paulo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>R. Nebraska, 443, São Paulo</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>Av. Santa Maria, 45, Guarujá</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>R. Santa Clara, Rio de Janeiro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.push('SensorsActuator')}
                        >
                            <Text style={style = styles.buttonText}>Av. Marquês de São Vicente, 3001, São Paulo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>R. Nebraska, 443, São Paulo</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>Av. Santa Maria, 45, Guarujá</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.tostMessage()}>
                            <Text style={style = styles.buttonText}>R. Santa Clara, Rio de Janeiro</Text>
                        </TouchableOpacity>

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
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#D7D8E5',
    },

    button: {
        backgroundColor: "#999FF7",
        alignSelf: 'stretch',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        //fontSize: 20,
    },

    textItens: {
        color: '#FFF',
        marginBottom: 30,
        marginTop: 20,
        fontFamily: 'Times New Roman',
        alignItems: 'center',
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: 15,
    },

})


