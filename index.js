
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase, ref, onValue, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

//First initialize the fire base config. Write down the data that you have
const firebaseConfig = {
    databaseURL: "https://realtime-database-9afdc-default-rtdb.europe-west1.firebasedatabase.app/",
};

//Second inizialize the Firebase app. Connect the data that you have with firebase
const app = initializeApp(firebaseConfig)

//Finally get the database from your firebase app
const database = getDatabase(app)

//Create a reference, a path. Connect the database with the reference
const endorsementDbRef = ref(database, "/endorsements")

//Read the database value
onValue(endorsementDbRef, (snapshot) => {
    //console.log(snapshot.val());
})

const text = document.getElementById("endorsement-input")
const publishButton = document.getElementById("publish-btn")
const endorsementsList = document.getElementById("endorsements-list")

function publishEndorsement() {
    publishButton.addEventListener("click", () => {
        text.value
    })
}

function getEndorsement() {
    array.forEach(element => {
        
    });
    const listEl = document.createElement("li")
    listEl.className = "endorsement-el"
    endorsementsList.appendChild(listEl)
}

publishEndorsement()

// console.log();


