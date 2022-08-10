import { AspectRatio, Box, Center, Image } from "native-base";
import React from "react";
import { Pressable } from "react-native";
interface CardSelectProps {
  setImageSelect: React.Dispatch<React.SetStateAction<number>>;
  imageSelect: number;
  value: number;
}
export const CardSelect = ({
  imageSelect,
  setImageSelect,
  value,
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
      w={ "100%"}
    >
      <Pressable onPress={() => setImageSelect(value)}>
        <Box w="100%">
          <Image
            // w="100%"
            h="100%"
            source={image}
            alt="image"
          />
        </Box>
      </Pressable>
    </Center>
  );
};
