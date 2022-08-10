import { Box, Button, Center, Heading, Image, Modal, Text } from "native-base";
import { useRef } from "react";
interface ModalQuestionProps {
  modalVisible: boolean;
  onRequestClose: () => void;
  askRight: boolean;
  valueImage: number;
}
export const ModalQuestion = ({
  modalVisible,
  onRequestClose,
  askRight,
  valueImage,
}: ModalQuestionProps) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const image =
    valueImage === 1
      ? require("../../../assets/questions/CARAMUJO.jpg")
      : valueImage === 2
      ? require("../../../assets/questions/MOSQUITO.jpg")
      : valueImage === 3
      ? require("../../../assets/questions/DESCALÇO.jpg")
      : valueImage === 4
      ? require("../../../assets/questions/VIAORAL.jpg")
      : require("../../../assets/questions/PORCOEBOI.jpg");
  return (
    <Modal
      isOpen={modalVisible}
      onClose={onRequestClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
    >
      <Modal.Content>
        <Modal.CloseButton />
        {askRight ? (
          <Modal.Header><Text fontSize="lg" color={"success.600"} fontWeight={"bold"}>
            Resposta correta</Text></Modal.Header>
        ) : (
          <Modal.Header>
            <Text fontSize="lg" color={"red.600"} fontWeight={"bold"}>
              Ops. Resposta Errada
            </Text>
          </Modal.Header>
        )}
        {askRight ? (
          <Modal.Body>
            <Heading>Parabens, você acetou</Heading>
            <Text>Aperte em "Ir para explicação" para vê, mais informações"</Text>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <Box flex={1}>
              <Heading mb={3}>A Imagem correta é: </Heading>
              <Center h="40" overflow="hidden" rounded="md" shadow={3}>
                <Image h="100%" source={image} alt="image" />
              </Center>
            </Box>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="outline"
              colorScheme="blueGray"
              onPress={onRequestClose}
            >
              Ir para explicação
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
