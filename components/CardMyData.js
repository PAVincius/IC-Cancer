import React, { PureComponent } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';

export default class CardMyData extends PureComponent{
    
    constructor(props) {
        super(props)
        this.state = {
            item: []
        }
    }

    componentDidMount() {
        this.getDataFromAPI()
    }

    getDataFromAPI = async () => {
        const endpoint = 'https://5f496b5a8e271c001650c9d7.mockapi.io/api/v1/users'
        const res = await fetch(endpoint)
        const data = await res.json()
        this.setState({item: data})
    }

    render(){
        let {item} = this.state
        const navigation = (this.props.navigation)

        if(item.length === 0) {
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }

        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.card}
                    onPress={() => {navigation.navigate('PersonalInfo')}}
                >
                    <View>
                        <Text style={styles.cardText}>Olá, Rodrigo Santos</Text>
                        <Text style={styles.cardText}>CPF: 923.884.721-28</Text>
                    </View>
                    <Image
                        source={require('../assets/images/user.png')}
                        style={styles.cardImage}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    cardText: {
        fontSize: 16,
        padding: 6
    },
    card: {
       backgroundColor: '#fff',
       marginBottom: 10,
       marginLeft: '2%',
       width: '96%',
       shadowColor: '#000',
       shadowOpacity: 1,
       shadowOffset: {
           width: 3,
           height: 3
       },
       flexDirection: 'row',
       borderRadius: 6,
    },
    cardImage: {
        width: '25%',
        height: 60,
        resizeMode: 'cover',
        borderRadius: 50,
        alignSelf: 'center'
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})