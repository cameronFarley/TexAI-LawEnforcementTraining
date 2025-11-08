import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

/*
This is the code for the learn tab
- Maybe create a way to specify what topics to parctice?
- I imagine we provide all of the information? Not let the user input it
- Connect: Flashcards, Quiz, Learn, Matching
- Create an update system for the mastery based on Learn perhaps?
- Unique the style so its not copy and paste of home page
*/

export default function Learn() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={{ padding: 20, paddingTop: 60 }}>
        <Text style={{ 
          color: "white", 
          fontSize: 32, 
          fontWeight: "bold",
          marginBottom: 30
        }}>
          Learn
        </Text>

        {/* Quick Actions */}
        <View style={{ gap: 16 }}>
          {/* First quick action : Learn */}
          <TouchableOpacity
            style={{
              backgroundColor: "#1E1E1E",
              padding: 20,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => router.push("/(main)/learn/learn")}
          >
            <View style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#FF9F0A20",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}>
              <Ionicons name="book" size={24} color="#FF9F0A" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 4 }}>
                Learn
              </Text>
              <Text style={{ color: "#888", fontSize: 14 }}>
                Customized learning experience
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          {/* Second Quick action box : Flashcards */}
          <TouchableOpacity
            style={{
              backgroundColor: "#1E1E1E",
              padding: 20,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => router.push("/(main)/learn/learn")}
          >
            <View style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#007AFF20",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}>
              <Ionicons name="albums" size={24} color="#007AFF" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 4 }}>
                Flash Cards
              </Text>
              <Text style={{ color: "#888", fontSize: 14 }}>
                Memorize!
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          {/* third Quick action box : Quiz */}
          <TouchableOpacity
            style={{
              backgroundColor: "#1E1E1E",
              padding: 20,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => router.push("/(main)/learn/learn")}
          >
            <View style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#34C75920",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}>
              <Ionicons name="reader" size={24} color="#34C759" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 4 }}>
                Quiz
              </Text>
              <Text style={{ color: "#888", fontSize: 14 }}>
                Test your knowledge
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          {/* A fourth quick action : Matching */}
          <TouchableOpacity
              style={{
                backgroundColor: "#1E1E1E",
                padding: 20,
                borderRadius: 16,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => router.push("/(main)/learn/learn")}
            >
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#AA6FD620",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 16,
              }}>
                <Ionicons name="copy" size={24} color="#AA6FD6" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 4 }}>
                  Matching
                </Text>
                <Text style={{ color: "#888", fontSize: 14 }}>
                  Match the terms
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>
          </View>

        {/* Today's Overview */}
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
            Mastery
          </Text>
          
          <View style={{ backgroundColor: "#1E1E1E", padding: 20, borderRadius: 16 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Terms</Text>
                <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>0</Text>
              </View>
              <View style={{ width: 1, backgroundColor: "#2C2C2C" }} />
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Topics</Text>
                <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>0</Text>
              </View>
              <View style={{ width: 1, backgroundColor: "#2C2C2C" }} />
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>Completion</Text>
                <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>0%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}