import { StyleSheet } from "react-native";

const BookMyShowColor = "#df1827";

const styles = StyleSheet.create({
  top_bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  top_bar_left: {},
  top_bar_heding: {
    fontSize: 22,
    fontWeight:'bold'
  },
  top_bar_location: {
    fontSize: 15,
    color: BookMyShowColor,
  },
  top_bar_right: {
    flexDirection: "row",
  },
  top_bar_btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    marginLeft: 10,
  },
  notification_badge: {
    width: 25,
    height: 25,
    backgroundColor: BookMyShowColor,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -5,
    right: -5,
    zIndex: 10,
  },
  notification_count: {
    color: "#fff",
  },
  // -----------navbar
  navbar:{
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    paddingVertical:10
  },
  navbar_btn: {
    marginHorizontal:10
  },
  navbar_icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  navbar_text: {
    fontSize: 15,
    marginTop: 6,
  },
  dot_style:{
    width:11,
    height:11,
    borderRadius:6,
    marginHorizontal:-5
  },
//   --------
banner:{
    width:'90%',
    height:80,
    alignSelf:'center',
    marginVertical:30
},
movie_list:{
  // backgroundColor:"red",
  width:'90%',
  alignSelf:'center'
},
heding:{
  fontSize:22,
  fontWeight:'bold',
  marginVertical:15
}
});
export default styles;
