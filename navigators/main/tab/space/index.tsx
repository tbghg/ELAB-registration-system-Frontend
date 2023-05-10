import React from "react";

import type { ContentPageParam } from "@/types/common";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { TabNavigatorKey, TabNavigatorScreenProps } from "..";
import type { PopupNavigatorParamList } from "./popup";
import SpacePage from "@/pages/main/tab/space/SpacePage";
import HomePage from "@/pages/main/tab/space/HomePage";
import PopupNavigator from "./popup";
import type {
  ContentListPageParam,
  SpaceContentPageParam,
} from "@/types/space";
import ContentPage from "@/pages/main/tab/space/ContentPage";
import ListPage from "@/pages/main/tab/space/ListPage";

interface SpaceNavigatorParamList {
  SpaceHomePage: undefined;
  SpacePage: ContentPageParam;
  SpaceContentPage: SpaceContentPageParam;
  SpaceContentListPage: ContentListPageParam;
  SpacePopupNavigator: NavigatorScreenParams<PopupNavigatorParamList>;
  [key: string]:
    | undefined
    | ContentPageParam
    | ContentListPageParam
    | NavigatorScreenParams<PopupNavigatorParamList>;
}
type SpaceNavigatorKey = keyof SpaceNavigatorParamList & string;

type SpaceNavigatorScreenProps<T extends SpaceNavigatorKey> =
  CompositeScreenProps<
    NativeStackScreenProps<SpaceNavigatorParamList, T>,
    TabNavigatorScreenProps<TabNavigatorKey>
  >;

const Stack = createNativeStackNavigator<SpaceNavigatorParamList>();

const SpaceNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SpaceHomePage" component={HomePage} />
      <Stack.Screen name="SpacePage" component={SpacePage} />
      <Stack.Screen name="SpaceContentPage" component={ContentPage} />
      <Stack.Screen name="SpaceListContentPage" component={ListPage} />
      <Stack.Screen
        name="SpacePopupNavigator"
        component={PopupNavigator}
        options={() => {
          return {
            presentation: "modal",
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default SpaceNavigator;

export type {
  SpaceNavigatorParamList,
  SpaceNavigatorKey,
  SpaceNavigatorScreenProps,
};
