import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TemperatureApp = () => {
    const [temperature, setTemperature] = useState(20);

    const getBackgroundColor = () => {
        if (temperature < 15) return "#3f69ff";
        if (temperature > 30) return "red";
        return "rgb(92, 206, 64)";
    };

    return (
        <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
            <Text style={styles.heading}>Temperature App</Text>
            <Text style={styles.temperature}>Temperature: {temperature}°C</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setTemperature(temperature + 1)}>
                    <Text style={styles.buttonText}>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setTemperature(temperature - 1)}>
                    <Text style={styles.buttonText}>Decrease</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    temperature: {
        fontSize: 20,
        color: "white",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
    },
    button: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
});

export default TemperatureApp;
