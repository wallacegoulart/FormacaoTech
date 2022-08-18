import React from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'



export default function Welcome(){
    const navigation = useNavigation();
    return (
        <View style={styles.container} >

         <View sytle={sytles.containerLogo}>
            <Animatable.Image
                animation="flipInY" 
                source={require('../../assets/image.webp')}
                style={{ width: '100%'}}
                resizeMode="contain"
            />
        </View>   

        <Animatable.View delay={600} animation="fadeInUp" sytle={sytles.containerForm}>
            <Text style={sytles.title}>Flamengo</Text>
            <Text>Tela Inicial</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        
        </Animatable.View>

        </View>
    );
}


const sytles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'red'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#fff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12, 

    }, 
    text:{
        color : '#a1a1a1'
    }, 
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50, 
        paddingVertical: 8, 
        width: '60%',
        alignSelf: 'center', 
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    }, 

    buttonText:{
        fontSize: 18, 
        color: '#FFF',
        fontWeight: 'bold'
    }

})