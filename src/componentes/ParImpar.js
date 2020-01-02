import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

// function parOuImpar(num){
//     if(num % 2 == 0)
//         return <Text style={Padrao.ex}>PAR</Text>
//     else
//         return <Text style={Padrao.ex}>IMPAR</Text>
// }

export default props =>
    <View>
        <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>PAR</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>IMPAR</Text>
        </If>
        {/* {parOuImpar(props.nummero)}
        { 
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
        }  */}
    </View>