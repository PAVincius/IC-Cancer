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
        const endpoint = 'https://5f496b5a8e271c001650c9d7.mockapi.io/api/v1/contacts'
        const res = await fetch(endpoint)
        const data = await res.json()
        this.setState({items: data})
    }


    _renderItem = ({item, index}) => {
        return(
            <TouchableOpacity style={styles.card}>
                <Text>{item.name}</Text>
                <Text>{item.number}</Text>
            </TouchableOpacity>
        )
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
            <View style={styles.container}>
            <FlatList 
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
            <TouchableOpacity onPress={() => {navigation.navigate('Contact')}}>
                <Image 
                    source={require('../assets/images/SimboloMais.png')}
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
       borderRadius: 6
    },
    cardImage: {
        width: '10%',
        height: 20,
        resizeMode: 'cover'
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})