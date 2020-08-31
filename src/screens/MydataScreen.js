import React from 'react';
import { View, Text } from 'react-native';
import { Container, Tab, Tabs, TabHeading, Icon, Footer } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

import PersonalInformation from '../../components/forms/PersonalInformation';
import Contact from '../../components/forms/Contact';
import Adress from '../../components/forms/Adress';
import AdressLab from '../../components/forms/AdressLab';
import styles from '../../constants/Styles';

export default function MydataScreen({navigation}) {
    return(
        <Container>
      <View style={styles.header}>
        <Icon
          name='menu'
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <Tabs initialPage={0} >
        <Tab heading={<TabHeading><Icon name="md-person" /></TabHeading>}>
          <PersonalInformation />
        </Tab>
        <Tab heading={<TabHeading><Icon name="md-business" /></TabHeading>}>
          <Adress />
        </Tab>
        <Tab heading={<TabHeading><Icon name="md-call" /></TabHeading>}>
          <Contact />
        </Tab>
        <Tab heading={<TabHeading><Icon name="md-flask" /></TabHeading>}>
          <AdressLab/>
        </Tab>
      </Tabs>
      <Footer style={{backgroundColor: '#00bcd4', alignItems: 'center', alignContent: 'center', padding: 5}}>
        <View style={[styles.dataMargin, {marginLeft: 14}]}>
          <TouchableOpacity >
            <View style={[styles.StyledButton, {height: 30}]}>
                <Text style={{color: '#fff', fontSize: 20}}>Atualizar</Text>
            </View>
          </TouchableOpacity>
        </View>        
      </Footer>
    </Container>

    );
}