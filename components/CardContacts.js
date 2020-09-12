import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Image, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { Icon } from 'native-base';

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
            <LinearGradient
                start={{x: 1.2, y: 0.6}} end={{x: 0.1, y: 0.1}}
                colors={[Colors.primary, Colors.secondaryLight]}
                style={{padding: 5, flex: 1}}>
                <SafeAreaView>
                    <FlatList 
                        data={items}
                        style={styles.container}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('Contatos')}}
                        style={styles.contactButton}    
                    >
                        <Icon
                            name='add'
                        />
                    </TouchableOpacity>
                </SafeAreaView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 5
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
       borderRadius: 6,
       padding: 5
    },
    cardImage: {
        width: '90%',
        height: 60,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactButton: {
        height: 60,
        width: '20%',
        alignSelf: 'flex-end',
        marginBottom: '10%',
        marginRight: 5,
        backgroundColor: '#00BFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    }
})