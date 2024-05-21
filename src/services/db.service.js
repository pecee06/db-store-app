import {
    collection,
    doc,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc
} from "firebase/firestore"
import {db} from "../config/firebase.config"

class DB{
    async insert({collectionName, data}){
        try {
            const collectionRef = collection(db, collectionName)
            const res = await addDoc(collectionRef, data)
            return res
        } catch (err) {
            console.error(err);
            return null
        }
    }

    async fetchAll({collectionName}){
        try {
            const collectionRef = collection(db, collectionName)
            const res = await getDocs(collectionRef)
            const data = res.docs.map(doc => {
                const obj = {
                    ...doc.data(),
                    id: doc.id
                }
                return obj
            })
            return data
        } catch (err) {
            console.error(err);
            return null
        }
    }

    async delete({collectionName, id}){
        try {
            const docRef = doc(db, collectionName, id)
            const res = await deleteDoc(docRef)
            return res
        } catch (err) {
            console.error(err);
            return null
        }
    }

    async update({collectionName, id, changes={}}){
        try {
            const docRef = doc(db, collectionName, id)
            const res = await updateDoc(docRef, changes)
            return res
        } catch (err) {
            console.error(err);
            return null
        }
    }
}

const dbService = new DB
export default dbService