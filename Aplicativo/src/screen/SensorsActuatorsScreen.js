import React, { Component } from 'react';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    ToastAndroid,
    Modal,
} from 'react-native';

import Voice from 'react-native-voice';


export default class SelectHome extends Component {

    constructor(props) {
        super(props);
        Voice.onSpeechStart = this.onSpeechStart;
        Voice.onSpeechRecognized = this.onSpeechRecognized;
        Voice.onSpeechEnd = this.onSpeechEnd;
        Voice.onSpeechError = this.onSpeechError;
        Voice.onSpeechResults = this.onSpeechResults;
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;

        this.state = {
            recognized: '',
            pitch: '',
            error: '',
            end: '',
            started: '',
            results: [],
            partialResults: [],
            showIndicator: false,

            modalVisible: false,

            modoVigia: 'false',

            bottons: [],
            refresh: false,
            temperature: '27°',
        };
                        
        axios.get(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB/modoVigia.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
        })
            .catch(err => console.log(err))
            .then(res => {
                this.setState({
                    modoVigia: res.data
                })
            }),
            setInterval(() => {
                let response = axios.get(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB/temperatura.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                })
                    .catch(err => console.log(err))
                    .then(res => {
                        this.setState({
                            temperature: res.data + "°"
                        })
                    })
            }, 8000)


        setInterval(() => {
            let response = axios.get(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB/alertaMovimentacao.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
            })
                .catch(err => console.log(err))
                .then(res => {
                    if (res.data === 'true' && this.state.modoVigia == 'Ligado') {
                        this.setState({
                            modalVisible: true
                        })
                    }
                })
        }, 8000)
    }



    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    voiceheck(value) {

        switch (value) {
            case 'acender lâmpada 1 sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "lampadaSala1": 'Ligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'apagar lâmpada 1 sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "lampadaSala1": 'Desligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'acender lâmpada dois sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "lampadaSala2": 'Ligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'apagar lâmpada 2 sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "lampadaSala2": 'Desligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'Ligar ar-condicionado sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "arCondicionado": 'Ligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'desligar ar condicionado sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "arCondicionado": 'Desligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'ligar televisão sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "TvLCD": 'Ligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'desligar televisão sala':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "TvLCD": 'Desligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'acender lareira cozinha':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "lareira": 'Ligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'apagar lareira cozinha':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "lareira": 'Desligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'abrir portão garagem':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "portaoGaragem": 'Ligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            case 'Fechar portão garagem':
                axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                    "portaoGaragem": 'Desligado'
                })
                //ToastAndroid.show(value, ToastAndroid.SHORT)
                break;

            default:
                ToastAndroid.show('Comando de voz inválido!', ToastAndroid.SHORT)
            //ToastAndroid.show(value, ToastAndroid.SHORT)
        }

    }


    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    onSpeechStart = e => {
        // eslint-disable-next-line
        console.log('onSpeechStart: ', e);
        this.setState({
            started: '√',
        });
    };

    onSpeechRecognized = e => {
        // eslint-disable-next-line
        console.log('onSpeechRecognized: ', e);
        this.setState({
            recognized: '√',
        });
    };

    onSpeechEnd = e => {
        // eslint-disable-next-line
        console.log('onSpeechEnd: ', e);
        this.setState({
            end: '√',
        });


        setTimeout(() => {
            resutado = this.state.partialResults.join(' ')
            this.voiceheck(resutado)
        }, 5000);
    };

    onSpeechError = e => {
        // eslint-disable-next-line
        console.log('onSpeechError: ', e);
        this.setState({
            error: JSON.stringify(e.error),
        });
    };

    onSpeechResults = e => {
        // eslint-disable-next-line
        console.log('onSpeechResults: ', e);
        this.setState({
            results: e.value,
        });
    };

    onSpeechPartialResults = e => {
        // eslint-disable-next-line
        console.log('onSpeechPartialResults: ', e);
        this.setState({
            partialResults: e.value,
            showIndicator: false
        });

        // setTimeout(() => {
        //  resutado = this.state.partialResults.join(' ')
        // this.voiceheck(resutado)
        // }, 5000);



        //axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoE9wim7aqLOD0PigPR.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
        //  "lampadaCozinha": resutado
        //})

    };

    onSpeechVolumeChanged = e => {
        // eslint-disable-next-line
        console.log('onSpeechVolumeChanged: ', e);
        this.setState({
            pitch: e.value,
        });
    };

    _startRecognizing = async () => {
        this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: '',
            showIndicator: true,
        });

        try {
            //await Voice.start('en-US');
            await Voice.start('pt-BR');
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    _stopRecognizing = async () => {
        try {
            await Voice.stop();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    _cancelRecognizing = async () => {
        try {
            await Voice.cancel();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    _destroyRecognizer = async () => {
        try {
            await Voice.destroy();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
        this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: '',
            showIndicator: false,

        });
    };

    static navigationOptions = {
        title: 'Controle',
        headerStyle: {
            backgroundColor: "#3D45CE"
        },

        headerTintColor: '#FFF',
        headerTitleStyle: {
        }
    }


    renderItensSala() {

        this.setState({
            refresh: true,
            bottons: [],
        }, () => {
            this.setState({
                bottons: [
                    {
                        title: 'Televisão-On',
                        imagem: require('../assets/tvLCDOn.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "TvLCD": 'Ligado'
                            })
                        }
                    },

                    {
                        title: 'Televisão-Off',
                        imagem: require('../assets/tvLCDOff.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "TvLCD": 'Desligado'
                            })
                        }
                    },

                    {
                        title: 'Lâmpada1-On',
                        imagem: require('../assets/lampSalaOn.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "lampadaSala1": 'Ligado'
                            })
                        }
                    },

                    {
                        title: 'Lâmpada1-Off',
                        imagem: require('../assets/lampSalaOff.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "lampadaSala1": 'Desligado'
                            })
                        }
                    },

                    {
                        title: 'Lâmpada2-On',
                        imagem: require('../assets/lampSalaOn.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "lampadaSala2": 'Ligado'
                            })
                        }
                    },

                    {
                        title: 'Lâmpada2-Off',
                        imagem: require('../assets/lampSalaOff.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "lampadaSala2": 'Desligado'
                            })
                        }
                    },

                    {
                        title: 'ArCondicionado-On',
                        imagem: require('../assets/airConditioningOn.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "arCondicionado": 'Ligado'
                            })
                        }
                    },

                    {
                        title: 'ArCondicionado-Off',
                        imagem: require('../assets/airconditioningOff.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "arCondicionado": 'Desligado'
                            })
                        }
                    },
                ],
                refresh: false
            })
        })

    }

    renderItensCozinha() {
        this.setState({
            refresh: true,
            bottons: [],
        }, () => {
            this.setState({
                bottons: [
                    {
                        title: 'Lareira-On',
                        imagem: require('../assets/fireplaceOn.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "lareira": 'Ligado'
                            })
                        }
                    },


                    {
                        title: 'Lareira-Off',
                        imagem: require('../assets/fireplaceOff.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "lareira": 'Desligado'
                            })
                        }
                    },
                ],
                refresh: false
            })
        })
    }

    renderItensGaragem() {
        this.setState({
            refresh: true,
            bottons: [],
        }, () => {
            this.setState({
                bottons: [
                    {
                        title: 'Portão-On',
                        imagem: require('../assets/garageOn.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "portaoGaragem": 'Ligado'
                            })
                        }
                    },

                    {
                        title: 'Portão-Off',
                        imagem: require('../assets/garageOff.png'),
                        onPress: async () => {
                            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                                "portaoGaragem": 'Desligado'
                            })
                        }
                    },
                ],
                refresh: false
            })
        })
    }

    renderItensQuarto() {
        this.setState({
            refresh: true,
            bottons: [],
        }, () => {
            this.setState({
                bottons: [
                    { title: 'Lampâda-On', imagem: require('../assets/lampOn.png'), onPress: '' },
                    { title: 'Lampâda-Off', imagem: require('../assets/lampOff.png'), onPress: '' },
                    { title: 'Televisão-On', imagem: require('../assets/tvOn.png'), onPress: '' },
                    { title: 'Televisão-Off', imagem: require('../assets/tvOff.png'), onPress: '' },
                    { title: 'Ventilador-On', imagem: require('../assets/fanOn.png'), onPress: '' },
                    { title: 'Ventilador-Off', imagem: require('../assets/fanOff.png'), onPress: '' },
                ],
                refresh: false
            })
        })
    }



    renderItensJardim() {
        this.setState({
            refresh: true,
            bottons: [],
        }, () => {
            this.setState({
                bottons: [
                    { title: 'Lâmpada1-On', imagem: require('../assets/lampSalaOn.png'), onPress: '' },
                    { title: 'Lâmpada1-Off', imagem: require('../assets/lampSalaOff.png'), onPress: '' },
                    { title: 'Lâmpada2-On', imagem: require('../assets/lampSalaOn.png'), onPress: '' },
                    { title: 'Lâmpada2-Off', imagem: require('../assets/lampSalaOff.png'), onPress: '' },

                ],
                refresh: false
            })
        })
    }

    async turnOffEverything() {
        await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
            "TvLCD": 'Desligado',
            "arCondicionado": 'Desligado',
            "lampadaSala1": 'Desligado',
            "lampadaSala2": 'Desligado',
            "lareira": 'Desligado',
            "portaoGaragem": 'Desligado',
        })
        ToastAndroid.show('Todos os equipamentos foram desligados!', ToastAndroid.SHORT)
    }



    async modoVigia() {

        if (this.state.modoVigia == 'Ligado') {
            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                "modoVigia": 'Desligado',
            })
            this.setState({
                modoVigia: 'Desligado'
            })
            ToastAndroid.show('Modo vigia desativado!', ToastAndroid.SHORT)
        } else if (this.state.modoVigia == 'Desligado') {

            await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
                "modoVigia": 'Ligado',
            })

            this.setState({
                modoVigia: 'Ligado'
            })

            ToastAndroid.show('Modo vigia ativado!', ToastAndroid.SHORT)
        }
    }


    async modalClose() {
        await axios.patch(`https://apptcc-c7e29.firebaseio.com/houses/-LoEASEb-mzHsZbeU6FB.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
            "alertaMovimentacao": 'false'
        })
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

                        <TouchableOpacity style={styles.buttonMenu} onPress={() => { this.renderItensSala() }}>
                            <Image style={styles.buttonImg}
                                source={require('../assets/room.png')} />
                            <Text style={style = styles.buttonText}>Sala</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu} onPress={() => { this.renderItensCozinha() }}>
                            <Image style={styles.logo}
                                source={require('../assets/kitchen.png')} />
                            <Text style={style = styles.buttonText}>Cozinha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu} onPress={() => { this.renderItensGaragem() }}>
                            <Image style={styles.logo}
                                source={require('../assets/garage.png')} />
                            <Text style={style = styles.buttonText}>Garagem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu} onPress={() => { this.renderItensQuarto() }}>
                            <Image style={styles.logo}
                                source={require('../assets/bedtime.png')} />
                            <Text style={style = styles.buttonText}>Quarto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonMenu} onPress={() => { this.renderItensJardim() }}>
                            <Image style={styles.logo}
                                source={require('../assets/growth.png')} />
                            <Text style={style = styles.buttonText}>Jardim</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Alerta de movimentação detectada!');
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 15 }}>
                                ALERTA DE MOVIMENTAÇÃO DETECTADA!
                                </Text>

                            <TouchableOpacity
                                style={{ backgroundColor: 'black', marginTop: 10, padding: 10 }}

                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    this.modalClose();
                                }}>
                                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                                    FECHAR
                                </Text>

                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>





                <ScrollView style={styles.scrollControle}>
                    <View style={styles.viewControle} key>


                        <FlatList
                            data={this.state.bottons}
                            keyExtractor={(item) => item.title}
                            //extraData={this.state.refresh}
                            onRefresh={() => this.renderItensSala}
                            refreshing={this.state.refresh}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={styles.buttonControle} onPress={item.onPress}>
                                    <Image style={styles.buttonImg}
                                        source={item.imagem} />
                                    <Text style={style = styles.buttonText}>{item.title}</Text>
                                </TouchableOpacity>}
                        />

                    </View>
                </ScrollView>


                <TouchableOpacity style={styles.floatButtonAlarm} onPress={() => { this.modoVigia() }}>
                   { this.state.modoVigia == 'Desligado' ? <Image style={styles.buttonImg} source={require('../assets/alarm.png')}/>:
                    <Image style={styles.buttonImg} source={require('../assets/alarmOff.png')}/>}
                </TouchableOpacity>



                <TouchableOpacity style={styles.floatButtonTurnOffEverything} onPress={() => { this.turnOffEverything() }}>
                    <Image style={styles.buttonImg}
                        source={require('../assets/flash.png')} />
                </TouchableOpacity>



                <TouchableOpacity style={styles.floatButtonVoice} onPress={this._startRecognizing}>
                    {this.state.showIndicator ?
                        <LottieView style={{ justifyContent: 'center', alignItems: 'center', }} source={require('../assets/voicee.json')} autoPlay loop /> :
                        <Image style={styles.buttonImg}
                            source={require('../assets/voice.png')} />}
                </TouchableOpacity>



                <TouchableOpacity style={styles.floatButtonTemperature} onPress={this._destroyRecognizer}>
                    <Text style={style = styles.buttonText}>{this.state.temperature}</Text>
                    <Image style={styles.buttonImg}
                        source={require('../assets/thermometer.png')} />
                </TouchableOpacity>



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
        height: 50,
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
        marginRight: 3,
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

    },

    floatButtonVoice: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#565CCE',
        position: 'absolute',
        bottom: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },

    floatButtonTemperature: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#565CCE',
        position: 'absolute',
        bottom: 75,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },

    floatButtonTurnOffEverything: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#565CCE',
        position: 'absolute',
        bottom: 140,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },

    floatButtonAlarm: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#565CCE',
        position: 'absolute',
        bottom: 205,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },

    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    modalView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        padding: 15,
        borderRadius: 10,
        shadowRadius: 10,
    }

})


