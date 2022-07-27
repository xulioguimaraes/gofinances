import { Box, FlatList, Heading, Text } from "native-base";
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
      <Box flex={1}>
        <Text>{params.text}</Text>
        {params.text2 !== "" && <Text>{params.text2}</Text>}
        <FlatList
          data={params.subText}
          renderItem={({ item }) => {
            return (
              <>
                <Heading>{item.title}</Heading>
                <Text>{item.text}</Text>
              </>
            );
          }}
          keyExtractor={(item) => item.title}
        />
      </Box>
    </>
  );
};
