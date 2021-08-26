import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';

import { CardRestaurante } from '../../components/CardRestaurante';
import { CardRestauranteDestaque } from '../../components/CardRestauranteDestaque';
import { TopTab } from '../../components/TopBar';

import { restaurantes } from './mocado';
import { Container, DestaqueText, HeaderView, ListText, ListView, Separator, StatusBarAndroid} from './styles';
import theme from '../../global/styles/theme';


export function ListaDeRestaurantesClient() {
    const navigation = useNavigation(); 
    const [search, setSearch] = useState<string>('');

    function handleSearchUpdate(searching: string) {
        const formatText = searching.toLowerCase();
        setSearch(formatText);
    }

    const getHeader = () => {
        return (
            <HeaderView>
                    <Searchbar 
                        value={search} 
                        placeholder="Pesquisar restaurante" 
                        onChangeText={ query => handleSearchUpdate(query) }    
                        inputStyle={{fontFamily: theme.fonts.regular}}
                        style={{backgroundColor: theme.colors.gray_light, borderRadius: 12, margin: 20}}
                    />
                    <DestaqueText>Restaurantes em Destaque</DestaqueText>
                    <FlatList 
                        data={restaurantes.destaques}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{paddingHorizontal: 20}}
                        renderItem={({item}) => 
                        <CardRestauranteDestaque
                            key={`${item.id.toString()}`}
                            name={item.name}
                        />
                    }
                    />

                    <ListText>Lista de Restaurantes</ListText>
                    <Separator />
                </HeaderView>

        );
    }
    return (
        <> 
            <StatusBarAndroid />
            <TopTab />
            <Container> 
                <ListView>
                    <FlatList 
                        data={restaurantes.todos} 
                        ItemSeparatorComponent={Separator}
                        ListHeaderComponent={getHeader}
                        showsVerticalScrollIndicator={false} 
                        keyExtractor={(item) => String(item.id)}
                        contentContainerStyle={{paddingBottom: 50}}
                        renderItem={({item})=> 
                            <CardRestaurante 
                                key={`${item.id.toString()}`} 
                                title={item.name} 
                                descricao={item.descricao} 
                                endereco={item.endereco} 
                                disabled={true}
                            />
                        }                   
                    />
                </ListView>
                
            </Container>
       
        </>
    );
}