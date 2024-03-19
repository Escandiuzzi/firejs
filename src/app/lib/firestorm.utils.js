import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "./firebase.utils";

const db = getFirestore(app);

export async function storeData({ name, lastName, born }) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: name,
            last: lastName,
            born: born
        });

        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

export async function getAllData() {
    const querySnapshot = await getDocs(collection(db, "users"));

    let data = [];

    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);

        let user = doc.data();
        data.push({ id: doc.id, name: user.first, lastName: user.last, born: user.born })
    });

    return data;
}