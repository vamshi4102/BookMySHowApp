import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { movies } from "../assets/data/Movierelated";
import { AntDesign } from "@expo/vector-icons";

const BookMyShowColor = "#df1827";

const MovieCard = ({movie}) => {
  return (
    <View style={styles.movie_card}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.left}>
          <AntDesign name="star" size={24} color= {BookMyShowColor}/>
          <Text style={styles.bold}>{movie.startRatings}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.bold}>{movie.VotesCount}</Text>
          <Text style={styles.light}>Votes</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movie_card: {
    width: 190,
    marginRight:20
    // backgroundColor: "yellow",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "rgba(0,0,0,0.04)",
    paddingVertical: 8,
    borderRadius:8
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
  },
  bold: {
    fontSize: 17,
    fontWeight: "600",
  },
  light: {
    fontSize: 17,
    fontWeight: "600",
    color:"rgba(0,0,0,0.2)",
    marginLeft: 5,
  },
});
