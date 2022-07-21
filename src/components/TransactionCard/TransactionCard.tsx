import React from 'react'
import { Amount, Category, CategoryName, Container, Date, Footer, Icon, Title } from './styles'
interface Category {
    name: string
    icon: string
}
interface TransactionCardProps {
    data: {
        type: 'positive' | "negative"
        title: string
        amount: string
        category: Category
        date: string
    }
}
export default function TransactionCard({ data }: TransactionCardProps) {
    const { amount, category, title, date, type } = data
    return (
        <>
            <Container>
                <Title>{title}</Title>
                <Amount type={type}>
                    {type === "negative" && "- "}
                    {amount}
                </Amount>
                <Footer>
                    <Category>
                        <Icon name={category.icon} />
                        <CategoryName>{category.name}</CategoryName>
                    </Category>
                    <Date>{date}</Date>
                </Footer>
            </Container>
        </>
    )
}
