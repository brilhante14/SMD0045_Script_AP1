import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, AreaFlatList, StatusBarAndroid} from './styles';

import { FlatList, Platform } from 'react-native';


import { TopTab } from '../../components/TopTab';
import { CommandPlate } from '../../components/CommandPlate';
import { CardComanda } from '../../components/CardComanda';

import { pratos } from '../../utils/mocado';


export function ComandaCliente() {
    return (
        <Container>
            {
                Platform.OS === 'android' ? <StatusBarAndroid /> : <></>
            } 
            <TopTab name={""} />
            <CardComanda table={"X"} waiter={"Brauner"} amount={"100.00"}/>
            <AreaFlatList>
                <FlatList
                    keyExtractor={(item) => String(item.id)}
                    columnWrapperStyle = {{justifyContent: 'space-around'}}
                    data={pratos.todos}  
                    numColumns={3}
                    contentContainerStyle={{ paddingBottom: RFValue(280) }}
                    showsVerticalScrollIndicator = {false}
                    renderItem={({ item, index, separators })=> 
                <CommandPlate title={item.name} />
                }/>
            </AreaFlatList>
        </Container>
       
    );
}