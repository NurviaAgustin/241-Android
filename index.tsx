import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Home screen component
function HomeScreen() {
  const handlePromoPress = () => {
    console.log("Promo banner pressed");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>OVO Cash</Text>
        <Text style={styles.headerBalance}>Rp 110.000</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton} onPress={() => console.log("Top Up")}>
            <Icon name="plus-circle-outline" size={28} color="#FFFFFF" />
            <Text style={styles.headerButtonText}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => console.log("Transfer")}>
            <Icon name="arrow-up-bold-circle-outline" size={28} color="#FFFFFF" />
            <Text style={styles.headerButtonText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => console.log("Withdraw")}>
            <Icon name="bank-outline" size={28} color="#FFFFFF" />
            <Text style={styles.headerButtonText}>Tarik Tunai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => console.log("History")}>
            <Icon name="history" size={28} color="#FFFFFF" />
            <Text style={styles.headerButtonText}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Upgrade Card */}
      <View style={styles.upgradeCard}>
        <Text style={styles.upgradeText}>Yuk, upgrade ke OVO Premier! Nikmatin akses benefit lengkap dari OVO!</Text>
        <TouchableOpacity style={styles.upgradeButton} onPress={() => console.log("Upgrade")}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>

      {/* Feature Grid */}
      <View style={styles.featureGrid}>
        {[
          { label: "Pinjaman", icon: "cash" },
          { label: "Uang Elektronik", icon: "credit-card" },
          { label: "Angsuran Kredit", icon: "file-document" },
          { label: "Pulsa/Paket Data", icon: "cellphone" },
          { label: "PLN", icon: "flash" },
          { label: "Air PDAM", icon: "water" },
          { label: "Internet & TV Kabel", icon: "television" },
          { label: "BPJS Kesehatan", icon: "hospital" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.featureItem} onPress={() => console.log(`${item.label} pressed`)}>
            <Icon name={item.icon} size={32} color="#4C1D95" />
            <Text style={styles.featureLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Promo Banner */}
      <TouchableOpacity style={styles.promoBanner} onPress={handlePromoPress}>
        <Text style={styles.promoText}>OVO Belanja online lebih hemat pake OVO</Text>
        <Text style={styles.promoDiscount}>Cashback/Diskon s.d. 500 rb</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Bottom tab navigator
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Finance"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="finance" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Pay"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="qrcode-scan" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="email-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="account-outline" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FA",
  },
  header: {
    backgroundColor: "#4C1D95",
    padding: 20,
    borderRadius: 15,
    margin: 15,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerBalance: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10,
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerButton: {
    alignItems: "center",
  },
  headerButtonText: {
    color: "#FFFFFF",
    marginTop: 5,
    fontSize: 12,
  },
  upgradeCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  upgradeText: {
    fontSize: 14,
    color: "#4C1D95",
    flex: 1,
  },
  upgradeButton: {
    backgroundColor: "#7F56D9",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  upgradeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: 10,
  },
  featureItem: {
    width: "25%",
    alignItems: "center",
    marginVertical: 10,
  },
  featureLabel: {
    marginTop: 5,
    fontSize: 12,
    color: "#4C1D95",
    textAlign: "center",
  },
  promoBanner: {
    backgroundColor: "#7F56D9",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  promoText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  promoDiscount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
