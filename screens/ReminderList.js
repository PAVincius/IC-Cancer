import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, useContext, ScrollView, Button} from 'react-native';

export const dataMocada = [
  {
    id: '1',
    title: 'Lembrete 1',
    subtitle: 'Assunto1',
    text:
      'Odio duis elit curae quis lectus potenti amet nam senectus imperdiet, per est donec eget morbi pulvinar porta semper at, taciti vivamus habitant accumsan viverra nostra et sagittis potenti. luctus consequat elit accumsan ante arcu ornare accumsan, fringilla tincidunt semper tempus potenti faucibus egestas, aliquet blandit ad cursus ad eleifend. ',
    date: '20/04/2020',
    hour: '21:04'
  },
  {
    id: '2',
    title: 'Lembrete 2',
    subtitle: 'Assunto2',
    text:
      'Laoreet aliquam tempus malesuada donec torquent ac magna imperdiet leo purus habitasse dictumst, dolor condimentum nunc vulputate vivamus consectetur nulla malesuada accumsan pulvinar. laoreet quam convallis sodales vestibulum platea morbi interdum litora est sapien mollis metus rutrum ornare, consectetur aliquam egestas donec vehicula auctor tristique lectus sem bibendum aenean congue. ',
    date: '22/04/2020',
    hour: '07:15'
  },
  {
    id: '3',
    title: 'Lembrete 3',
    subtitle: 'Assunto3',
    text:
      'Litora blandit semper etiam habitant aliquet tristique ut platea malesuada curae blandit, sed aliquet auctor cursus aenean hac class facilisis molestie posuere ut pulvinar, consectetur primis scelerisque tempor vel per aliquam curabitur velit nisl. nisi netus magna ullamcorper aenean laoreet mattis sapien viverra, porta sodales orci justo felis metus fringilla. ',
    date: '19/04/2020',
    hour: '10:30'
  },
  {
    id: '4',
    title: 'Lembrete 4',
    subtitle: 'Assunto4',
    text:
      'Tortor elementum et aenean ac eu libero facilisis ut morbi, varius urna orci magna sapien condimentum orci sodales viverra rhoncus, fringilla quis integer auctor inceptos placerat aenean nostra. eu dui etiam vivamus nostra enim nec nostra, inceptos consectetur aptent nostra cubilia aliquet euismod ipsum, condimentum ullamcorper et leo nostra donec.',
    date: '23/04/2020',
    hour: '10:22'
  },
  {
    id: '5',
    title: 'Lembrete 5',
    subtitle: 'Assunto5',
    text:
      'Tortor elementum et aenean ac eu libero facilisis ut morbi, varius urna orci magna sapien condimentum orci sodales viverra rhoncus, fringilla quis integer auctor inceptos placerat aenean nostra. eu dui etiam vivamus nostra enim nec nostra, inceptos consectetur aptent nostra cubilia aliquet euismod ipsum, condimentum ullamcorper et leo nostra donec.',
    date: '23/04/2020',
    hour: '10:22'
  },
  {
    id: '6',
    title: 'Lembrete 6',
    subtitle: 'Assunto6',
    text:
      'Tortor elementum et aenean ac eu libero facilisis ut morbi, varius urna orci magna sapien condimentum orci sodales viverra rhoncus, fringilla quis integer auctor inceptos placerat aenean nostra. eu dui etiam vivamus nostra enim nec nostra, inceptos consectetur aptent nostra cubilia aliquet euismod ipsum, condimentum ullamcorper et leo nostra donec.',
    date: '23/04/2020',
    hour: '10:22'
  },
  {
    id: '7',
    title: 'Lembrete 7',
    subtitle: 'Assunto7',
    text:
      'Tortor elementum et aenean ac eu libero facilisis ut morbi, varius urna orci magna sapien condimentum orci sodales viverra rhoncus, fringilla quis integer auctor inceptos placerat aenean nostra. eu dui etiam vivamus nostra enim nec nostra, inceptos consectetur aptent nostra cubilia aliquet euismod ipsum, condimentum ullamcorper et leo nostra donec.',
    date: '23/04/2020',
    hour: '10:22'
  },
  {
    id: '8',
    title: 'Lembrete 8',
    subtitle: 'Assunto8',
    text:
      'Tortor elementum et aenean ac eu libero facilisis ut morbi, varius urna orci magna sapien condimentum orci sodales viverra rhoncus, fringilla quis integer auctor inceptos placerat aenean nostra. eu dui etiam vivamus nostra enim nec nostra, inceptos consectetur aptent nostra cubilia aliquet euismod ipsum, condimentum ullamcorper et leo nostra donec.',
    date: '23/04/2020',
    hour: '10:22'
  },
  {
    id: '9',
    title: 'Lembrete 9',
    subtitle: 'Assunto9',
    text:
      'Tortor elementum et aenean ac eu libero facilisis ut morbi, varius urna orci magna sapien condimentum orci sodales viverra rhoncus, fringilla quis integer auctor inceptos placerat aenean nostra. eu dui etiam vivamus nostra enim nec nostra, inceptos consectetur aptent nostra cubilia aliquet euismod ipsum, condimentum ullamcorper et leo nostra donec.',
    date: '23/04/2020',
    hour: '10:22'
  },
  {
    id: '10',
    title: 'Lembrete 10',
    subtitle: 'Assunto10',
    text:
      'Tortor elementum et aenean ac eu libero facilisis ut morbi, varius urna orci magna sapien condimentum orci sodales viverra rhoncus, fringilla quis integer auctor inceptos placerat aenean nostra. eu dui etiam vivamus nostra enim nec nostra, inceptos consectetur aptent nostra cubilia aliquet euismod ipsum, condimentum ullamcorper et leo nostra donec.',
    date: '23/04/2020',
    hour: '10:22'
  },
];
/* com consumo do api
class api extends Component {
  state = { itens: [], loading: true };

  async componentDidMount() {
    const itens = await teamsApi.getAll();
    this.setState({ itens, loading: false });
  }
  render() {
    if (this.state.loading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
    <View>
      {
        dataMocada.map(({ title, subtitle, id }) => (
          <TouchableOpacity key={id} onPress={() => navigation.navigate('Reminder')}>
           <FlatList
              data={this.state.itens}
              keyExtractor={ (item) => item.id }
              renderItem={ ({item}) => <Item item={item}/> }
      />
          </TouchableOpacity>
        ))
      }
    </View>
  );
*/ 

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
                  <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:1}}>
                    <Text style={styles.text}>{subtitle}</Text>
                  </View>
                </View>
                <Text style={{height:8, backgroundColor: 'rgba(0,0,0, 0.0)'}}></Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
      <Button name={'botao'} onPress={() => {
              navigation.navigate('Reminder')
            }}
      />
      }/>
    </ScrollView>
      
  )
}
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
