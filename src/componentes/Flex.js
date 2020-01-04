import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    norte: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    centro:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f2f9bd',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    sul: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#bdf9cd',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    quadrado: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 5,
    }
})

const Quadrado = props => <View style={styles.quadrado}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Quadrado/>
                <Quadrado/>
                <Quadrado/>
            </View>
            <View style={styles.centro}>
                <Quadrado/>
                <Quadrado/>
                <Quadrado/>
            </View>
            
            <View style={styles.sul}>
                <Quadrado/>
                <Quadrado/>
                <Quadrado/>
            </View>
        </View>
    )
}