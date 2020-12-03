import React from "react";
import { SafeAreaView, TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";

import Images from "../assets/images";

import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";

const Intro = (props) => {
  const Next = () => {
    props.navigation.navigate("Menu");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ width: widthPercentageToDP(24), marginTop: 20, marginLeft: 30 }}>
          <Image source={Images.Logo} resizeMode="contain" style={{ height: 130, width: 130 }} />
        </View>
        <View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleText}>Welcome to Golf Trainer</Text>
          </View>

          <Text style={styles.headerText}>
            To get this best from this app we suggest a few warm up exercises, these can be simple
            stretches but get the body warm and remove any tension in your arms and grip,Swing your
            favourite club a few times to get a nice slow rythm.
          </Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 20 }}>
        <Text style={[styles.headerText, { maxWidth: "100%" }]}>
          How many times have you seen a person turn up to driving range, buy 100 balls and warm em
          out there, this app slows that down and gives you a purpose for your practising, you have
          to stop in between shots and record your shot, after each shot practise your address at
          the ball, get a mental process of how to check your grip,stance and ball position.
        </Text>

        <Text style={[styles.headerText, { maxWidth: "100%", marginTop: 20 }]}>
          Hit a couple of half shots with say a seven iron so you start to get into a rythm,once you
          feel you are ready and have gap tested your clubs start the accuracy testing.
        </Text>
      </View>

      {/* NeXt */}
      <TouchableOpacity onPress={() => Next()} style={[styles.editBtn, { marginHorizontal: 10 }]}>
        <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
        <Text style={styles.editText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(40),
    flexDirection: "row",
    //backgroundColor:'red'
  },
  headerTitleContainer: {
    marginLeft: 100,
    // backgroundColor: "red",
    marginTop: 25,
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: "500",
  },
  headerText: {
    maxWidth: "84%",
    marginTop: 23,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  editBtn: {
    bottom: 2,
    right: 10,
    position: "absolute",
    // width: "10%",
    // height: "40%",
    // backgroundColor: "red",
  },
  editText: {
    bottom: 23,
    position: "absolute",
    marginHorizontal: 16,
    fontSize: 12,
    width: 100,
    color: "green",
    fontWeight: "bold",
  },
});
