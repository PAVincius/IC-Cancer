import React, { PureComponent } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

export default class CardContacts extends PureComponent{
    
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.getDataFromAPI()
    }

    getDataFromAPI = async () => {
        const endpoint = 'https://5f496b5a8e271c001650c9d7.mockapi.io/api/v1/users'
        const res = await fetch(endpoint)
        const data = await res.json()
        this.setState({items: data})
    }

    render(){
        let {items} = this.state
        const navigation = (this.props.navigation)

        if(items.length === 0) {
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }

        return(
            <View style={styles.cardText}>
                <TouchableOpacity style={styles.card}>
                    <View>
                        <Text style={styles.cardText}> Olá, {item.name}</Text>
                        <Text style={styles.cardText}>CPF: {item.cpf}</Text>
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
        marginTop: 40
    },
    cardText: {
        fontSize: 16,
        padding: 10
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
       borderRadius: 6
    },
    cardImage: {
        width: '10%',
        height: 20,
        resizeMode: 'cover',
        borderRadius: 50
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})