import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PersonalInformation from '../components/forms/PersonalInformation';
import Contact from '../components/forms/Contact';
import Adress from '../components/forms/Adress';
import AdressLab from '../components/forms/AdressLab';
import MydataScreen from '../src/screens/MydataScreen';

const Forms = createStackNavigator();

export default function FormsNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Forms.Navigator>
                <Forms.Screen name="Meus Dados" component={MydataScreen} />
                <Forms.Screen name="Dados Pessoais" component={PersonalInformation} />
                <Forms.Screen name="Contato" component={Contact} />
                <Forms.Screen name="Endereco" component={Adress} />
                <Forms.Screen name="Endereco do Laboratorio" component={AdressLab} />
            </Forms.Navigator>
        </NavigationContainer>
    );
}