import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, I18nManager, ImageBackground } from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";

I18nManager.forceRTL(false);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16
  }
});

const slides = [
  {
    image: require("./assets/appIntro1.png"),
    bgImage: require("./assets/appIntroBg1.png")
  },
  {
    image: require("./assets/appIntro2.png"),
    bgImage: require("./assets/appIntroBg2.png")
  },
  {
    image: require("./assets/appIntro3.png"),
    bgImage: require("./assets/appIntroBg3.png")
  },
  {
    image: require("./assets/appIntro4.png"),
    bgImage: require("./assets/appIntroBg4.png")
  },
  {
    image: require("./assets/appIntro5.png"),
    bgImage: require("./assets/appIntroBg5.png")
  },
  {
    image: require("./assets/appIntro6.png"),
    bgImage: require("./assets/appIntroBg6.png")
  },
  {
    image: require("./assets/appIntro7.png"),
    bgImage: require("./assets/appIntroBg7.png")
  },
  {
    image: require("./assets/appIntro8.png"),
    bgImage: require("./assets/appIntroBg8.png")
  }
];

export default class App extends React.Component {
  _renderItem = props => (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={props.bgImage}>
      <ImageBackground
        resizeMode="cover"
        style={{ ...StyleSheet.absoluteFillObject, top: 40, backgroundColor: "transparent" }}
        source={props.image}
      />
    </ImageBackground>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        dotStyle={{
          backgroundColor: "#FAFAFA"
        }}
        renderItem={this._renderItem}
        // bottomButton
        // showPrevButton={false}
        showSkipButton={false}
        // hideNextButton
        // hideDoneButton
        // onSkip={() => console.log("skipped")}
      />
    );
  }
}
