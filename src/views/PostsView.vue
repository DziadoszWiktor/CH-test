<template>
    <div>
        <ul>
        <li v-for="car in cars" :key="car.id">
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
    import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
    import { collection, doc, getDocs, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

    import { getStorage, ref, uploadString, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

    import { reactive } from 'vue';

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
        const cars = reactive([]);
        getDocs(collection(db, "cars")).then((querySnapshot2) => {
          querySnapshot2.forEach(async (doc) => {
            const storage = getStorage();
            const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
            const imageUrl = await getDownloadURL(refImage);
            cars.push({
              id: doc.id,
              make: doc.data().make,
              model: doc.data().model,
              engine: doc.data().engine,
              color: doc.data().color,
              imageUrl: imageUrl
            });
          });
        });
        return {
          cars
        };
      }
    }
</script>

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