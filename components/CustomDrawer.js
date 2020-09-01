import React from 'react';
import {View, Text} from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from '../src/auth';
import { Button } from 'react-native-paper';

function CustomDrawer({...props}){
    const [, { logout }] = useAuth();
    
    return(
        <View>
            <DrawerItemList {...props}/>
            <Button title="Sair" onPress={ logout } /> 
        </View>
    );
}

export default CustomDrawer;