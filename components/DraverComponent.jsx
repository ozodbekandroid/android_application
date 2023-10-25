import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer"

const DraverComponent = (props) => {
    return (
        <View style={{ flex: 1}}>
            <View style={{ flex: 1 }}>
                <ImageBackground source={{ uri: "https://unsplash.it/300/300/?random"}} style={{ width: "100%" , height:200}}>
                    <Text>hel</Text>
                </ImageBackground>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>
            <View style={{width:"100%", alignItems: "center" , justifyContent:"center", paddingVertical:10 , backgroundColor:"red" }}>
                <Text style={{ color: "black"}}>log out</Text>
            </View>
        </View>
    )
}

export default DraverComponent