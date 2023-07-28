import { collection, addDoc, doc, deleteDoc, updateDoc, getDocs, query, where } from "firebase/firestore";
import { database } from "./firebase-setup";

export async function deleteFromDB(docID) {
  try {
    await deleteDoc(doc(database, "entries", docID));
  } catch (err) {
    console.log("Error deleting doc ", err);
  }
}

export async function writeToDB(entry) {
  try {
    const docRef = await addDoc(collection(database, "entries"), entry);
    return docRef.id;
  } catch (err) {
    console.log("Error writing to DB ", err);
  }
}

export async function updateDB(docID, data) {
  try {
    await updateDoc(doc(database, "entries", docID), data);
  } catch (err) {
    console.log("Error updating doc ", err);
  }
}

export async function readFromDB(condition) {
  let entries = [];
  try {
    let querySnapshot;
    if(condition) {
      querySnapshot = await getDocs(query(collection(database, "entries"), where("calories", ">", condition)));
    } else {
      querySnapshot = await getDocs(collection(database, "entries"));
    }
    querySnapshot.forEach((doc) => {
      entries.push({...doc.data(), id: doc.id});
    });
  } catch (err) {
    console.log("Error reading from DB ", err);
  }
  return entries;
}
