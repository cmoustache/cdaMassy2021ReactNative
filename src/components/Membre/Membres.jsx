import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import Membre from './Membre';
import { useSelector, useDispatch } from "react-redux";


function Membres(props) {
    const membres = useSelector(state => state.reducer.membreCanal.membresCanal)
    const idCanal = 2

    return (
        <View>
            <Text>Liste Des Memebres : IdCanal = {idCanal}</Text>
            <Text>Id Membre  |  Nom  |  Prenom</Text>
            {membres.map((membre) => {
                return <Membre key={membre.idpersonne} membre={membre}/>
            })}
        </View>

    )

}
export default Membres;