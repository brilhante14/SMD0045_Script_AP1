import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 115px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HomeContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${RFValue(35)}px;
  margin-left: ${RFValue(15)}px;
`;
export const Image = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;
