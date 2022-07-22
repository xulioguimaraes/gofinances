import { ArrowBackIcon, AspectRatio, Box, Button, Center, Container, Flex, FormControl, Heading, HStack, IconButton, Image, Input, Modal, Pressable, ScrollView, Stack, StatusBar, Text, VStack } from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { CardSelect } from '../../components/CardSelect/CardSelect'
import { allVermes } from '../../utils/vermes'

interface RoutesProps {
    params: {
        vermeId: number
    }
}
interface VermeProps {
    route: RoutesProps
    navigation: {
        goBack: () => void
    }
}
export const Verme = ({ route, navigation }: VermeProps) => {
    const { params } = route
    const [imageSelect, setImageSelect] = useState(0)
    const [askRight, setAskRight] = useState(false)
    const [contentInfo, setContentInfo] = useState(false)
    const [valueImageRight, setValueImageRight] = useState(2)
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const onRequestClose = () => {
        setModalVisible(false)
        setAskRight(false)
        setContentInfo(true)
    }

    const handleSelectImage = () => {
        if (valueImageRight === imageSelect) {
            setAskRight(true)
        }
        setModalVisible(true)
    }
    return (<>
        <HStack
            space={1}
            p={2}
            alignItems='center'
            background="#FFF">
            <IconButton
                onPress={navigation.goBack}
                icon={<ArrowBackIcon />} />
            <Heading fontSize="2xl">{allVermes[0].name}</Heading>
        </HStack>
        {!contentInfo && <>
            <ScrollView
                px={2}
                mt="6">
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
                        <Button
                            ref={finalRef}
                            isDisabled={imageSelect === 0}
                            width="full"
                            onPress={handleSelectImage}
                            bgColor="success.500"
                        >Confirmar</Button>
                    </Stack>
                </Box>
            </ScrollView>
        </>}
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
                    <Modal.Body >
                       <Box flex={1}>
                       <Heading>A Imagem correta é: </Heading>
                        <Center
                            h="40"
                            overflow="hidden"
                            rounded="md"
                            shadow={3}
                        >
                            <Image h="100%" source={require("../../../assets/TENIASE.jpg")} alt="image" />
                        </Center>
                        <Text>
                            Explicação sobre a resposta
                        </Text>
                       </Box>
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
        {contentInfo && <>
            <ScrollView flex={1} p={6} >
                {allVermes[0].content.map(item => {
                    return <Box key={item.title}>
                        <Heading pt={2} fontSize="lg">{item.title}</Heading>
                        <Text textAlign="justify" fontSize="md">{item.text}</Text>
                        <Center h="300" my={2}>
                            <Image
                                alt='image'
                                pb={1}
                                h="100%"
                                source={require("../../../assets/vermes/GLOSSARIO.jpg")} />
                        </Center>
                    </Box>
                })}
            </ScrollView>

        </>}
    </>
    )
}
