
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"
// Inizializzare il database
// Recuperare il database

const configDatabase = {
    databaseUrl: "https://realtime-database-9afdc-default-rtdb.europe-west1.firebasedatabase.app/"
}


const database = getDatabase(configDatabase.databaseUrl)
const app = initializeApp(database)

console.log(app);

