import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const HomePageButtons: React.FC<{ services: { name: string; icon: string; type: string; onPress: () => void }[] }> = ({
  services,
}) => {
  return (
    <View style={styles.container}>
      {services.map((service, index) => (
        <Pressable key={index} style={styles.button} onPress={service.onPress}>
          {service.type === "FontAwesome5" && (
            <FontAwesome5 name={service.icon} size={32} color="#2D4B73" style={styles.icon} />
          )}
          <Text style={styles.buttonText}>{service.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 15,
    padding: 10,
  },
  button: {
    width: 90, // Kare olacak şekilde genişlik
    height: 90, // Kare olacak şekilde yükseklik
    backgroundColor: "#E5E5E5",
    borderRadius: 10, // Hafif yuvarlatılmış köşeler
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,
  },
  icon: {
    marginBottom: 5, // İkon ile yazı arasındaki boşluk
  },
  buttonText: {
    fontSize: 12,
    color: "#2D4B73",
    textAlign: "center",
    position: "absolute",
    bottom: 5, // Yazıyı alta yaslar
  },
});

export default HomePageButtons;
