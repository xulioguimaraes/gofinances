import { AspectRatio, Box, Center, Container, Flex, Image, Pressable } from 'native-base'
import React from 'react'
interface PressableImageCardProps {
    setImageSelect: React.Dispatch<React.SetStateAction<number>>
}
export const PressableImageCard = ({ setImageSelect }: PressableImageCardProps) => {
    return (
            <Pressable
                onPress={() => setImageSelect(1)}>
                {({
                    isPressed
                }) => {
                    return <Box
                        width="full"
                        maxW="96" style={{
                            transform: [{
                                scale: isPressed ? 0.96 : 1
                            }]
                        }}>
                        <Center
                            h="40"
                            w="54%"
                            rounded="md"
                            bgColor='amber.100'
                            overflow="hidden"
                            shadow={3}/>
                            {/* <AspectRatio h="100%" overflow="hidden" w="54%" ratio={16 / 9}>
                                <Image source={{
                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                }} alt="image" />
                            </AspectRatio> */}
                        {/* </Center> */}
                    </Box>
                }}
            </Pressable>

    )
}
