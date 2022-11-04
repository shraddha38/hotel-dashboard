
import { collection, getFirestore, addDoc, doc, deleteDoc } from "firebase/firestore";
import { NewHotelType, AddHotelType } from "../types/hotel";
import { app } from "./firebase";
export const firestore = getFirestore(app);

export const hotelsCollection = collection(firestore, 'hotels')

export const addHotel = async (hotelData: AddHotelType) => {
    const newHotel = await addDoc(hotelsCollection, { ...hotelData });
    console.log(`The new hotel was created at ${newHotel.path}`);
};

export const deleteHotel = async (id: string, navigate: any) => {
    const document = doc(firestore, `hotels/${id}`);
    await deleteDoc(document)
    console.log(`The  hotel has been deleted`);
    navigate("/")
};

