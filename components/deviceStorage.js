import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {
  // our AsyncStorage functions will go here :)
  
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value.toString());
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = retrievedItem === null ? null : (retrievedItem).toString();
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }
};

export default deviceStorage;
