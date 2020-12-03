import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import Firebase from "../../firebase";

import Images from "../assets/images";

const Menu = (props) => {
  const [status, setStatus] = useState(true);

  const Fetcher = async () => {
    Firebase.database()
      .ref("App/Category/")
      .on("value", (data) => {
        if (data.exists()) {
          setStatus(false);
        } else {
          setStatus(true);
        }
      });
  };

  useEffect(() => {
    Fetcher();
  });

  const SelectClub = () => {
    props.navigation.navigate("Club");
  };

  const SelectGap = () => {
    if (status === true) {
      alert("Please Select Your Club and then Select Gap Test.!");
    } else {
      props.navigation.navigate("GapTest");
    }
  };

  const SelectAD = () => {
    if (status === true) {
      alert("Please First Select Your Club and Gap Test  then Accuracy.!");
    } else {
      props.navigation.navigate("Accuracy");
    }
  };

  const SelectResults = () => {
    props.navigation.navigate("Result");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.block, { alignItems: "center", justifyContent: "center" }]}>
        <Image source={Images.Logo} resizeMode="contain" style={{ height: "85%", width: "100%" }} />
      </View>

      <View style={styles.block}>
        {/*Menu */}
        <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", color: "green", fontSize: 20 }}>Menu</Text>
        </View>

        {/*Select Club */}

        <TouchableOpacity
          onPress={() => SelectClub()}
          style={{ flexDirection: "row", marginLeft: 30, marginTop: 15 }}
        >
          <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />

          <Text style={{ marginLeft: 12, marginTop: 18, color: "green", fontWeight: "bold" }}>
            Select the clubs you use
          </Text>
        </TouchableOpacity>

        {/*Gap Test */}
        <TouchableOpacity
          onPress={() => SelectGap()}
          style={{ flexDirection: "row", marginLeft: 80, marginTop: 10 }}
        >
          <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />

          <Text style={{ marginLeft: 12, marginTop: 18, color: "green", fontWeight: "bold" }}>
            Gap test your clubs
          </Text>
        </TouchableOpacity>

        {/*3rd */}
        <TouchableOpacity
          onPress={() => SelectAD()}
          style={{ flexDirection: "row", marginLeft: 130, marginTop: 10 }}
        >
          <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />

          <Text style={{ marginLeft: 12, marginTop: 18, color: "green", fontWeight: "bold" }}>
            Accuracy Drill
          </Text>
        </TouchableOpacity>

        {/*4th */}
        <TouchableOpacity
          onPress={() => SelectResults()}
          style={{ flexDirection: "row", marginLeft: 180, marginTop: 10 }}
        >
          <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />

          <Text style={{ marginLeft: 12, marginTop: 18, color: "green", fontWeight: "bold" }}>
            Results
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  block: {
    // backgroundColor: "red",
    width: "50%",
    height: "100%",
  },
});
