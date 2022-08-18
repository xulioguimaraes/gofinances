import {
  Box,
  Center,
  FlatList,
  Heading,
  Image,
  ScrollView,
  Text,
} from "native-base";
import { useEffect, useState } from "react";
import { HeaderBar } from "../../components/HeaderBar/HeaderBar";
import { ISessionText } from "../Verme/Verme";
interface RoutesProps {
  params: ISessionText;
}
interface SessionVermesProps {
  route: RoutesProps;
}
const italicNames = [
  {
    name: "Ancilostomíase ou amarelão",
    id: 11,
    terms1: "Ancylostoma",
    terms2: "duodenale",
    terms3: "Necator",
    terms4: "americanus",
  },
  {
    name: "Ascaridíase",
    id: 22,
    terms1: "Ascaris",
    terms2: "lumbricoides",
    terms3: "",
    terms4: "",
  },
  {
    name: "Enterobíase",
    id: 33,
    terms1: "Enterobius",
    terms2: "vermicularis",
    terms3: "",
    terms4: "",
  },
  {
    name: "Esquistossomose ",
    id: 44,
    terms1: "Schistosoma",
    terms2: "mansoni",
    terms3: "Biomphalaria",
    terms4: "",
  },
  {
    name: "Filariose linfática",
    id: 55,
    terms1: "Wuchereria",
    terms2: "bancrofti",
    terms3: "Culex",
    terms4: "",
  },
  {
    name: "Teníase",
    id: 66,
    terms1: "Taenia",
    terms2: "solium",
    terms3: "Taenia",
    terms4: "saginata",
  },
  {
    name: "Tricuríase",
    id: 77,
    terms1: "Trichiura",
    terms2: "trichiurus",
    terms3: "",
    terms4: "",
  },
];

export const SessionVermes = ({ route }: SessionVermesProps) => {
  const { params } = route;

  const [textOne, setTextOne] = useState<string[]>([]);
  const arrayStringText = (text: string) => {
    if (text !== "") {
      const aux = text.split(" ");
      let str = "";
      const italics = italicNames.filter((it) => it.id === params.id);
      aux.forEach((item) => {
        let count = 0;
        italics.forEach((ev) => {
          if (
            ev.terms1.toLowerCase() ===
            item.replace(/[^a-z0-9]/gi, "").toLowerCase()
          ) {
            str = str + "_" + item + "_" + " ";
            count = 1;
            return;
          }
          if (
            ev.terms2.toLowerCase() ===
            item.replace(/[^a-z0-9]/gi, "").toLowerCase()
          ) {
            str = str + "_" + item + "_" + " ";
            count = 1;
            return;
          }
          if (
            ev.terms3.toLowerCase() ===
            item.replace(/[^a-z0-9]/gi, "").toLowerCase()
          ) {
            str = str + "_" + item + "_" + " ";
            count = 1;
            return;
          }
          if (
            ev.terms4.toLowerCase() ===
            item.replace(/[^a-z0-9]/gi, "").toLowerCase()
          ) {
            str = str + "_" + item + "_" + " ";
            count = 1;
            return;
          }
        });
        if (count === 0) {
          str = str + item + " ";
        }
      });
      const newArray = str.split(" ");
      return (
        <Text key={newArray[0]} fontSize={"md"} textAlign={"justify"}>
          {newArray.map((txt, index) => {
            if (txt.substring(0, 1) === "_") {
              return (
                <Text key={txt+index} fontStyle={"italic"}>
                  {txt.substring(1, txt.length - 1)}{" "}
                </Text>
              );
            }
            return txt + " ";
          })}
        </Text>
      );
    }
  };

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
          {arrayStringText(params.text)}
          {params.text2 !== "" && arrayStringText(params.text2)}
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
                {arrayStringText(item.text)}
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
