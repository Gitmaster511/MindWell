import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyClaOFtD_U5Cka4eRWs_F1n2oo2QBAzDDE",
  authDomain: "mindwell-b80a7.firebaseapp.com",
  projectId: "mindwell-b80a7",
  storageBucket: "mindwell-b80a7.appspot.com",
  messagingSenderId: "368344160806",
  appId: "1:368344160806:web:0c0071e4a366b26e3824e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const ViewMoodPage = () => {
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    // Fetch mood history from Firestore
    const fetchMoodHistory = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'users'));
        const moodHistoryData = [];
        querySnapshot.forEach((doc) => {
          moodHistoryData.push(doc.data());
        });
        setMoodHistory(moodHistoryData);
      } catch (error) {
        console.error('Error fetching mood history', error);
      }
    };

    fetchMoodHistory();
  }, []);

  const getMoodEmoji = (mood) => {
    switch (mood) {
      case 'Happy':
        return '😄';
      case 'Neutral':
        return '😐';
      case 'Sad':
        return '😢';
      default:
        return '';
    }
  };

  const renderMoodItem = ({ item }) => {
    return (
      <View style={styles.moodItem}>
        <Text style={styles.moodEmoji}>Mood: {getMoodEmoji(item.mood)}</Text>
        {item.note && <Text style={styles.moodItemText}>Note: {item.note}</Text>}
        <Text style={styles.moodItemText}>Date: {item.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={moodHistory}
        renderItem={renderMoodItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  moodItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'left',
  },
  moodEmoji: {
    fontSize: 30,
    marginRight: 10,
  },
  moodItemText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ViewMoodPage;
