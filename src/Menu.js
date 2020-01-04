import React from  'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Mult'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataforma'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import FlatListExemplo from './componentes/FlatListExemplo'

 export default createDrawerNavigator({
    FlatListExemplo:{
        screen:  FlatListExemplo
    },
    ListaFlex:{
        screen:  ListaFlex,
        navigationOptions: { title: 'Lista (Flex Box)'}
    },
    TextoSincronizado:{
        screen:  TextoSincronizado,
        navigationOptions: { title: 'Comunicação Indireta'}
    },
    Avo:{
        screen: () => <Avo nome='Joao' sobrenome='Silva'/>,
        navigationOptions: { title: 'Comunicação Direta'}
    },
    Evento:{
        screen: Evento
    }, 
    ValidarProps:{
        screen: () => <ValidarProps ano={18}/>,
        navigationOptions: { title: 'Validar Props'}
    }, 
    Plataforma:{
        screen: Plataforma
    },
    Contador:{
        screen: () => <Contador/>
    },
    MegaSena:{
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto='React Nativo'/>
    },
    ParImpar:{
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples:{
        screen: () => <Simples texto='Flexivel'/>
    }
}, {drawerWidth: 300})