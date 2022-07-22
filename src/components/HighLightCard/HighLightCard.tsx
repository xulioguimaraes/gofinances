import React from 'react'
import { Amount, Container, Footer, Header, Icon, LastTransaction, Title } from './styles'
interface HighLightCardProps {
  title: string
  amount: string
  lastTransation: string
  type: "up" | "down" | "total"
}
const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign"
}
export default function HighLightCard({ title, amount, lastTransation, type }: HighLightCardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title
          type={type}
        >{title}</Title>
        <Icon
          name={icon[type]}
          type={type}
        />
      </Header>
      <Footer>
        <Amount
          type={type}
        >{amount}</Amount>
        <LastTransaction
          type={type}
        >{lastTransation}</LastTransaction>
      </Footer>
    </Container>
  )
}
