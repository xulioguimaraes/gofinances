import { useNavigation } from "@react-navigation/native";
import { ArrowBackIcon, Heading, HStack, IconButton } from "native-base";

interface HeaderBarProps {
  title: string;
}
export const HeaderBar = ({ title }: HeaderBarProps) => {
  const { goBack } = useNavigation();

  return (
    <>
      <HStack space={1} p={2} alignItems="center" background="#FFF">
        <IconButton onPress={goBack} icon={<ArrowBackIcon />} />
        <Heading textTransform="capitalize" fontSize="2xl">
          {title}
        </Heading>
      </HStack>
    </>
  );
};
