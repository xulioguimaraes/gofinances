import React from 'react'
import { Text, View } from 'react-native'
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from "./styles"
export const Dashboard = () => {
  return (
    <>
      <Container>
        <Header>
          <UserInfo>
            <Photo sorce={{uri:"https://portalpopline.com.br/wp-content/uploads/2022/05/avatar-2-thumb.pngr"}}/>
            <User>
              <UserGreeting>Ola, </UserGreeting>
              <UserName>Julio</UserName>
            </User>
          </UserInfo>

        </Header>

      </Container>
    </>
  )
}
