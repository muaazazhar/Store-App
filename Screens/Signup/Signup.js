import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AuthHeader from "../../Components/AuthHeader/AuthHeader";
import Body from "../../Components/Body/Body";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignUp = ({ navigation }) => {
  const [showPass, setShowPass] = useState(true);
  const [eyeIcon, setEyeIcon] = useState("eye-outline");

  const handlePassFieldChange = () => {
    setShowPass((prev) => !prev);
    setEyeIcon((prev) =>
      prev === "eye-off-outline" ? "eye-outline" : "eye-off-outline"
    );
  };
  return (
    <View style={styles.container}>
      <AuthHeader text={"Register Here"} icon={"account-plus"} />
      <Body flex={2}>
        <KeyboardAvoidingView style={{ marginVertical: 30 }}>
          <ScrollView>
            <View style={styles.InputWrapper}>
              <Icon name="account" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>First Name: </Text>
              <TextInput
                style={styles.InputField}
                placeholder="First name"
                maxLength={30}
              />
            </View>
            <View style={styles.InputWrapper}>
              <Icon name="account" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Last Name: </Text>
              <TextInput
                style={styles.InputField}
                placeholder="Last name"
                maxLength={30}
              />
            </View>
            <View style={styles.InputWrapper}>
              <Icon name="email" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Email: </Text>
              <TextInput
                style={styles.InputField}
                placeholder="Email address"
                maxLength={80}
              />
            </View>
            <View style={styles.InputWrapper}>
              <Icon name="lock" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Password (min 8): </Text>
              <TextInput
                style={{ ...styles.InputField, width: "48%" }}
                secureTextEntry={showPass}
                placeholder="Password"
                maxLength={50}
              />
              <TouchableOpacity onPress={handlePassFieldChange}>
                <Icon name={eyeIcon} style={styles.inputIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.InputWrapper}>
              <Icon name="lock" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Confirm Password: </Text>
              <TextInput
                style={{ ...styles.InputField, width: "46%" }}
                secureTextEntry={showPass}
                placeholder="Confirm Password"
                maxLength={50}
              />
              <TouchableOpacity onPress={handlePassFieldChange}>
                <Icon name={eyeIcon} style={styles.inputIcon} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate("Main")}
            >
              <Text style={styles.loginBtnText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.registerText}>
              <Text>Already have an account ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.registerTouchableText}>Login Here</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Body>
    </View>
  );
};

export default SignUp;
