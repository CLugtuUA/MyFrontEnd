// FRONTEND/pages/registerpage.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // ✅ ADD THIS
import styles from '../styles'; 

// Standard email regex for basic validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterPage({ navigation }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field, value) => {
    setErrorMessage('');
    setFormData({ ...formData, [field]: value });
  };

  // ✅ Axios POST function (Option 2)
  const saveToDjango = async () => {
    try {
      // Replace with your Django server IP address
      const API_URL = 'http://192.168.100.73:8000/api/register/'; 
      
      const response = await axios.post(API_URL, formData);
      console.log('✅ Record saved successfully:', response.data);
      Alert.alert('Success', 'Record saved successfully!');
    } catch (error) {
      console.error('❌ Error saving record:', error);
      Alert.alert('Error', 'Failed to save record. Check your connection or Django API.');
    }
  };

  const handleNavigateToReview = async () => {
    const { first_name, email, password } = formData;

    // 1. Required fields
    if (!first_name.trim() || !email.trim() || !password.trim()) {
      setErrorMessage("Please fill in the First Name, Email, and Password fields.");
      return;
    }

    // 2. Email format
    if (!EMAIL_REGEX.test(email.trim())) {
      setErrorMessage("The email address format is invalid (e.g., user@example.com).");
      return;
    }

    setErrorMessage('');

    // ✅ Directly save to Django before navigating
    await saveToDjango();

    // ✅ After saving, navigate to Review page
    navigation.navigate("Review", { formData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>CREATE ACCOUNT</Text>

        <ScrollView style={styles.card} contentContainerStyle={{ paddingBottom: 20 }}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#6C757D"
            value={formData.first_name}
            onChangeText={(text) => handleChange('first_name', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#6C757D"
            value={formData.last_name}
            onChangeText={(text) => handleChange('last_name', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6C757D"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6C757D"
            value={formData.password}
            secureTextEntry={true}
            onChangeText={(text) => handleChange('password', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Gender (Optional)"
            placeholderTextColor="#6C757D"
            value={formData.gender}
            onChangeText={(text) => handleChange('gender', text)}
            style={styles.input}
          />

          {/* Error message */}
          {errorMessage ? (
            <Text style={{ 
              color: '#DC3545', 
              textAlign: 'center', 
              marginBottom: 10,
              fontSize: 14,
              fontWeight: '500'
            }}>
              {errorMessage}
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={handleNavigateToReview}
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Review and Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
