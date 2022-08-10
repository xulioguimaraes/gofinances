import React from 'react'
import { Center, ScrollView } from 'native-base'
import { CardHome } from '../../components/CardHome/CardHome'

export const Home = () => {

    return (
        <>
            <Center
                flex={1}
                mt={5}
            >
                <ScrollView>
                    <CardHome
                        page="vermes"
                        urlImage='FILARIOSE'
                        title='Conheça as verminoses' />
                    <CardHome
                        urlImage='../../assets/FILARIOSE.png'
                        page="question"
                        title='Questões problematizadora' />
                    <CardHome
                        urlImage='GLOSSARIO'
                        page="glossario"
                        title='Glossario parasitológico' />
                    <CardHome
                        page="credits"
                        urlImage='CREDITOS'
                        title='Creditos' />
                </ScrollView>
            </Center>

        </>

    )
}
