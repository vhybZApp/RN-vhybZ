import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { Icon, useTheme } from "react-native-paper"
import { translate } from "../i18n"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import * as Screens from "app/screens"

import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabScreenProps,
} from "react-native-paper/react-navigation"

export type AppTabParamList = {
  Studio: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppTabScreenProps<T extends keyof AppTabParamList> = CompositeScreenProps<
  MaterialBottomTabScreenProps<AppTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createMaterialBottomTabNavigator<AppTabParamList>()

/**
 * This is the main navigator for the Tankhah screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `TankhahNavigator`.
 */
export function AppTabNavigator() {
  const theme = useTheme()
  return (
    <Tab.Navigator sceneAnimationEnabled theme={theme} labeled={false} shifting>
      <Tab.Screen
        name="Studio"
        component={Screens.StudioScreen}
        options={{
          tabBarLabel: translate("tabNavigator.tankhahTab"),
          tabBarIcon: ({ color }) => <Icon source="bank-transfer" color={color} size={28} />,
        }}
      />
    </Tab.Navigator>
  )
}
