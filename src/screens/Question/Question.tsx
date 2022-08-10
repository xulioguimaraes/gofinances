import { Box } from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { OneRoute } from "./TabPages/OneRoute";

const renderScene = SceneMap({
  1: () => <OneRoute id="1" />,
  2: () => <OneRoute id="2" />,
  3: () => <OneRoute id="3" />,
  4: () => <OneRoute id="4" />,
  5: () => <OneRoute id="5" />,
  6: () => <OneRoute id="6" />,
  7: () => <OneRoute id="7" />,
});

export const Question = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "1", title: "1" },
    { key: "2", title: "2" },
    { key: "3", title: "3" },
    { key: "4", title: "4" },
    { key: "5", title: "5" },
    { key: "6", title: "6" },
    { key: "7", title: "7" },
  ]);

  return (
    <>
      <Box flex={1}>
        <>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            tabBarPosition={"bottom"}
            initialLayout={{ width: layout.width }}
          />
        </>
      </Box>
    </>
  );
};
