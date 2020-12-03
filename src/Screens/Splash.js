import React, { useEffect } from "react";
import { View, Image } from "react-native";
import Images from "../assets/images";

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Intro");
    }, 1500);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems }}>
      <Image source={Images.Logo} resizeMode="contain" style={{ height: 150, width: 150 }} />
    </View>
  );
};

export default Splash;
