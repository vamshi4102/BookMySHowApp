import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import styles from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { SliderBox } from "react-native-image-slider-box";

import { Banners, SlidePosters, movies } from "../../assets/data/Movierelated";
import { NabBarItems } from "../../assets/data/OtherData";
import MovieCard from "../../components/MovieCard";

const BookMyShowColor = "#df1827";

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* icons topbar */}
      <View style={styles.top_bar}>
        <View style={styles.top_bar_left}>
          <Text style={styles.top_bar_heding}>It's all starts here!</Text>
          <Text style={styles.top_bar_location}>
            Siddipet
            <AntDesign name="right" size={10} color={BookMyShowColor} />
          </Text>
        </View>
        <View style={styles.top_bar_right}>
          <TouchableOpacity style={styles.top_bar_btn}>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.top_bar_btn}>
            <View style={styles.notification_badge}>
              <Text style={styles.notification_count}>8</Text>
            </View>
            <Fontisto name="bell" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.top_bar_btn}>
            <FontAwesome name="qrcode" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* horizontal navigation */}
      <View style={styles.navbar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {NabBarItems.map((item) => (
            <TouchableOpacity style={styles.navbar_btn}>
              <Image source={item.image} style={styles.navbar_icon} />
              <Text style={styles.navbar_text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* movie poster slider */}
      <View>
        <SliderBox
          images={SlidePosters}
          sliderBoxHeight={260}
          dotColor={'#fff'}
          dotStyle={styles.dot_style}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          currentImageEmitter={(index) =>
            console.warn(`current pos is: ${index}`)
          }
        />
      </View>
      {/* offer card */}
      <View>
        <Image
        source={{uri:Banners[0]}}
        style={styles.banner}
        />
      </View>
      {/* horizontal movie poster */}
      <View style={styles.movie_list}>
        <Text style={styles.heding}>Recommended movies</Text>
        <FlatList 
        data={movies}
        renderItem={({item})=><MovieCard movie={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
