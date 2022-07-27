import { Box, Button, Center, Heading, Image, Modal, Text } from "native-base";
import { useRef } from "react";
interface ModalQuestionProps {
  modalVisible: boolean;
  onRequestClose: () => void;
  askRight: boolean
}
export const ModalQuestion = ({
  modalVisible,
  onRequestClose,
  askRight,
}: ModalQuestionProps) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
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
          <Modal.Header>Resposta correta</Modal.Header>
        ) : (
          <Modal.Header>Ops. Resposta Errada</Modal.Header>
        )}
        {askRight ? (
          <Modal.Body>
            <Heading>Parabens</Heading>
            <Text>Explicação sobre a resposta</Text>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <Box flex={1}>
              <Heading>A Imagem correta é: </Heading>
              <Center h="40" overflow="hidden" rounded="md" shadow={3}>
                <Image
                  h="100%"
                  source={require("../../../assets/TENIASE.jpg")}
                  alt="image"
                />
              </Center>
              <Text>Explicação sobre a resposta</Text>
            </Box>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
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
