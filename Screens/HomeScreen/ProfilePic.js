import React from "react";
import { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import axios from "axios";
import { Overlay, Button, Image, Icon } from "@rneui/base";
import DocumentPicker from "react-native-document-picker"


export const ProfilePic = ({ email }) => {

    console.log(email)
    const [emailUrl, setEmailUrl] = useState('')
    const [editProfilePic, setEditProfilePic] = useState(false)

    const [presignedUrlUpoad, setPresignedUrlUpload] = useState('')

    const [fileType, setFileType] = useState('')
    const [fileName, setFileName] = useState('')
    const [filepath, setFilePath] = useState('')

    const onEditPicButton = () => {
        setEditProfilePic(!editProfilePic)
    }

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
                setEmailUrl(result.data)
            } catch (e) {
                console.log(e)
            }
        }

        getProfilePicture()
    }, [emailUrl])

    const setNewProfilePic = async (type, uri,name) => {
        let url = 'http://10.0.2.2:3000/users/geturlforprofileuploaad';
        try {
            const result = await axios.post(url, {
                fileName,
                fileType
            })
            console.log(result.data)
            setPresignedUrlUpload(result.data)
            uploadNewProfilePicture(type, uri, result.data,name)
        } catch (e) {
            console.log(e)
        }
    }

    const uploadNewProfilePicture = async (type, uri, url,name) => {
        const file = await fetch(uri);
        const blobfile = await file.blob();
        if (file) {
            console.log("YEs file")
            try {
                const result = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': type
                    },
                    body: blobfile
                })
                if (result.ok) {
                    console.log("File uploaded sucessfully");
                    updateProfilePicLink(name)
                } else {
                    console.log("please try again")
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    
    const updateProfilePicLink = async (name) =>{
        let url = 'http://10.0.2.2:3000/users/updateprofilepictureink';
        try{
            const result = await axios.put(url,{
                email,
                name
            })
            console.log(result.data)
            setEmailUrl(result.data)
        }catch(e){
            console.log(e)
        }
    }

    const selectPicture = async () => {
        console.warn("selectig")
        const result = await DocumentPicker.pickSingle({
            type: ['image/*']
        })

        if (result) {
            setFileName(result.name)
            setFileType(result.type)
            setFilePath(result.uri)
            setNewProfilePic(result.type, result.uri,result.name)
        }


    }

    return (
        <View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                {
                    emailUrl ?
                        <View>
                            <Image source={{ uri: emailUrl }} style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <TouchableOpacity onPress={() => onEditPicButton()}>
                                <Icon name="edit" />
                            </TouchableOpacity>

                        </View>
                        : null
                }

                {
                    editProfilePic ?
                        <View>
                            <Overlay overlayStyle={{ backgroundColor: 'transparent' }} onBackdropPress={() => setEditProfilePic(false)}>
                                <Button buttonStyle={{ marginBottom: 20 }} title={"Choose Picture"} onPress={selectPicture} />
                                <Button title={"View picture"} />
                            </Overlay>
                        </View>
                        : null
                }


            </View>


        </View>
    )
}