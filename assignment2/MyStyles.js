import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  myCardo: {
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: '#FAFFDA',
    elevation: 20,
    shadowColor: 'black',
    shadowRadius: 20,
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowOpacity: 10,
    borderRadius: 10,
    margin: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  rowAlignContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textAlignContainer: {
    alignSelf: 'flex-start'
  },
  inputBox: {
    borderBottomWidth: 1,
    height: 40,
    margin: 5,
    padding: 12,
    minWidth: 218,
    maxWidth: 220,
    backgroundColor: '#FFFAFA',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    marginHorizontal: 5,
    width: 90
  },
  longText: {
    maxWidth: 180
  },
  warningText: {
    color: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundLinear: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  generalButton: {
    backgroundColor: "#DCF6F3",
    color: 'white',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  pressedButton: {
    backgroundColor: "#FFE5CC",
    marginHorizontal: 10,
  },
  tagText: {
    paddingRight: 2,
    maxWidth: 180,
  },
  tagButn: {
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: 60,
    textAlign: 'center',
    paddingVertical: 7,
    marginLeft: 5,
  },
  image: {
    justifyContent: 'center',
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  colors: {
    buttonWarningColor: 'red',
    buttonNormalColor: '#007AFF',
    bgColor1: '#1874CD',
    bgColor2: '#6E8B3D',
  },
  multiLineTBox: {
    height: 100,
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  defaultContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: 'black',
  red: 'red',
});

export default styles;
