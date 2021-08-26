import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    height: 140px;
    width: 110px;
    border-radius: 10px;
    margin-horizontal: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.gray_light};
    flex: 1;
`;

export const RestauranteImage = styled.Image`
    height: 100px;
    width: 100px;
`;

export const RestauranteNameContainer = styled.View`
    background-color: ${({theme}) => theme.colors.primary}
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-bottom-start-radius: 10px;
    border-bottom-end-radius: 10px;
`;
    
    
export const RestauranteName = styled.Text`
padding-horizontal: 1px;
    flex-shrink: 1;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.white}
`;