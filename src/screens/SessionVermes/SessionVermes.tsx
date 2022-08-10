import {
  Box,
  Center,
  FlatList,
  Heading,
  Image,
  ScrollView,
  Text,
} from "native-base";
import { HeaderBar } from "../../components/HeaderBar/HeaderBar";
import { ISessionText } from "../Verme/Verme";
interface RoutesProps {
  params: ISessionText;
}
interface SessionVermesProps {
  route: RoutesProps;
}
export const SessionVermes = ({ route }: SessionVermesProps) => {
  const { params } = route;
  return (
    <>
      <HeaderBar title={params.title} />
      <ScrollView flex={1}>
        <Box
          mx={4}
          my={3}
          shadow={6}
          rounded={8}
          background="darkBlue.100"
          px={4}
          py={3}
        >
          <Text fontSize={"md"} textAlign={"justify"}>
            {params.text}
          </Text>
          {params.text2 !== "" && (
            <Text fontSize={"md"} textAlign={"justify"}>
              {params.text2}
            </Text>
          )}
          {params.image !== "" && (
            <Center overflow={"hidden"} w={"100%"} shadow={8} py={4}>
              <Image
                w={"100%"}
                h={80}
                borderRadius={20}
                source={{ uri: params.image }}
                alt={params.title}
              />
            </Center>
          )}
          {params.image2 !== "" && (
            <Center overflow={"hidden"} w={"100%"} shadow={8} pb={4}>
              <Image
                w={"100%"}
                h={80}
                borderRadius={20}
                source={{ uri: params.image2 }}
                alt={params.title}
              />
            </Center>
          )}
        </Box>

        {params.subText.map((item) => {
          return (
            <Box key={item.title}>
              <Heading mx={4} pb={2}>
                {item.title}
              </Heading>
              <Box
                my={3}
                mx={4}
                shadow={6}
                rounded={8}
                background="amber.100"
                px={4}
                py={3}
              >
                <Text textAlign={"justify"} fontSize={"md"}>
                  {item.text}
                </Text>
                {item.image !== "" && (
                  <Center w={"100%"} shadow={6} pt={3}>
                    <Image
                      w={"100%"}
                      h={80}
                      borderRadius={20}
                      source={{ uri: item.image }}
                      alt={item.title}
                    />
                  </Center>
                )}
                {item.image2 !== "" && (
                  <Center w={"100%"} shadow={6} pt={3}>
                    <Image
                      w={"100%"}
                      h={80}
                      borderRadius={20}
                      source={{ uri: item.image2 }}
                      alt={item.title}
                    />
                  </Center>
                )}
              </Box>
            </Box>
          );
        })}
      </ScrollView>
    </>
  );
};
// uri: "https://thumbs2.imgbox.com/f6/18/9Tr2cwNz_t.jpg",


