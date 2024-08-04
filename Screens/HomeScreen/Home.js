import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Overlay, Text } from "@rneui/base";
import DocumentPicker from 'react-native-document-picker'
import { Image, Icon } from "@rneui/themed";
import axios from "axios";
import { ProfilePic } from "./ProfilePic";


export const Home = ({ route }) => {

    const { email } = route.params
   



    return (
      <ProfilePic email={email} />
    )
}