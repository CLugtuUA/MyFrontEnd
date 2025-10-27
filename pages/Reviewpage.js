// FRONTEND/pages/reviewpage.js

import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles'; 
import axios from 'axios'; 

const API_URL = "http://127.0.0.1:8000/api/register/"; 


export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;
    const [loading, setLoading] = useState(false);
    // State to hold and display server error messages
    const [submissionError, setSubmissionError] = useState('');

    const handleSubmit = async () => {
        if (loading) return;
        setLoading(true);
        setSubmissionError(''); // Clear previous error

        const dataToSend = {
            username: `${formData.first_name}.${formData.last_name}`.toLowerCase(),
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post(API_URL, dataToSend);
            
            if (response.status === 201) {
                 // For success, we can navigate directly or use a non-native success confirmation
                 // We'll navigate to Homepage immediately on success
                 navigation.navigate("Homepage");
            }

        } catch (error) {
            console.error('API Error Response:', error.response || error);
            
            let displayMessage = "An unknown error occurred. Please check your network or server status.";
            
            // This is the CRITICAL server-side error handling logic
            // Check for specific Django Validation Errors (HTTP 400)
            if (error.response && error.response.status === 400 && error.response.data) {
                
                const errorData = error.response.data;
                const firstKey = Object.keys(errorData)[0];
                
                if (firstKey && Array.isArray(errorData[firstKey]) && errorData[firstKey].length > 0) {
                    // Format the specific validation error clearly (e.g., "Email: User with this email already exists.")
                    const fieldName = firstKey.charAt(0).toUpperCase() + firstKey.slice(1);
                    displayMessage = `${fieldName}: ${errorData[firstKey][0]}`;
                } else {
                    // Fallback for non-standard 400 responses
                    displayMessage = JSON.stringify(errorData, null, 2);
                }
            } else if (error.response && error.response.status >= 500) {
                 displayMessage = "The server encountered an internal error (5xx). Please try again later.";
            }
            
            // Set the state to display the error message in-app
            setSubmissionError(displayMessage);

        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardWrapper}> 
                <Text style={styles.title}>Review Information</Text> 

                <ScrollView style={styles.card} contentContainerStyle={{paddingBottom: 20}}>
                    {/* Display all form fields for review */}
                    <Text style={styles.reviewText}>
                        <Text style={{fontWeight: 'bold'}}>Firstname:</Text> {formData.first_name}
                    </Text>
                    <Text style={styles.reviewText}>
                        <Text style={{fontWeight: 'bold'}}>Lastname:</Text> {formData.last_name}
                    </Text>
                    <Text style={styles.reviewText}>
                        <Text style={{fontWeight: 'bold'}}>Email:</Text> {formData.email}
                    </Text>
                    <Text style={styles.reviewText}>
                        <Text style={{fontWeight: 'bold'}}>Gender:</Text> {formData.gender || 'N/A'}
                    </Text>
                    <Text style={styles.reviewText}>
                        <Text style={{fontWeight: 'bold'}}>Password:</Text> {'*'.repeat(formData.password.length)}
                    </Text>

                    {/* Display the error message if it exists */}
                    {submissionError ? (
                        <Text style={{ 
                            color: '#DC3545', 
                            textAlign: 'center', 
                            marginBottom: 10,
                            fontSize: 14,
                            fontWeight: '500'
                        }}>
                            {submissionError}
                        </Text>
                    ) : null}

                    {/* Primary Submit Button */}
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleSubmit} 
                        disabled={loading}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? "SAVING..." : "Confirm & Save to Database"}
                        </Text>
                    </TouchableOpacity>
                    
                    {/* Secondary Go Back Button */}
                    <TouchableOpacity 
                        style={styles.secondaryButton} 
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.secondaryButtonText}>Go Back to Edit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}