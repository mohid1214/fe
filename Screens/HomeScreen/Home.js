import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "@rneui/base";
import DocumentPicker from 'react-native-document-picker'
import { Image } from "@rneui/themed";
import axios from "axios";


export const Home = ({ route }) => {

    const { email } = route.params
    console.log(email);
    const [emailUrl, setEmailUrl] = useState('')

    useEffect(() => {
        console.log("calling it")
        const getProfilePicture = async () => {
            let url = 'http://10.0.2.2:3000/users/profilepicture';
            try {
                const result = await axios.get(url, {
                    params: {
                        email
                    }
                })
                console.log(result.data)
                setEmailUrl(result.data)
            } catch (e) {
                console.log(e)
            }
        }

        getProfilePicture()
    }, [emailUrl])




    return (
        <View>
            {
                emailUrl? <Image source={{ uri: emailUrl }} style={{ width: 100, height: 100 }} />:null
            }
            <Image source={{uri : emailUrl}} />
        </View>
    )
}