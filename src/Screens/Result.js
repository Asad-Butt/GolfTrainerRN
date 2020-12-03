import React, { useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Images from "../assets/images";
import Firebase from "../../firebase";

//Styles
const containerStyle = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(40),
    // backgroundColor: "white",
    marginLeft: 10,
    marginTop: 3,
    // shadowColor: "black",
    // shadowOffset: {
    //   height: 2,
    //   width: 0,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // borderRadius: 30 / 2,
  },
  header: {
    marginTop: 8,
    marginLeft: 30,
  },

  headerText: {
    color: "green",
    fontWeight: "700",
    maxWidth: "100%",
    // backgroundColor: "red",
  },
  text: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  deleteBtn: {
    bottom: 0,
    position: "absolute",
    width: widthPercentageToDP(90),
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  deleteText: {
    color: "white",
  },
  shotsBlock: {
    marginTop: 10,
    flexDirection: "row",
    width: widthPercentageToDP(90),
  },
  shotsContainer: {
    marginHorizontal: 5,
    height: 50,
    marginTop: 15,
    width: widthPercentageToDP(11),
  },
  textField: {
    textAlign: "center",
    width: "100%",
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },
  number: {
    borderWidth: 0.5,
    borderColor: "black",
    marginTop: 20,
    textAlign: "center",
  },
});

const Container = ({
  Distance,
  Left,
  Right,
  Accurate,
  ShortAccurate,
  ShortLeft,
  ShortRight,
  Club,
  keys,
  Delete,
  Shots,
}) => {
  return (
    <View key={keys} style={containerStyle.container}>
      <View style={containerStyle.header}>
        <Text numberOfLines={1} style={containerStyle.headerText}>
          {Club} Results
        </Text>
      </View>

      <View style={containerStyle.shotsBlock}>
        <View style={containerStyle.shotsContainer}>
          <Text numberOfLines={1} style={containerStyle.textField}>
            Shots Taken
          </Text>
          <Text style={containerStyle.number}>{Shots}</Text>
        </View>

        <View style={containerStyle.shotsContainer}>
          <Text numberOfLines={1} style={containerStyle.textField}>
            Accurate
          </Text>
          <Text style={containerStyle.number}>{Accurate}</Text>
        </View>
        <View style={containerStyle.shotsContainer}>
          <Text numberOfLines={1} style={containerStyle.textField}>
            Left
          </Text>
          <Text style={containerStyle.number}>{Left}</Text>
        </View>
        <View style={containerStyle.shotsContainer}>
          <Text numberOfLines={1} style={containerStyle.textField}>
            Short Left
          </Text>
          <Text style={containerStyle.number}>{ShortLeft}</Text>
        </View>

        <View style={containerStyle.shotsContainer}>
          <Text numberOfLines={1} style={containerStyle.textField}>
            Short Accurate
          </Text>
          <Text style={containerStyle.number}>{ShortAccurate}</Text>
        </View>
        <View style={containerStyle.shotsContainer}>
          <Text numberOfLines={1} style={containerStyle.textField}>
            Right
          </Text>
          <Text style={containerStyle.number}>{Right}</Text>
        </View>
        <View style={containerStyle.shotsContainer}>
          <Text numberOfLines={1} style={containerStyle.textField}>
            Short Right
          </Text>
          <Text style={containerStyle.number}>{ShortRight}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => Delete(Club)} style={containerStyle.deleteBtn}>
        <Text style={containerStyle.deleteText}>Delete Result</Text>
      </TouchableOpacity>
    </View>
  );
};

const Result = (props) => {
  const [data, setData] = useState("");

  const FetchData = async () => {
    Firebase.database()
      .ref("App/Category/")
      .on("value", (data) => {
        if (data.exists()) {
          const Copy = data.toJSON();
          const ConvertObject = Object.assign({}, Copy);
          const Values = Object.values(ConvertObject);
          setData(Values);
        }
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const Remove = async (Club) => {
    Firebase.database()
      .ref("App/Category/" + Club)
      .set({})
      .then(() => {
        alert("Your Record Removed Succesfully!");
        props.navigation.navigate("Menu");
      });
  };

  const Back = () => {
    props.navigation.navigate("Menu");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 55,
          width: widthPercentageToDP(100),
          backgroundColor: "green",
        }}
      >
        <Text style={styles.headerText}>Results</Text>
      </View>

      {/* Back */}
      <TouchableOpacity onPress={() => Back()} style={styles.editBtnOne}>
        <Image source={Images.Ball} resizeMode="contain" style={{ height: 60, width: 60 }} />
        <Text style={[styles.editText, { marginHorizontal: 15 }]}>Back</Text>
      </TouchableOpacity>

      {/* Boxes */}

      <ScrollView style={{ flex: 1, marginHorizontal: 35, marginTop: 5 }}>
        {data !== "" ? (
          data.map((value, index) => {
            return (
              <Container
                key={index}
                Club={value.club}
                Distance={value.Distance}
                Accurate={value.Accurate}
                Left={value.Left}
                Delete={Remove}
                Right={value.Right}
                Shots={value.Shots}
                ShortAccurate={value.ShortAccurate}
                ShortLeft={value.ShortLeft}
                ShortRight={value.ShortRight}
              />
            );
          })
        ) : (
          <Text
            style={{
              textAlign: "center",
              color: "red",
              marginVertical: 100,
              marginHorizontal: 300,
            }}
          >
            Sorry No Record Found...!
          </Text>
        )}
      </ScrollView>

      <View
        style={{
          right: 40,
          height: 20,
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: 4,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Scroll Down for more results</Text>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },

  editBtnOne: {
    top: -3,
    left: 30,
    position: "absolute",
    // width: "10%",
    // height: "40%",
    // backgroundColor: "red",
  },
  editText: {
    top: 20,
    position: "absolute",
    marginHorizontal: 18,
    fontSize: 12,
    width: 100,
    color: "green",
    fontWeight: "bold",
  },
});
