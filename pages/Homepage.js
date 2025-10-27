// FRONTEND/pages/Homepage.js

import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from '../styles';


export default function HomePage({navigation}) {
    return( 
        <SafeAreaView style={styles.container}>
            <View style={styles.cardWrapper}> 
                <View style={styles.card}>
                    <Text style={styles.title}>Welcome to the App</Text> 
                    <Text style={styles.homepageText}>Please register to continue.</Text> 

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Register')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}