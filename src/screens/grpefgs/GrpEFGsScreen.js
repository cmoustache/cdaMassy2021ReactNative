import React from 'react'
import { View, Text, FlatList  } from "react-native"
import MbrGrpEFGs from "../../components/grpefgs/MbrGrpEFGs"

const GrpEFGsScreen = () => {

    return (
        <View>
            <Text> MEMBRES DE L'EXERCICE</Text>
            <MbrGrpEFGs />
            <Text> ADD </Text>
        </View>

    )
}

export default GrpEFGsScreen