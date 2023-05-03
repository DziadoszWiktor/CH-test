<template>
    <div>
      <div class="search-container">
        <input :value="searchTerm" @input="updateSearchTerm" type="text" placeholder="Search for car make">
        <button @click="search">Search</button>
      </div>
      <ul>
        <li v-for="car in searchResults" :key="car.id">
          <img :src="car.imageUrl" width="700" height="600">
          <p>{{ car.make }}</p>
          <p>{{ car.model }}</p>
          <p>{{ car.engine }}</p>
          <p>{{ car.color }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
    import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
    import { reactive } from "vue";
  
    const firebaseConfig = {
        apiKey: "AIzaSyDpRlGDGuk1JUXi0VhvSpVcJwcCm1Q2ep8",
        authDomain: "cars-cf954.firebaseapp.com",
        projectId: "cars-cf954",
        storageBucket: "cars-cf954.appspot.com",
        messagingSenderId: "943137422806",
        appId: "1:943137422806:web:60df9a425e9cf25a26b877"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  
    export default {
      setup() {
        const searchTerm = reactive('');
        const searchResults = reactive([]);
  
        const updateSearchTerm = (event) => {
          searchTerm.value = event.target.value;
        };
  
        const search = async () => {
          searchResults.length = 0;
          const carsRef = collection(db, 'cars');
          const q = query(carsRef, where('make', '==', searchTerm.value));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(async (doc) => {
            const storage = getStorage();
            const refImage = ref(storage, `cars/${doc.id}.jpg`);
            const imageUrl = await getDownloadURL(refImage);
            searchResults.push({
              id: doc.id,
              make: doc.data().make,
              model: doc.data().model,
              engine: doc.data().engine,
              color: doc.data().color,
              imageUrl: imageUrl
            });
          });
        };
  
        return {
          searchTerm,
          searchResults,
          updateSearchTerm,
          search
        };
      }
    };
  </script>
  
  
  <style>
    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  
    input[type="text"] {
      width: 300px;
      height: 30px;
      margin-right: 10px;
      padding: 5px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
  
    button {
      padding: 5px 20px;
      background-color: #4CAF50;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #3e8e41;
    }
  </style>
  

<style scoped>
li {
  display: inline-block;
  margin: 10px;
  background-color: white;
  box-shadow: 0px 0px 5px #888;
  border-radius: 5px;
  text-align: center;
}

img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

p {
  margin: 5px;
  font-size: 14px;
  color: #555;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
</style>