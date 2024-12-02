import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
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
          Breakfast is ready!
        </Text>
      </View>

      <View style={{ flex: 1, alignSelf: "stretch", rowGap: 20 }}>
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
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
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
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
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
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
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
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
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
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
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
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
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

      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
