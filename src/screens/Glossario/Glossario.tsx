import { Box, Center, FlatList, ScrollView, Text } from "native-base";
import React from "react";
import glossario from "../../utils/glossario";

export const Glossario = () => {
  return (
    <Box mt={2} flex={1}>
      <FlatList
        data={glossario}
        renderItem={({ item }) => (
          <Box py={3} mb={3} mx={2}rounded={8} shadow={6} key={item.tilte}  px={4} bgColor='amber.100'>
            <Text textAlign="justify" fontSize="lg">
              <Text fontWeight="bold">{item.tilte}: </Text>
              {item.subTitle}
            </Text>
          </Box>
        )}
      keyExtractor={item=>item.tilte}/>
    </Box>
  );
};
