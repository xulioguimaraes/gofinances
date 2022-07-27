import {
  AspectRatio,
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Image,
  SectionList,
  Spacer,
  Stack,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { CardVermes } from "../../components/CardVermes/CardVermes";
import nomeVermes from "../../utils/nomeVermes";

export const Vermes = () => {
  return (
    <>
      <Center mt="2">
        <FlatList
          data={nomeVermes}
          renderItem={({ item }) => (
            <CardVermes
              idVerme={item.id}
              nameImage={item.image}
              title={item.title.toUpperCase()}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </Center>
    </>
  );
};
