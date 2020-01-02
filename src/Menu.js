import React from  'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Mult'
import Contador from './componentes/Contador'

 export default createDrawerNavigator({
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