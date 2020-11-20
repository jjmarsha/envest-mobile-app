import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

interface ITabBarIcons {
  name: string;
  focused: boolean;
}

export default function TabBarIcon(props: ITabBarIcons): JSX.Element {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
