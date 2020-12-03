import React, { useEffect, useState } from "react";

import { SafeAreaView, TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import Images from "../assets/images";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Picker } from "@react-native-picker/picker";
import Firebase from "../../firebase";

const Accuracy = (props) => {
  const [Red, setRed] = useState(false);
  const [One, setOne] = useState(false);
  const [Two, setTwo] = useState(false);
  const [Three, setThree] = useState(false);
  const [Four, setFour] = useState(false);
  const [Five, setFive] = useState(false);
  const [Clubs, setClubs] = useState("7 Iron");

  const [fetClubs, setFetchClubs] = useState("");

  const [Shots, setShots] = useState(0);

  const [ShotAccurate, setShotAccurate] = useState(0);

  const [ShotLeft, setShotLeft] = useState(0);

  const [ShotShortLeft, setShortLeft] = useState(0);

  const [ShotShortAccurate, setShotShortAccurate] = useState(0);

  const [ShotRight, setShotRight] = useState(0);

  const [ShotShortRight, setShotShortRight] = useState(0);

  //fetchClubs
  async function fetchClubs() {
    Firebase.database()
      .ref("App/Category/")
      .on("value", (Data) => {
        if (Data.exists()) {
          const CopyData = Data.toJSON();

          const ObjectConverter = Object.assign({}, CopyData);

          const Keys = Object.keys(ObjectConverter);

          setFetchClubs(Keys);
        }
      });

    //it'll First fetch the Shots from the Category;
    Firebase.database()
      .ref("App/Category/" + Clubs)
      .on("value", (data) => {
        if (data.exists()) {
          const getShots = data.toJSON();

          const { Shots, Accurate, Left, Right, ShortAccurate, ShortLeft, ShortRight } = getShots;
          if (Shots >= 10) {
            setShots(10);
            setShotAccurate(Accurate);
            setShotLeft(Left);
            setShotRight(Right);
            setShotShortAccurate(ShortAccurate);
            setShortLeft(ShortLeft);
            setShotShortRight(ShortRight);
            alert("You have already hit maximum of 10 balls for this club ");
          } else {
            setShots(Shots);

            setShotAccurate(Accurate);

            setShotLeft(Left);

            setShotRight(Right);

            setShotShortAccurate(ShortAccurate);

            setShortLeft(ShortLeft);

            setShotShortRight(ShortRight);
          }
        }
      });
  }

  useEffect(() => {
    fetchClubs();
  }, [Clubs]);

  const Next = () => {
    props.navigation.navigate("Result");
  };

  const Back = () => {
    props.navigation.navigate("Menu");
  };

  const Save = async () => {
    if (
      One === false &&
      Red === false &&
      Two === false &&
      Three === false &&
      Four === false &&
      Five === false
    ) {
      alert("Please Select Atleast One Direction!");
    } else {
      if (Shots === 10) {
        alert("You have Already Played your 10 shots against this club!");
      } else {
        if (Red === true) {
          alert("Please hit maximum of 10 Balls");
          Firebase.database()
            .ref("App/Category/" + Clubs)
            .update({
              club: Clubs,
              Shots: Shots + 1,
              Accurate: parseInt(ShotAccurate) + 1,
              Left: ShotLeft,
              Right: ShotRight,
              ShortAccurate: ShotShortAccurate,
              ShortLeft: ShotShortLeft,
              ShortRight: ShotShortRight,
            })
            .then(() => {
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(false);
              setFive(false);
              setRed(false);
              alert("You have Saved Your Direction against Club " + Clubs);
            });
        }

        //Left:

        if (One === true) {
          alert("Please hit maximum of 10 Balls");
          Firebase.database()
            .ref("App/Category/" + Clubs)
            .update({
              club: Clubs,
              Shots: Shots + 1,
              Accurate: ShotAccurate,
              Left: parseInt(ShotLeft) + 1,
              Right: ShotRight,
              ShortAccurate: ShotShortAccurate,
              ShortLeft: ShotShortLeft,
              ShortRight: ShotShortRight,
            })
            .then(() => {
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(false);
              setFive(false);
              setRed(false);
              alert("You have Saved Your Direction against Club " + Clubs);
            });
        }

        //Right:

        if (Two === true) {
          alert("Please hit maximum of 10 Balls");
          Firebase.database()
            .ref("App/Category/" + Clubs)
            .update({
              club: Clubs,
              Shots: Shots + 1,
              Accurate: ShotAccurate,
              Left: ShotLeft,
              Right: parseInt(ShotRight) + 1,
              ShortAccurate: ShotShortAccurate,
              ShortLeft: ShotShortLeft,
              ShortRight: ShotShortRight,
            })
            .then(() => {
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(false);
              setFive(false);
              setRed(false);
              alert("You have Saved Your Direction against Club " + Clubs);
            });
        }

        //ShortAccurate:

        if (Three === true) {
          alert("Please hit maximum of 10 Balls");
          Firebase.database()
            .ref("App/Category/" + Clubs)
            .update({
              club: Clubs,
              Shots: Shots + 1,
              Accurate: ShotAccurate,
              Left: ShotLeft,
              Right: ShotRight,
              ShortAccurate: parseInt(ShotShortAccurate) + 1,
              ShortLeft: ShotShortLeft,
              ShortRight: ShotShortRight,
            })
            .then(() => {
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(false);
              setFive(false);
              setRed(false);
              alert("You have Saved Your Direction against Club " + Clubs);
            });
        }

        //ShortLeft

        if (Four === true) {
          alert("Please hit maximum of 10 Balls");
          Firebase.database()
            .ref("App/Category/" + Clubs)
            .update({
              club: Clubs,
              Shots: Shots + 1,
              Accurate: ShotAccurate,
              Left: ShotLeft,
              Right: ShotRight,
              ShortAccurate: ShotShortAccurate,
              ShortLeft: parseInt(ShotShortLeft) + 1,
              ShortRight: ShotShortRight,
            })
            .then(() => {
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(false);
              setFive(false);
              setRed(false);
              alert("You have Saved Your Direction against Club " + Clubs);
            });
        }

        //ShortRight

        if (Five === true) {
          alert("Please hit maximum of 10 Balls");
          Firebase.database()
            .ref("App/Category/" + Clubs)
            .update({
              club: Clubs,
              Shots: Shots + 1,
              Accurate: ShotAccurate,
              Left: ShotLeft,
              Right: ShotRight,
              ShortAccurate: ShotShortAccurate,
              ShortLeft: ShotShortLeft,
              ShortRight: parseInt(ShotShortRight) + 1,
            })
            .then(() => {
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(false);
              setFive(false);
              setRed(false);
              alert("You have Saved Your Direction against Club " + Clubs);
            });
        } //else block
      }
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginLeft: 30,
          marginRight: widthPercentageToDP(22),
        }}
      >
        <Text style={{ fontWeight: "600", color: "green", fontSize: 20 }}>Accuracy Testing</Text>

        <Text style={{ fontWeight: "600", color: "black", fontSize: 16 }}>Direction Mat</Text>
      </View>

      <View style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}>
        <Text style={styles.headerText}>
          Select Club from the list below and aim at any target that matches the distance of that
          club, for example 8 Iron 130 yards, hit a ball and click on the direction mat where the
          ball landed closest to the hole. Save between each shot to build a record of accuracy,
          When you want to see your results click on the next button.
        </Text>

        <View style={styles.matContainer}>
          <Image
            source={Images.Pitch}
            resizeMode="cover"
            style={{ width: widthPercentageToDP(40), height: heightPercentageToDP(82) }}
          />

          {/* Red Dot */}
          <TouchableOpacity
            onPress={() => setRed(!Red)}
            style={[
              styles.holeRed,
              {
                borderWidth: Red === true ? 1 : 0,
                borderColor: Red === true ? "red" : "transparent",
                borderRadius: Red === true ? 20 : 0,
              },
            ]}
          >
            <Image source={Images.Red} resizeMode="contain" style={{ width: 60, height: 30 }} />
          </TouchableOpacity>

          {/*Left*/}
          <TouchableOpacity
            onPress={() => setOne(!One)}
            style={[
              styles.holeContainer,
              {
                borderWidth: One === true ? 1 : 0,
                borderColor: One === true ? "white" : "transparent",
                borderRadius: One === true ? 20 : 0,
              },
            ]}
          >
            <Image source={Images.Hole} resizeMode="contain" style={{ width: 40, height: 40 }} />
          </TouchableOpacity>

          {/**Right */}

          <TouchableOpacity
            onPress={() => setTwo(!Two)}
            style={[
              styles.holeContainerTwo,
              {
                borderWidth: Two === true ? 1 : 0,
                borderColor: Two === true ? "white" : "transparent",
                borderRadius: Two === true ? 20 : 0,
              },
            ]}
          >
            <Image source={Images.Hole} resizeMode="contain" style={{ width: 40, height: 40 }} />
          </TouchableOpacity>

          {/* Center */}

          <TouchableOpacity
            onPress={() => setThree(!Three)}
            style={[
              styles.holeContainerThree,
              {
                borderWidth: Three === true ? 1 : 0,
                borderColor: Three === true ? "white" : "transparent",
                borderRadius: Three === true ? 20 : 0,
              },
            ]}
          >
            <Image source={Images.Hole} resizeMode="contain" style={{ width: 40, height: 40 }} />
          </TouchableOpacity>

          {/*Left Low*/}

          <TouchableOpacity
            onPress={() => setFour(!Four)}
            style={[
              styles.holeContainerFour,
              {
                borderWidth: Four === true ? 1 : 0,
                borderColor: Four === true ? "white" : "transparent",
                borderRadius: Four === true ? 20 : 0,
              },
            ]}
          >
            <Image source={Images.Hole} resizeMode="contain" style={{ width: 40, height: 40 }} />
          </TouchableOpacity>

          {/*Right Low*/}

          <TouchableOpacity
            onPress={() => setFive(!Five)}
            style={[
              styles.holeContainerFive,
              {
                borderWidth: Five === true ? 1 : 0,
                borderColor: Five === true ? "white" : "transparent",
                borderRadius: Five === true ? 20 : 0,
              },
            ]}
          >
            <Image source={Images.Hole} resizeMode="contain" style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Picker */}

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

      {/* Back */}
      <TouchableOpacity onPress={() => Back()} style={styles.editBtnOne}>
        <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
        <Text style={[styles.editText, { marginHorizontal: 15 }]}>Back</Text>
      </TouchableOpacity>

      {/*  Save */}
      <TouchableOpacity onPress={() => Save()} style={styles.editBtnOneTwo}>
        <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
        <Text style={[styles.editText, { marginHorizontal: 15 }]}>Save</Text>
      </TouchableOpacity>

      {/* Next / Go */}
      <TouchableOpacity onPress={() => Next()} style={styles.editBtnTwo}>
        <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
        <Text style={[styles.editText, { marginHorizontal: 15 }]}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Accuracy;

const styles = StyleSheet.create({
  headerText: {
    maxWidth: "48%",
    lineHeight: 19,
    letterSpacing: 0.4,
    fontSize: 15,
    fontWeight: "500",
  },
  matContainer: {
    height: "80%",
    //backgroundColor: "pink",
    width: "40%",
  },

  holeRed: {
    top: heightPercentageToDP(1),
    left: widthPercentageToDP(16.2),
    position: "absolute",
  },

  holeContainer: {
    top: heightPercentageToDP(9),
    left: widthPercentageToDP(9.7),
    position: "absolute",
  },
  holeContainerTwo: {
    top: heightPercentageToDP(8.8),
    right: widthPercentageToDP(4.2),
    position: "absolute",
  },
  holeContainerThree: {
    top: heightPercentageToDP(16.8),
    right: widthPercentageToDP(11),
    position: "absolute",
  },
  holeContainerFour: {
    top: heightPercentageToDP(23.3),
    left: widthPercentageToDP(7),
    position: "absolute",
  },
  holeContainerFive: {
    top: heightPercentageToDP(24),
    right: widthPercentageToDP(1.4),
    position: "absolute",
  },
  editBtnOne: {
    bottom: 10,
    left: 20,
    position: "absolute",
    // width: "10%",
    // height: "40%",
    // backgroundColor: "red",
  },
  editBtnOneTwo: {
    bottom: 10,
    left: 100,
    position: "absolute",
    // width: "10%",
    // height: "40%",
    // backgroundColor: "red",
  },
  editBtnTwo: {
    bottom: 10,
    right: 10,
    position: "absolute",
    // width: "10%",
    // height: "40%",
    // backgroundColor: "red",
  },
  editText: {
    bottom: 25,
    position: "absolute",
    marginHorizontal: 18,
    fontSize: 12,
    width: 100,
    color: "green",
    fontWeight: "bold",
  },
  pickerContainer: {
    // backgroundColor: "red",
    top: "40%",
    left: "26%",
    position: "absolute",
    // backgroundColor: "red",
    width: 130,
    height: 100,
  },
});
