import { FlatList, Pressable,  StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Text, View } from "@/components/Themed";

// Style lari disari cikartmamiz lazim
// Biraz daha toparlayalim
// HomepageButton olusturalim component


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          alignSelf: "stretch",
          padding: 10,
          margin: 20,
          backgroundColor: "lightblue",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Welcome Mr. Akif{"\n"} {"\n"} Room No: 501 {"\n"} Remaining days: 3
          {"\n"} Wi-Fi Code: qqwe123
        </Text>
        <Pressable
          style={{
            padding: 10,
            margin: 10,
            backgroundColor: "darkblue",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
            }}
          >
            Extend Stay
          </Text>
        </Pressable>
      </View>

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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "lightgray",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Ionicons name="accessibility" size={24} color="black" />
            <Text
              style={{
                fontSize: 14,
                color: "darkblue",
              }}
            >
              Housekeeping
            </Text>
          </Pressable>

          <Pressable
            style={{
              padding: 10,
              backgroundColor: "lightgray",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Ionicons name="receipt" size={24} color="black" />
            <Text
              style={{
                fontSize: 14,
                color: "darkblue",
              }}
            >
              Reception
            </Text>
          </Pressable>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "lightgray",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Ionicons name="fast-food" size={24} color="black" />
            <Text
              style={{
                fontSize: 14,
                color: "darkblue",
              }}
            >
              Food service
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "lightgray",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="taxi" size={24} color="black" />
            <Text
              style={{
                fontSize: 14,
                color: "darkblue",
              }}
            >
              Taxi/Vallet
            </Text>
          </Pressable>

          <Pressable
            style={{
              padding: 10,
              backgroundColor: "lightgray",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="screwdriver" size={24} color="black" />
            <Text
              style={{
                fontSize: 14,
                color: "darkblue",
              }}
            >
              Technical Fault
            </Text>
          </Pressable>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "lightgray",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="toolbox" size={24} color="black" />
            <Text
              style={{
                fontSize: 14,
                color: "darkblue",
              }}
            >
              Amenities
            </Text>
          </Pressable>
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
