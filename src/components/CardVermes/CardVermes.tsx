import { useNavigation } from '@react-navigation/native'
import { AspectRatio, Box, Heading, HStack, Image, Stack, Text } from 'native-base'
import React from 'react'
import { PressableAnimation } from '../PressableAnimation/PressableAnimation'
interface CardVermesProps {
    nameImage: string
    title: string
    idVerme: number
}
export const CardVermes = ({ nameImage, title, idVerme }: CardVermesProps) => {
    const image = nameImage === "ANCILOSTOMÍASE" ?
        require("../../../assets/vermes/ANCILOSTOMÍASE.jpg") :
        nameImage === "ASCARIDÍASE" ?
            require("../../../assets/vermes/ASCARIDÍASE.jpg") :
            nameImage === "ENTEROBÍASE" ?
                require("../../../assets/vermes/ENTEROBÍASE.png") :
                nameImage === "ESQUISTOSSOMOSE" ?
                    require("../../../assets/vermes/ESQUISTOSSOMOSE.png") :
                    nameImage === "FILARIOSE" ?
                        require("../../../assets/vermes/FILARIOSE.png") :
                        nameImage === "TENIASE" ?
                            require("../../../assets/vermes/TENIASE.jpg") : require("../../../assets/vermes/TRICURÍASE.png")
    const navigation = useNavigation()
    const handleOpenVerme = () => {
        navigation.navigate("verme", { vermeId: idVerme })
    }
    return (
        <PressableAnimation onPress={handleOpenVerme}>
            <Box _dark={{
                borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="4" py="2">
                <HStack justifyContent="center">
                    <Box alignItems="center">
                        <Box maxW="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                            <Box>
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image w="100%" h="100%" source={image} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading textTransform="capitalize" size="sm" ml="-1">
                                        {title}
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "text.600"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                       Breve resumo ou definição
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </HStack>
            </Box>
        </PressableAnimation>
    )
}
