import React from "react";
import { Text, TextProps } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components";

interface GradientTextprops extends TextProps {
  children: string
}

const GradientText = ({ children, ...props } : GradientTextprops) => {
  const { gradients } = useTheme()
  
  return (
    <MaskedView maskElement={<Text {...props}>{children}</Text>}>
      <LinearGradient
        colors={gradients.pink}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        >
        <Text {...props} style={[props.style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
