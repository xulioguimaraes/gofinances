import { Box, Center, Heading, ScrollView, Text } from "native-base";
import React from "react";

import textCredits from "../../utils/credits";

export const Credits = () => {
  return (
    <ScrollView>
      {textCredits.map((item) => {
        return (
          <Box px={3} key={item.title} pb={2} pt={1}>
            <Heading>{item.title}</Heading>
            {item.text !== "" && (
              <Text fontSize={"lg"} textAlign="justify">
                {item.text}
              </Text>
            )}
            {item.subText.map((ev) => {
              return (
                <Text fontSize={"lg"} key={ev}>
                  {ev}
                </Text>
              );
            })}
          </Box>
        );
      })}
    </ScrollView>
  );
};
