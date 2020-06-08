
import React,{Component} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, useContext, ScrollView, Button} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import axios from 'axios';

export default class ReminderList extends Component {
  state = {
    ReminderList: []
  }
// make the GET request to fetch data from the URL then using promise function to handle response.
  componentDidMount() {
    axios.get(`https://5ed94a7e4378690016c6aede.mockapi.io/api/v1/Reminder`)
      .then(res => {
        const ReminderList = res.data;
        this.setState({ ReminderList });
      })
  }

  render() {
   const {ReminderList} = this.state;
   return (
      <View>
        { 
        ReminderList.map(({ReminderList}) => (
          <TouchableOpacity key={ReminderList.id}>
            <View>
              <View style={styles.container}>
                <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:1}}>
                  <Text>{ReminderList.hour}</Text>
                  <Text>{ReminderList.date}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{ReminderList.title}</Text>
                </View>
                <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:5}}>
                  <Text style={styles.text}>{ReminderList.subtitle}</Text>
                  <TabBarIcon name="md-mail-unread" />
                </View>
              </View>
              <Text style={{height:8, backgroundColor: 'rgba(0,0,0, 0.0)'}}></Text>
            </View>
          </TouchableOpacity>
        ))
        }
      </View>
    )
  }
}




/*
export default function ReminderList({ navigation }){ 
  return (  
    <ScrollView>
      <View>
        {
          dataMocada.map(({ title, subtitle, id, date, hour }) => (
            <TouchableOpacity key={id} onPress={() => {
              navigation.navigate('Reminder')
            }}>
              <View>
                <View style={styles.container}>
                  <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:1}}>
                    <Text>{hour}</Text>
                    <Text>{date}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>{title}</Text>
                  </View>
                  <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:5}}>
                    <Text style={styles.text}>{subtitle}</Text>
                    <TabBarIcon name="md-mail-unread" />
                  </View>
                </View>
                <Text style={{height:8, backgroundColor: 'rgba(0,0,0, 0.0)'}}></Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
      
  )
}*/

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#cfd8dc',
    borderRadius: 10,
    borderColor: '#cfd8dc',
    height: 100,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
  },
  title: {
    fontSize: 24,
  },
  imageReminder:{
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
  },
  textApp:{
    padding: 5,
  },
});