import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeSection: React.FC<{ name: string; roomNo: string; remainingDays: number; wifiCode: string; onCallReception: () => void }> = ({
  name,
  roomNo,
  remainingDays,
  wifiCode,
  onCallReception,
}) => {
  return (
    <View style={styles.welcomeSection}>
      <Text style={styles.welcomeText}>Welcome {name}</Text>
      <Text style={styles.infoText}>Room No: {roomNo}</Text>
      <Text style={styles.infoText}>Remaining Day: {remainingDays}</Text>
      <Text style={styles.infoText}>Wi-Fi Code: {wifiCode}</Text>
      <TouchableOpacity style={styles.callButton} onPress={onCallReception}>
        <Text style={styles.callButtonText}>Call Reception</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeSection: {
    backgroundColor: '#89D6E7',
    opacity: 0.5,
    padding: 20,
    margin: 20,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  callButton: {
    marginTop: 10,
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeSection;   