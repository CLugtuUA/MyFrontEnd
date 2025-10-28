import {View, Text, FlatList, Button, Alert} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from '../styles';

export default function UserListPage({navigation}){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
    );

  const handleEdit = (user) => {
    navigation.navigate("EditUser", {user});
  };

  const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`) 
                        .then(() => { 
                            Alert.alert("Success", "User deleted successfully"); 

                        })
                        .catch((err) => {
                            console.log(err);
                            Alert.alert("Error", "Failed to delete user");
                   })      
                },
            }
        ]
    );
};

  return (
    <View style={styles.container}>
        <Text style={styles.header}>User List Page</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.text}><b>Firstname:</b> {item.first_name}</Text>
              <Text style={styles.text}><b>Lastname:</b> {item.last_name}</Text>
              <Text style={styles.text}><b>Email:</b> {item.email}</Text>
              <View>
                <Button title="Edit"
                color= "#69be42ff"
                onPress={() => handleEdit(item)}/>
                <Button title="Delete"
                color= "#ff6961"
                onPress={() => handleDelete(item.id)}/>
              </View>
            </View>
          )}/>
    </View>
  );
}