import { AspectRatio, Box, Center, Heading, Image, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
interface CardSelectProps {
  setImageSelect: React.Dispatch<React.SetStateAction<number>>;
  imageSelect: number;
  textImage: string
  value: number;
}
export const CardSelect = ({
  imageSelect,
  setImageSelect,
  value,
  textImage,
}: CardSelectProps) => {
  const image =
    value === 1
      ? require("../../../assets/questions/CARAMUJO.jpg")
      : value === 2
      ? require("../../../assets/questions/MOSQUITO.jpg")
      : value === 3
      ? require("../../../assets/questions/DESCALÇO.jpg")
      : value === 4
      ? require("../../../assets/questions/VIAORAL.jpg")
      : require("../../../assets/questions/PORCOEBOI.jpg");
  return (
    <Center
      h="40"
      overflow="hidden"
      rounded="md"
      borderColor={imageSelect === value ? "success.500" : "success.500"}
      borderWidth={imageSelect === value ? "6" : 0}
      shadow={3}
      w={"100%"}
    >
      <Pressable onPress={() => setImageSelect(value)}>
        <Box color="gray.700" w="100%">
          <Image
            // w="100%"
            h="100%"
            source={image}
            alt="image"
          />
        </Box>
      </Pressable>
      <Box bg={{
        linearGradient: {
          colors:[ "gray.500", "transparent"],
          start: [0, 1],
      end: [0.1, 0],
      location:[20, 80]
        }
      }} left={0} pl={2} pr={3} pt={2} bottom={0} position={"absolute"}>
        <Heading color={"text.900"} textTransform={"capitalize"}>{textImage}</Heading>
      </Box>
    </Center>
  );
};
// background: rgb(0,0,0);
// background: linear-gradient(54deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
