import { AspectRatio, Box, Button, Center, Flex, FormControl, Heading, HStack, Image, Input, Modal, Pressable, ScrollView, Stack, Text, VStack } from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import { CardSelect } from '../../components/CardSelect/CardSelect'

interface RoutesProps {
    params: {
        vermeId: number
    }
}
interface VermeProps {
    route: RoutesProps
}
export const Verme = ({ route }: VermeProps) => {
    const { params } = route
    const [imageSelect, setImageSelect] = useState(0)
    const [askRight, setAskRight] = useState(false)
    const [valueImageRight, setValueImageRight] = useState(2)
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const onRequestClose = () => {
        setModalVisible(false)
        setAskRight(false)
    }

    const allVermes = [
        {
            name: "ANCILOSTOMÍASE OU AMARELÃO ",
            id: 11,
            question: "Você Sabia que esta verminose é também conhecida como amarelão ou opilação pois causa uma intensa perda de sangue e a pessoa fica anêmica? ",
            content: [
                {
                    title: "PARASITA",
                    text: "Esta infecção é causada pelos vermes Ancylostoma duodenale e Necator americanus.",
                    image: "",
                },
                {
                    title: "Adultos",
                    text: "Os machos de N. Americanus medem de 5 a 9 mm de comprimento e na região posterior tem bolsa copuladora e dois espículos. As fêmeas medem 9 a 11 mm de comprimento e tem extremidade anterior afilada. Os machos de A. duodenale medem de 8 a 11 mm de comprimento, tem bolsa copuladora e dois espículos longos. As fêmeas tem de 10 a 18 mm de comprimento e cauda afilada. N. americanus tem lâminas cortantes na boca e A. duodenale tem dentes. ",
                    image: "",
                },
                {
                    title: "Ovos",
                    text: "São liberados nas fezes do hospedeiro. somente visíveis ao microscópio ",
                    image: "",
                },
                {
                    title: "Larvas",
                    text: "Do tipo rabidtóide. ",
                    image: "",
                }
            ]
        }, {
            name: "ASCARIDÍASE OU INFECÇÃO POR LOMBRIGA"
        }, {
            name: "ENTEROBÍASE"
        }, {
            name: "ESQUISTOSSOMOSE MANSONI"
        }, {
            name: "FILARIOSE LINFÁTICA"
        }, {
            name: "TENÍASE"
        }, {
            name: "TRICURÍASE OU INFECÇÃO POR VERME-CHICOTE"
        }
    ]
    const handleSelectImage = () => {
        if (valueImageRight === imageSelect) {
            setAskRight(true)
        }
        setModalVisible(true)
    }
    return (<>
        <ScrollView
            px={2}
            mt="6">
            <Center>
                <Text fontSize="xl" fontWeight="bold">{allVermes[0].name}</Text>
            </Center>
            <Box
                py={4}
                mt={2}
                px={6}
                shadow={3}
                rounded={8}
                bgColor='white'>
                <Text fontWeight="normal" textAlign='justify'>{allVermes[0].question}</Text>
            </Box>
            <Heading
                py={4}
                fontSize="md"
                textAlign='center'
                background="violet.200"
            >Responda a pergunta abaixo para continuar</Heading>
            <Box
                p={4}
                mb={2}
                rounded={8}
                backgroundColor="blueGray.300">
                <Text>Qual a forma de transmição da {allVermes[0].name}?</Text>
                <Stack
                    justifyContent="center"
                    mt={4}
                    space={2}>
                    <HStack justifyContent="center" space={2}>

                        <CardSelect
                            imageSelect={imageSelect}
                            value={1}
                            setImageSelect={setImageSelect} />
                        <CardSelect imageSelect={imageSelect}
                            value={2}
                            setImageSelect={setImageSelect} />
                    </HStack>
                    <HStack justifyContent="center" space={2}>
                        <CardSelect imageSelect={imageSelect}
                            value={3}
                            setImageSelect={setImageSelect} />
                        <CardSelect imageSelect={imageSelect}
                            value={4}
                            setImageSelect={setImageSelect} />
                    </HStack>
                    <Button ref={finalRef} width="full" onPress={handleSelectImage} bgColor="success.500">Confirmar</Button>
                </Stack>
            </Box>
        </ScrollView>
        <Modal
            isOpen={modalVisible}
            onClose={onRequestClose}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}>
            <Modal.Content>
                <Modal.CloseButton />
                {askRight ?
                    <Modal.Header>
                        Resposta correta
                    </Modal.Header> :
                    <Modal.Header>
                        Ops. Resposta Errada
                    </Modal.Header>}
                {askRight ? <Modal.Body>
                    <Heading>Parabens</Heading>
                    <Text>
                        Explicação sobre a resposta
                    </Text>
                </Modal.Body> :
                    <Modal.Body>
                        <Heading>A Imagem correta é: </Heading>
                        <Center
                            h="40"
                            w="90%"
                            overflow="hidden"
                            rounded="md"
                            shadow={3}
                        >
                            <AspectRatio h="100%" ratio={16 / 9}>
                                <Image w="90%" h="100%" source={require("../../assets/TENIASE.jpg")} alt="image" />
                            </AspectRatio>
                        </Center>
                        <Text>
                            Explicação sobre a resposta
                        </Text>
                    </Modal.Body>}
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={onRequestClose}>
                            Ir para explicação
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>

    </>
    )
}
