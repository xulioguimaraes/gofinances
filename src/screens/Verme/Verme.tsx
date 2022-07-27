import { useNavigation } from "@react-navigation/native";
import {
  ArrowBackIcon,
  AspectRatio,
  Box,
  Button,
  Center,
  ChevronRightIcon,
  Container,
  FlatList,
  Flex,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  Pressable,
  ScrollView,
  Stack,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { CardSelect } from "../../components/CardSelect/CardSelect";
import { HeaderBar } from "../../components/HeaderBar/HeaderBar";
import { ModalQuestion } from "../../components/ModalQuestion/ModalQuestion";
import { PressableAnimation } from "../../components/PressableAnimation/PressableAnimation";
import { SessionQuestion } from "../../components/SessionQuestion/SessionQuestion";
import { allVermes } from "../../utils/vermes";
export interface ISessionText{
  title: string;
  text: string;
  image: string;
  text2: string;
  subText: {
      title: string;
      text: string;
      image: string;
  }[];
}
export interface IVerme {
  name: string;
  id: number;
  question: string;
  content: ISessionText[];
}
interface RoutesProps {
  params: {
    vermeId: number;
  };
}
interface VermeProps {
  route: RoutesProps;
  navigation: {
    goBack: () => void;
  };
}
export const Verme = ({ route }: VermeProps) => {
  const { params } = route;
  const { navigate, goBack } = useNavigation();
  const [askRight, setAskRight] = useState(false);

  const [verme, setVerme] = useState<IVerme>({} as IVerme);
  const [contentInfo, setContentInfo] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    let aux = {};
    const aux2 = allVermes.filter((item) => {
      if (item.id === params.vermeId) {
        setVerme(item);
      }
    });
  }, [params]);
  const onRequestClose = () => {
    setModalVisible(false);
    setAskRight(false);
    setContentInfo(true);
  };
  const handleTitle = (item: ISessionText) => {
    navigate("session", item);
  };
  return (
    <>
      <HeaderBar title={verme.name} />
      {!contentInfo && (
        <>
          <SessionQuestion
            verme={verme}
            setAskRight={setAskRight}
            setModalVisible={setModalVisible}
          />
        </>
      )}
      <ModalQuestion
        askRight={askRight}
        modalVisible={modalVisible}
        onRequestClose={onRequestClose}
      />
      {contentInfo && (
        <>
          <Box
            w="100%"
            mt={8}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FlatList
              data={verme.content}
              renderItem={({ item }) => {
                return (
                  <>
                    <PressableAnimation onPress={()=>handleTitle(item)}>
                      <Box
                        px={5}
                        py={4}
                        shadow={6}
                        key={item.title}
                        mb={4}
                        justifyContent="space-between"
                        flexDirection={"row"}
                        alignItems="center"
                        bgColor="violet.300"
                        rounded={8}
                      >
                        <Heading fontSize="lg" textTransform="capitalize">
                          {item.title}
                        </Heading>
                        <ChevronRightIcon />
                      </Box>
                    </PressableAnimation>
                  </>
                );
              }}
            />
          </Box>
        </>
      )}
    </>
  );
};
