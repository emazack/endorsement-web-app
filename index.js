
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

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

//Read and get the database value
onValue(endorsementDbRef, (snapshot) => {
    if (snapshot.exists()) {
        snapshot.forEach((el) => {
            const listEl = document.createElement("li")
            listEl.className = "endorsement-el"
            listEl.textContent = el.val()
            endorsementsList.appendChild(listEl)
        });
    } else {
        console.log("No data available at the specified path.");
    }
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
    //Get the data from db
    endorsementDbRef.get().then((snapshot) => {
        console.log(snapshot);
        // array.forEach(element => {

        // });
    })
    // const listEl = document.createElement("li")
    // listEl.className = "endorsement-el"
    // endorsementsList.appendChild(listEl)
}

publishEndorsement()

// console.log();


