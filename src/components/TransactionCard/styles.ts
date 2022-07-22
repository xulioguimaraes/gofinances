import { Feather } from "@expo/vector-icons"
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { getStatusBarHeight } from "react-native-iphone-x-helper";
interface TransactionProps {
    type: 'positive' | "negative"
}
export const Container = styled.View`
    background-color:  ${({ theme }) => theme.colors.shape};
   border-radius: 7px;
   padding: 17px 24px;
    margin-bottom: 16px;
`
export const Title = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

`
export const Amount = styled.Text<TransactionProps>`
    font-family:  ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color:  ${({ theme, type }) => type === "positive" ? theme.colors.success : theme.colors.attention};

  margin-top:2px;
`

export const Date = styled.Text`
    color:  ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`
export const CategoryName = styled.Text`
    color:  ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
    margin-left: 17px;
`
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;

`
export const Icon = styled(Feather)`
    color:  ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;
  
`
