import React from 'react'
import { View, Text, FlatList  } from "react-native"
import GrpEFGs from "../../components/grpefgs/GrpEFGs"
//import MbrGrpEFGs from "../../components/grpefgs/MbrGrpEFGs"

const GrpEFGsScreen = () => {

    return (
        <View>
            <Text> MEMBRES DE L'EXERCICE</Text>
            <GrpEFGs />
            <Text> ADD </Text>
        </View>

    )
}

export default GrpEFGsScreen