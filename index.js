
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase, ref, onValue, push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const text = document.getElementById("endorsement-input")
const publishButton = document.getElementById("publish-btn")
const endorsementsList = document.getElementById("endorsements-list")
// const noEndorsmentPlaceholderEl = document.createElement("li");
// noEndorsmentPlaceholderEl.className = "no-endorsement-placeholder"
// noEndorsmentPlaceholderEl.textContent = "...No endorsement yet"

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
        push(endorsementDbRef, text.value)
    })
}

function createListElement(className, personalizedText) {
    let listEl = document.createElement("li")
    listEl.className = `${className}`
    listEl.textContent = personalizedText
    return listEl
}

publishEndorsement()


