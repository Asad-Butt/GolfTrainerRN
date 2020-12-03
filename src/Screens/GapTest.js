import React, { useEffect, useState } from "react";

import { SafeAreaView, Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Images from "../assets/images";
import { Picker } from "@react-native-picker/picker";
import Firebase from "../../firebase";

const GapTest = (props) => {
  const [Clubs, setClubs] = useState("7 Iron");

  const [Yards, setYards] = useState("160 yards");

  const [fetClubs, setFetchClubs] = useState("");

  const Next = async () => {
    await Firebase.database()
      .ref("App/Category/" + Clubs)
      .update({
        Distance: Yards,
        club: Clubs,
        Left: 0,
        Right: 0,
        ShortRight: 0,
        ShortLeft: 0,
        ShortAccurate: 0,
        Shots: 0,
      })
      .then(() => {
        alert(`You have Saved ${Yards} against ${Clubs} Club!`);
        props.navigation.navigate("Accuracy");
      });
  };

  async function fetchClubs() {
    await Firebase.database()
      .ref("App/Category/")
      .once("value", (Data) => {
        if (Data.exists()) {
          const CopyData = Data.toJSON();

          const ObjectConverter = Object.assign({}, CopyData);

          const Keys = Object.keys(ObjectConverter);

          setFetchClubs(Keys);
          setClubs(Keys[1]);
        }
      });
  }

  useEffect(() => {
    fetchClubs();
  }, []);

  //Save
  const Save = async () => {
    Firebase.database()
      .ref("App/Category/" + Clubs)
      .update({
        Distance: Yards,
        club: Clubs,
        Left: 0,
        Shots: 0,
        Right: 0,
        ShortRight: 0,
        ShortLeft: 0,
        ShortAccurate: 0,
      })
      .then(() => {
        alert(`You have Saved ${Yards} against ${Clubs} Club!`);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 20, marginLeft: 30 }}>
        <Text style={{ fontWeight: "600", color: "green", fontSize: 20 }}>
          Gap Test or How far do you hit each club!
        </Text>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 20 }}>
        <Text style={styles.headerText}>
          How far do you hit each club - Go to your nearest driving range and find out how far do
          you hit club, take an average of 10 balls per club,ignore any bad shots, and work out the
          distance that you can hit comfortably.
        </Text>
      </View>

      <View style={styles.centerPicker}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={Clubs}
            style={{
              marginTop: 0,
              alignSelf: "center",

              height: 40,
              width: 140,
            }}
            onValueChange={(itemValue, itemIndex) => setClubs(itemValue)}
          >
            {fetClubs !== ""
              ? fetClubs.map((value, index) => {
                  return <Picker.Item key={index} label={value} value={value} />;
                })
              : null}
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={Yards}
            style={{ alignSelf: "center", height: 40, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setYards(itemValue)}
          >
            <Picker.Item label="50 yards" value="50 yards" />
            <Picker.Item label="55 yards" value="55 yards" />
            <Picker.Item label="60 yards" value="60 yards" />
            <Picker.Item label="65 yards" value="65 yards" />
            <Picker.Item label="70 yards" value="70 yards" />
            <Picker.Item label="75 yards" value="75 yards" />
            <Picker.Item label="80 yards" value="80 yards" />
            <Picker.Item label="85 yards" value="85 yards" />
            <Picker.Item label="90 yards" value="90 yards" />
            <Picker.Item label="95 yards" value="95 yards" />
            <Picker.Item label="100 yards" value="100 yards" />
            <Picker.Item label="105 yards " value="105 yards" />
            <Picker.Item label="110 yards" value="110 yards" />
            <Picker.Item label="115 yards" value="115 yards" />
            <Picker.Item label="120 yards" value="120 yards" />
            <Picker.Item label="125 yards" value="125 yards" />
            <Picker.Item label="130 yards" value="130 yards" />
            <Picker.Item label="135 yards" value="135 yards" />
            <Picker.Item label="140 yards" value="140 yards" />
            <Picker.Item label="145 yards" value="145 yards" />
            <Picker.Item label="150 yards" value="150 yards" />
            <Picker.Item label="155 yards" value="155 yards" />
            <Picker.Item label="160 yards" value="160 yards" />
            <Picker.Item label="165 yards" value="165 yards" />
            <Picker.Item label="170 yards" value="170 yards" />
            <Picker.Item label="175 yards" value="175 yards" />
            <Picker.Item label="180 yards" value="180 yards" />
            <Picker.Item label="185 yards" value="185 yards" />
            <Picker.Item label="190 yards" value="190 yards" />
            <Picker.Item label="195 yards" value="195 yards" />
            <Picker.Item label="200 yards" value="200 yards" />
            <Picker.Item label="205 yards" value="205 yards" />
            <Picker.Item label="210 yards" value="210 yards" />
            <Picker.Item label="215 yards" value="215 yards" />
            <Picker.Item label="220 yards" value="220 yards" />
            <Picker.Item label="225 yards" value="225 yards" />
            <Picker.Item label="230 yards" value="230 yards" />
            <Picker.Item label="235 yards" value="235 yards" />
            <Picker.Item label="240 yards" value="240 yards" />
            <Picker.Item label="245 yards" value="245 yards" />
            <Picker.Item label="250 yards" value="250 yards" />
          </Picker>
        </View>
      </View>

      <View style={{ alignSelf: "center", bottom: 0 }}>
        <Text style={[styles.headerText, { maxWidth: "75%", marginTop: 10 }]}>
          Select the club you have gap test and select the average yardage then click save button -
          use this for just one or all of your clubs.
        </Text>
      </View>

      {/* Save */}
      <TouchableOpacity onPress={() => Save()} style={[styles.editBtn]}>
        <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
        <Text style={styles.editText}>Save</Text>
      </TouchableOpacity>

      {/* Next / Go */}
      <TouchableOpacity onPress={() => Next()} style={styles.editBtnTwo}>
        <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
        <Text style={[styles.editText, { marginHorizontal: 23 }]}>Go</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GapTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    maxWidth: "100%",
    lineHeight: 17,
    letterSpacing: 0.1,
    fontSize: 13,
    fontWeight: "500",
  },
  centerPicker: {
    flexDirection: "row",
    alignSelf: "center",
    width: "45%",
    marginTop: 15,
    height: heightPercentageToDP("50%"),
    //backgroundColor: "pink",
  },
  pickerContainer: {
    width: "50%",
    borderWidth: 0.25,
    borderColor: "rgba(0,0,0,0.3)",
    // backgroundColor: "pink",
  },
  editBtn: {
    bottom: 2,
    left: 15,
    position: "absolute",
    // width: "10%",
    // height: "40%",
    // backgroundColor: "red",
  },
  editBtnTwo: {
    bottom: 2,
    right: 15,
    position: "absolute",
    // width: "10%",
    // height: "40%",
    // backgroundColor: "red",
  },
  editText: {
    bottom: 25,
    position: "absolute",
    marginHorizontal: 16,
    fontSize: 12,
    width: 100,
    color: "green",
    fontWeight: "bold",
  },
});
