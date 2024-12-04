import { FlatList, Pressable,  StyleSheet } from "react-native";
import WelcomeSection from "@/components/WelcomeSection";

import { Text, View } from "@/components/Themed";
import React from "react";
import HomePageButtons from "@/components/HomePageButtons";

// Style lari disari cikartmamiz lazim
// Biraz daha toparlayalim
// HomepageButton olusturalim component


export default function TabOneScreen() { 
  return (
    <View style={styles.container}>
      <WelcomeSection
        name="Mr. Akif"
        roomNo="502"
        remainingDays={3}
        wifiCode="qwe123"
        onCallReception={() => alert('Calling Reception...')}
      />
      {/* <FlowCard time="10.00 - 11.30" /> */}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <FlatList
        horizontal
        style={{ flex: 1 }}
        data={[
          {
            title: "Breakfast is ready!",
          },
          {
            title: "Tonights food menu",
          },
          {
            title: "Pool is open",
          },
        ]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                padding: 10,
                margin: 20,
                backgroundColor: "lightblue",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  margin: "auto",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        }}
      />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <View style={{ flex: 2, alignSelf: "stretch", rowGap: 20 }}>
      <View style={{ padding: 20 }}>
      <HomePageButtons
        services={[
          { name: "Housekeeping", icon: "broom", type: "FontAwesome5", onPress: () => alert("Housekeeping pressed") },
          { name: "Reception", icon: "bell", type: "FontAwesome5", onPress: () => alert("Reception pressed") },
          { name: "Food Service", icon: "utensils", type: "FontAwesome5", onPress: () => alert("Food Service pressed") },
          { name: "Taxi/Valet", icon: "taxi", type: "FontAwesome5", onPress: () => alert("Taxi/Valet pressed") },
          { name: "Technical Fault", icon: "screwdriver", type: "FontAwesome5", onPress: () => alert("Technical Fault pressed") },
          { name: "Amenities", icon: "toolbox", type: "FontAwesome5", onPress: () => alert("Amenities pressed") },
        ]}
      />
    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
