import { Feather } from "@expo/vector-icons"
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
export const Container = styled.View`
    flex: 1;
    /* align-items: center; */
    padding: 0 8px;
    background-color: ${({ theme }) => theme.colors.background};
    
`
export const ContainerTitle = styled.View`
    margin-top:  ${RFValue(30)}px;
    
`
export const Content = styled.View`
    margin-top:  ${RFValue(30)}px;
    
`
export const Question = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
`
export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
   font-family: ${({theme})=>theme.fonts.bold};
`
export const Ask = styled.Text`
    
`