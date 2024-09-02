import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/base";
import { Input } from "@rneui/themed";

export const RegPass = ({setPass,passError}) =>{
    return(
        <View style={{marginTop:10, marginHorizontal:10}}>
            {passError&&<Text style={{color:'red'}}>*password required/space not allowed</Text>}
            <Input
            placeholder="password"
            secureTextEntry
            onChangeText={(text)=>setPass(text)}
             />
        </View>
    )
}