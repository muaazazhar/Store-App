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

const Login = ({navigation}) => {
  const [showPass, setShowPass] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye-outline');

  const handlePassFieldChange = () => {
    setShowPass((prev) => !prev)
    setEyeIcon((prev)=> prev === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline')
  }

  return (
    <View style={styles.container}>
      <AuthHeader text={"Login"} icon={"login"} />
      <Body flex={1}>
        <KeyboardAvoidingView style={{marginVertical: 30}}>
          <ScrollView>
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
              <Text style={styles.inputLabel}>Password: </Text>
              <TextInput
                style={styles.InputField}
                secureTextEntry={showPass}
                placeholder="Password"
                maxLength={50}
              />
              <TouchableOpacity onPress={handlePassFieldChange}>
                <Icon name={eyeIcon} style={styles.inputIcon}/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Main')}>
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.registerText}>
              <Text>Don't have an account ?{" "}</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.registerTouchableText}>Register Here</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Body>
    </View>
  );
};

export default Login;
