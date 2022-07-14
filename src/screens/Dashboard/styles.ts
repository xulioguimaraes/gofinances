import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled.View`
    width: 100%;
    height:${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const UserInfo = styled.View`

`
export const Photo = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
`
export const User = styled.View`

`
export const UserGreeting = styled.Text`

`
export const UserName = styled.Text`

`