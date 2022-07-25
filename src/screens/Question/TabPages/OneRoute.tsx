import { Box, ScrollView, Text } from "native-base";
import allQuestion from "./allQuestion";
interface OneRouteProps {
  id: string;
}
export const OneRoute = ({ id }: OneRouteProps) => {
  return (
    <>
      <ScrollView>
        {allQuestion.map((item) => {
          if (item.id === id) {
            return (
              <Box pt={2} px={4} key={item.id}>
                <Text fontWeight="bold" textAlign="justify" fontSize="lg">
                  {item.question}
                </Text>
                <Text pb={2} textAlign="justify" fontSize="lg">
                  {item.askA}
                </Text>
                <Text mt={2} textAlign="justify" fontSize="lg">
                  {item.askB}
                </Text>
              </Box>
            );
          }
          return null;
        })}
      </ScrollView>
    </>
  );
};
