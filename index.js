
//In order to use Firebase functionality: Import the function initializeApp from Firebase js file and different other functions from firebase-database
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase, ref, onValue, push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const text = document.getElementById("endorsement-input")
const publishButton = document.getElementById("publish-btn")
const endorsementsList = document.getElementById("endorsements-list")

//First configure firebase. Write down the data that you have
const firebaseConfig = {
    databaseURL: "https://realtime-database-9afdc-default-rtdb.europe-west1.firebasedatabase.app/",
};

//Second inizialize the Firebase app. Connect the data that you have with firebase
const app = initializeApp(firebaseConfig)

//Finally get the database from your firebase app
const database = getDatabase(app)

//Create a reference in the database and call it endorsements
const endorsementDbRef = ref(database, "/endorsements")

//Read and get the database value
onValue(endorsementDbRef, (snapshot) => {
    while (endorsementsList.firstChild) {
        endorsementsList.removeChild(endorsementsList.firstChild);
    }
    if (snapshot.exists()) {
        snapshot.forEach((el) => {
            endorsementsList.appendChild(createListElement("endorsement-el", el.val()))
        });
    } else {
        endorsementsList.appendChild(createListElement("no-endorsement-placeholder", "...No endorsement yet"))
    }
})


function publishEndorsement() {
    publishButton.addEventListener("click", () => {
        //At that Ref (endorsementDbRef), insert a record with text.value
        push(endorsementDbRef, text.value)
        text.value = ""
    })
}

function createListElement(className, personalizedText) {
    let listEl = document.createElement("li")
    listEl.className = `${className}`
    listEl.textContent = personalizedText
    return listEl
}

publishEndorsement()


