import {
  Box,
  Button,
  Heading,
  HStack,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import { useRef, useState } from "react";
import { IVerme } from "../../screens/Verme/Verme";
import { CardSelect } from "../CardSelect/CardSelect";
interface SessionQuestionProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAskRight: React.Dispatch<React.SetStateAction<boolean>>;
  verme: IVerme
}
export const SessionQuestion = ({ setModalVisible, setAskRight, verme }: SessionQuestionProps) => {
  const [valueImageRight, setValueImageRight] = useState(2);

  const [imageSelect, setImageSelect] = useState(0);
  const handleSelectImage = () => {
    if (valueImageRight === imageSelect) {
      setAskRight(true);
    }
    setModalVisible(true);
  };
  const finalRef = useRef(null);
  return (
    <ScrollView px={2} mt="6">
      <Box py={4} px={6} shadow={3} rounded={8} bgColor="white">
        <Text fontWeight="normal" textAlign="justify">
          {verme.question}
        </Text>
      </Box>
      <Heading py={4} fontSize="md" textAlign="center" background="violet.200">
        Responda a pergunta abaixo para continuar
      </Heading>
      <Box p={4} mb={2} rounded={8} backgroundColor="blueGray.300">
        <Text>Qual a forma de transmição da {verme.name}?</Text>
        <Stack justifyContent="center" mt={4} space={2}>
          <HStack justifyContent="center" space={2}>
            <CardSelect
              imageSelect={imageSelect}
              value={1}
              setImageSelect={setImageSelect}
            />
            <CardSelect
              imageSelect={imageSelect}
              value={2}
              setImageSelect={setImageSelect}
            />
          </HStack>
          <HStack justifyContent="center" space={2}>
            <CardSelect
              imageSelect={imageSelect}
              value={3}
              setImageSelect={setImageSelect}
            />
            <CardSelect
              imageSelect={imageSelect}
              value={4}
              setImageSelect={setImageSelect}
            />
          </HStack>
          <Button
            ref={finalRef}
            isDisabled={imageSelect === 0}
            width="full"
            onPress={handleSelectImage}
            bgColor="success.500"
          >
            Confirmar
          </Button>
        </Stack>
      </Box>
    </ScrollView>
  );
};
