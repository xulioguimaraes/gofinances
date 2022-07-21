import React from 'react'
import { Text, View } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import HighLightCard from '../../components/HighLightCard/HighLightCard'
import TransactionCard from '../../components/TransactionCard/TransactionCard'
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList
} from "./styles"
export const Dashboard = () => {
  const data = [{
    amount: 'R$ 1.000,00',
    type: "positive",
    category: {
      name: 'Vendas',
      icon: "dollar-sign"
    },
    title: 'Desenvolvimento',
    date: "12/02/2021",
  }, {
    amount: 'R$ 100,00',
    type: "negative",
    category: {
      name: 'Alimentação',
      icon: "coffee"
    },
    title: 'Pizza',
    date: "12/02/2021",
  }, {
    amount: 'R$ 1.000,00',
    type: "positive",
    category: {
      name: 'Casa',
      icon: "dollar-sign"
    },
    title: 'Desenvolvimento',
    date: "12/02/2021",
  }]
  return (
    <>
      <Container>
        <Header>
          <UserWrapper>

            <UserInfo>
              <Photo source={{ uri: "https://portalpopline.com.br/wp-content/uploads/2022/05/avatar-2-thumb.png" }} />
              <User>
                <UserGreeting>Ola, </UserGreeting>
                <UserName>taiane</UserName>
              </User>
            </UserInfo>
            <Icon name='power' />
          </UserWrapper>
        </Header>
        <HighLightCards
          contentContainerStyle={{ paddingHorizontal: 24 }}
          horizontal>
          <HighLightCard
            type='up'
            amount='R$ 34.480,76'
            lastTransation='Ultima entrada dia 13 de abril'
            title='Entrada' />
          <HighLightCard
            type='down'
            amount='R$ 1.400,00'
            lastTransation='Ultima entrada dia 13 de abril'
            title='Saida' />
          <HighLightCard
            type='total'
            amount='R$ 17.400,00'
            lastTransation='01 à 13 de abril'
            title='Total' />
        </HighLightCards>
        <Transactions>
          <Title>pix</Title>
          <TransactionList
            data={data}
            renderItem={({ item }) => <TransactionCard data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: getBottomSpace()
            }}
          />
        </Transactions>
      </Container>
    </>
  )
}
