import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: flex-start;
    width: ${Dimensions.get("screen").width * 0.9}px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 3px 4px rgba(177, 177, 177, 0.25);
    border-radius: 15px;
    margin-bottom: ${RFValue(20)}px;
`;

export const InfosArea = styled.View`
    flex-direction: row;
    margin: 0 15px;
    align-items: center;
    justify-content: space-between;
`;
  
export const TextImageArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    height: ${RFValue(40)}px;
    width: ${RFValue(40)}px;
    border-radius: 20px;
`;

export const TitleRestaurante = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.bold };
    color: ${({theme}) => theme.colors.gray_dark};
    padding-top: 5px;
`;

export const Data = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.bold };
    color: ${({theme}) => theme.colors.gray_dark};
    padding-top: 5px;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_dark};
  height: 0.5px;
  width: 90%;
  align-self: center;
`;

export const OrderDetails = styled.View`
    padding: 5px;
    margin: 2px 0 0 15px;
`;
export const AtendimentoID = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.gray_dark_2};
`;

export const ReservaDetails = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.gray_dark_2};
`;

export const Evaluation = styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 ;
`;

export const EvaluationText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.gray_dark_2};
`;



export const Menu = styled.View`
    display: flex;
    color: ${({theme}) => theme.colors.primary};
    `;
    
export const MenuButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px 5px;
    border-bottom-start-radius: 20px;
    border-bottom-end-radius: 20px;
`;

export const MenuText = styled.Text`
    color: ${({theme}) => theme.colors.white};
`;