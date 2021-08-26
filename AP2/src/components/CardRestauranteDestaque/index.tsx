import React from 'react';
import { Container, RestauranteImage, RestauranteName, RestauranteNameContainer } from './style';

import iconRestaurante from '../../assets/template_restaurant.png'

interface Props {
    name: string;
    image?: any;
}

export function CardRestauranteDestaque({name, image}: Props){
    return(
        <Container>
            <RestauranteImage source={image ?? iconRestaurante} />

            <RestauranteNameContainer>
                <RestauranteName>{name}</RestauranteName>
            </RestauranteNameContainer>
        </Container>
    );
}