import { AspectRatio, Box, Center, FlatList, Heading, HStack, Image, SectionList, Spacer, Stack, Text, VStack } from 'native-base'
import React from 'react'
import { CardVermes } from '../../components/CardVermes/CardVermes'


export const Vermes = () => {

  const data = [
    {
      title: "ANCILOSTOMÍASE OU AMARELÃO ",
      image: "ANCILOSTOMÍASE"
    }, {
      title: "ASCARIDÍASE OU INFECÇÃO POR LOMBRIGA",
      image: "ASCARIDÍASE"
    }, {
      title: "ENTEROBÍASE",
      image: "ENTEROBÍASE"
    }, {
      title: "ESQUISTOSSOMOSE MANSONI",
      image: "ESQUISTOSSOMOSE"
    }, {
      title: "FILARIOSE LINFÁTICA",
      image: "FILARIOSE"
    }, {
      title: "TENÍASE",
      image: "TENIASE"
    }, {
      title: "TRICURÍASE OU INFECÇÃO POR VERME-CHICOTE",
      image: "TRICURÍASE"
    }
  ]

  return (

    <>
      <Box mt="5">
        <FlatList data={data} renderItem={({
          item
        }) => <CardVermes
            nameImage={item.image}
            title={item.title.toUpperCase()} />}
          keyExtractor={item => item.title} />
      </Box>
    </>
  )
}
