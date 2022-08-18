import { Box, ScrollView, Text } from "native-base";
import allQuestion from "../../../utils/allQuestion";
interface OneRouteProps {
  id: string;
}
export const OneRoute = ({ id }: OneRouteProps) => {
  const keyM = Math.random()
  return (
    <>
      <ScrollView>
        {allQuestion.map((item) => {
          if (item.id === id) {
            return (
              <Box pt={2} px={4} key={item.id+keyM} mb={3}>
                <Box bgColor="primary.100" rounded={8} shadow={6} p={2} mb={3}>
                  <Text fontWeight="bold" textAlign="justify" fontSize="lg">
                    {item.question}
                  </Text>
                </Box>

                <Box mb={3} rounded={8} shadow={6} bgColor="amber.100" p={2}>
                  <Text pb={2} textAlign="justify" fontSize="lg">
                    {item.askA}
                  </Text>
                </Box>
                <Box rounded={8} shadow={6} bgColor="amber.100" p={2}>
                  <Text mt={2} textAlign="justify" fontSize="lg">
                    {item.askB}
                  </Text>
                </Box>
              </Box>
            );
          }
          return null;
        })}
      </ScrollView>
    </>
  );
};
