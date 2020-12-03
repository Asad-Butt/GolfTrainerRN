import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, StyleSheet, Text, ActivityIndicator } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Images from "../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

import * as firebase from "firebase";

import Firebase from "../../firebase";

const Club = (props) => {
  const Options = [
    {
      text: "Wedge",
      image: Images.One,
    },
    {
      text: "Gap Wedge",
      image: Images.Two,
    },
    {
      text: "Pitching",
      image: Images.Three,
    },
    {
      text: "9 Iron",
      image: Images.Four,
    },
    {
      text: "8 Iron",
      image: Images.Five,
    },
    {
      text: "7 Iron",
      image: Images.Six,
    },
    {
      text: "6 Iron",
      image: Images.Seven,
    },
    {
      text: "5 Iron",
      image: Images.Eight,
    },
    {
      text: "4 Iron",
      image: Images.Nine,
    },
    {
      text: "3 Iron",
      image: Images.Ten,
    },
    {
      text: "Other Iron",
      image: Images.OneOne,
    },
    {
      text: "Other Wood",
      image: Images.OneTwo,
    },
    {
      text: "Hybrid",
      image: Images.OneThree,
    },
    {
      text: "5 Wood",
      image: Images.OneFour,
    },
    {
      text: "3 Wood",
      image: Images.OneFive,
    },
    {
      text: "Driver",
      image: Images.OneSix,
    },
    {
      text: "Putter",
      image: Images.OneSeven,
    },
  ];

  const [one, setOne] = useState(false);
  const [Two, setTwo] = useState(false);
  const [Three, setThree] = useState(false);
  const [Four, setFour] = useState(false);
  const [Five, setFive] = useState(false);
  const [Six, setSix] = useState(false);
  const [Seven, setSeven] = useState(false);
  const [Eight, setEight] = useState(false);
  const [Nine, setNine] = useState(false);
  const [Ten, setTen] = useState(false);
  const [OneOne, setOneOne] = useState(false);
  const [OneTwo, setOneTwo] = useState(false);
  const [OneThree, setOneThree] = useState(false);
  const [OneFour, setOneFour] = useState(false);
  const [OneFive, setOneFive] = useState(false);
  const [OneSix, setOneSix] = useState(false);
  const [OneSeven, setOneSeven] = useState(false);

  const [status, setStatus] = useState(true);

  const Fetcher = async () => {
    Firebase.database()
      .ref("App/Category/")
      .once("value", (data) => {
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

  const Selector = (value) => {
    if (value === 0) {
      setOne(!one);
    } else if (value == 1) {
      setTwo(!Two);
    } else if (value === 2) {
      setThree(!Three);
    } else if (value === 3) {
      setFour(!Four);
    } else if (value === 4) {
      setFive(!Five);
    } else if (value === 5) {
      setSix(!Six);
    } else if (value === 6) {
      setSeven(!Seven);
    } else if (value === 7) {
      setEight(!Eight);
    } else if (value === 8) {
      setNine(!Nine);
    } else if (value === 9) {
      setTen(!Ten);
    } else if (value === 10) {
      setOneOne(!OneOne);
    } else if (value === 11) {
      setOneTwo(!OneTwo);
    } else if (value === 12) {
      setOneThree(!OneThree);
    } else if (value === 13) {
      setOneFour(!OneFour);
    } else if (value === 14) {
      setOneFive(!OneFive);
    } else if (value === 15) {
      setOneSix(!OneSix);
    } else if (value === 16) {
      setOneSeven(!OneSeven);
    }
  };

  //ScreenLocker
  // async function changeScreenOrientation() {
  //   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  // }

  // useEffect(() => {
  //   changeScreenOrientation();
  // }, []);

  const Edit = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
    setSix(false);
    setSeven(false);
    setEight(false);
    setNine(false);
    setTen(false);
    setOneOne(false);
    setOneTwo(false);
    setOneThree(false);
    setOneFour(false);
    setOneFive(false);
    setOneSix(false);
    setOneSeven(false);
  };

  const Save = async () => {
    if (
      one === false &&
      Two === false &&
      Three === false &&
      Four === false &&
      Five === false &&
      Six === false &&
      Seven === false &&
      Eight === false &&
      Nine === false &&
      Ten === false &&
      OneOne === false &&
      OneTwo === false &&
      OneThree === false &&
      OneFour === false &&
      OneFive === false &&
      OneSix === false &&
      OneSeven === false
    ) {
      alert("Please Select Atleast One Club !");
    } else {
      if (one === true) {
        Firebase.database()
          .ref("App/Category/" + "Wedge")
          .set({
            Shots: 0,
            club: "Wedge",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (Two === true) {
        Firebase.database()
          .ref("App/Category/" + "Gap Wedge")
          .set({
            Shots: 0,
            club: "Gap Wedge",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (Three === true) {
        Firebase.database()
          .ref("App/Category/" + "Pitching")
          .set({
            Shots: 0,
            club: "Pitching",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }
      if (Four === true) {
        Firebase.database()
          .ref("App/Category/" + "9 Iron")
          .set({
            Shots: 0,
            club: "9 Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (Five === true) {
        Firebase.database()
          .ref("App/Category/" + "8 Iron")
          .set({
            Shots: 0,
            club: "8 Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (Six === true) {
        Firebase.database()
          .ref("App/Category/" + "7 Iron")
          .set({
            Shots: 0,
            club: "7 Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (Seven === true) {
        Firebase.database()
          .ref("App/Category/" + "6 Iron")
          .set({
            Shots: 0,
            club: "6 Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (Eight === true) {
        Firebase.database()
          .ref("App/Category/" + "5 Iron")
          .set({
            Shots: 0,
            club: "5 Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (Nine === true) {
        Firebase.database()
          .ref("App/Category/" + "4 Iron")
          .set({
            Shots: 0,
            club: "4 Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }
      if (Ten === true) {
        Firebase.database()
          .ref("App/Category/" + "3 Iron")
          .set({
            Shots: 0,
            club: "3 Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (OneOne === true) {
        Firebase.database()
          .ref("App/Category/" + "Other Iron")
          .set({
            Shots: 0,
            club: "Other Iron",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (OneTwo === true) {
        Firebase.database()
          .ref("App/Category/" + "Other Wood")
          .set({
            Shots: 0,
            club: "Other Wood",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (OneThree === true) {
        Firebase.database()
          .ref("App/Category/" + "Hybrid")
          .set({
            Shots: 0,
            club: "Hybrid",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (OneFour === true) {
        Firebase.database()
          .ref("App/Category/" + "5 Wood")
          .set({
            Shots: 0,
            club: "5 Wood",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (OneFive === true) {
        Firebase.database()
          .ref("App/Category/" + "3 Wood")
          .set({
            Shots: 0,
            club: "3 Wood",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (OneSix === true) {
        Firebase.database()
          .ref("App/Category/" + "Driver")
          .set({
            Shots: 0,
            club: "Driver",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      if (OneSeven === true) {
        Firebase.database()
          .ref("App/Category/" + "Putter")
          .set({
            Shots: 0,
            club: "Putter",
            Distance: "",
            ShortLeft: 0,
            Left: 0,
            ShortAccurate: 0,
            Accurate: 0,
            Right: 0,
            ShortRight: 0,
          });
      }

      alert("Clubs Saved !");
      props.navigation.navigate("Menu");
    }
  };

  const Next = async () => {
    if (status === false) {
      props.navigation.navigate("GapTest");
    } else {
      alert("Please Save Your Club First");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 20, marginLeft: 60 }}>
        <Text style={{ fontWeight: "bold", color: "green", fontSize: 16 }}>
          Select the clubs you use
        </Text>
      </View>

      <View style={styles.Clubs}>
        {Options.map((value, index) => {
          let CheckBox;
          if (index === 0 && one === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 1 && Two === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 2 && Three === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 3 && Four === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 4 && Five === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 5 && Six === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 6 && Seven === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 7 && Eight === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 8 && Nine === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 9 && Ten === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 10 && OneOne === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 11 && OneTwo === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 12 && OneThree === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 13 && OneFour === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 14 && OneFive === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 15 && OneSix === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          } else if (index === 16 && OneSeven === true) {
            CheckBox = (
              <View style={{ alignSelf: "center", paddingTop: 10 }}>
                <AntDesign name="checkcircle" size={15} color="green" />
              </View>
            );
          }

          return (
            <View key={index}>
              <TouchableOpacity onPress={() => Selector(index)} style={styles.btnStyle}>
                <Image
                  source={value.image}
                  resizeMode="contain"
                  style={{ height: 55, width: 55 }}
                />
                <Text style={{ textAlign: "center", marginTop: -5 }}>{value.text}</Text>

                {CheckBox}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      {/* Edit Button */}

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => Edit()} style={styles.editBtn}>
          <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        {/* Save Btn*/}

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => Save()}
            style={[styles.editBtn, { marginHorizontal: 10 }]}
          >
            <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
            <Text style={styles.editText}>Save</Text>
          </TouchableOpacity>
          {/* Next */}
          <TouchableOpacity
            onPress={() => Next()}
            style={[styles.editBtn, { marginHorizontal: 10 }]}
          >
            <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
            <Text style={styles.editText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Club;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Clubs: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
    marginLeft: 60,
    width: "85%",
    height: "70%",
    // backgroundColor: "red",
  },
  btnStyle: {
    alignSelf: "center",
    marginLeft: 20,
    marginTop: 3.5,
    // backgroundColor: "red",
  },
  editBtn: {
    bottom: 5,
    marginLeft: 5,
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
