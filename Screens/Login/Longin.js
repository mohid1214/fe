import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Text } from "@rneui/base";
import { Input } from "@rneui/themed";
import axios from "axios";

export const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin =async () => {
        let url = 'http://10.0.2.2:3000/users/login';
        console.log("called");
        try {
            const result = await axios.get(url, {
                params: {
                    email,
                    pass
                }
            })

            if(result.status === 200){
                console.log("user found with correct password");
                navigation.navigate('Home',{
                    email
                });
            }
            if(result.status === 201){
                console.log("Wrong email or password")
            }
        } catch (e) {
            console.log("error" + e);
        }
    }

    return (
        <View>
            <View style={{ backgroundColor: 'lightblue', height: 50, alignItems: 'center' }}>
                <Text h2 style={{ color: 'grey' }}>
                    Login
                </Text>
            </View>

            <View style={{ marginTop: 100, width: '85%' }}>
                <Input placeholder="enter name"
                    rightIcon={<Icon name="mail" />}
                    onChangeText={(text)=>setEmail(text)}
                />
                <Input placeholder="enter password"
                    rightIcon={<Icon name="eye" type="antdesign" />}
                    secureTextEntry={false}
                    onChangeText={(text)=>setPass(text)}
                />
            </View>

            <View>
                <Button onPress={()=>handleLogin()} buttonStyle={{ width: '85%', marginLeft: 20, marginTop: 90 }} title={"Login"} />
            </View>
        </View>
    )
}       