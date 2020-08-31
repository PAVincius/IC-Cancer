import React from 'react';
import {View, Text} from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';

function CustomDrawer({...props}){
    return(
        <View>
            <DrawerItemList {...props}/>
        </View>
    );
}

export default CustomDrawer;