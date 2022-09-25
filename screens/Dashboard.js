import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";
import { theme } from "../core/theme";
import Button from "../components/Button";

const Dashboard = ({ onSearch }) => {
  return (
    <ImageBackground
      source={require("../assets/background_dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View
          style={{
            backgroundColor: "#001F2D",
            padding: 14,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
              style={{ width: 90, height: 25 }}
            />

            <View style={{ width: 45, height: 45 }}>
              <Image
                source={require("../assets/chef.png")}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
              <Image
                source={require("../assets/icons/badge.png")}
                resizeMode="contain"
                style={{
                  position: "absolute",
                  width: 15,
                  height: 15,
                  bottom: 0,
                  right: 0,
                }}
              />
            </View>
          </View>

          <View style={{ marginTop: 14 }}>
            <View
              style={{
                width: "100%",
                borderRadius: 14,
                backgroundColor: "#74858C",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 14,
                paddingVertical: 12 - 2,
              }}
            >
              <Image
                source={require("../assets/icons/search.png")}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <TextInput
                placeholder="Search foods"
                style={{ flex: 1 }}
                onChangeText={onSearch}
              />
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: "#f78da7",
              margin: 15,
              height: 175,
              borderRadius: 25,
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  fontSize: 21,
                  fontWeight: "bold",
                }}
              >
                The Fastest In
              </Text>

              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 21,
                  fontWeight: "bold",
                }}
              >
                Delivery <Text style={{ color: "#ea4c89" }}>Food</Text>
              </Text>

              <View style={{ width: "50%" }}>
                <Button mode="contained" onPress={() => console.log("hello")}>
                  Order Now
                </Button>
              </View>
            </View>

            <Image
              source={require("../assets/bike1.png")}
              style={styles.image}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 21,
              fontWeight: "800",
              padding: 14,
            }}
          >
            Categories
          </Text>

          <View sty>
            <Image
              source={require("../assets/icons/search.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: 8, borderRadius: 45 }}
            />

            <Text>Burger</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
// https://dribbble.com/shots/15432999-Food-Delivery-App/attachments/7201906?mode=media
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
  image: {
    width: "50%",
    height: 150,
    position: "absolute",
    right: 0,
    marginTop: 10,
  },
});

export default Dashboard;
