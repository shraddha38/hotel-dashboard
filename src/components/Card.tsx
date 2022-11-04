import React, { useEffect, useState } from 'react';
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore"
import { hotelsCollection } from '../lib/controller';
import { NewHotelType } from '../types/hotel';
import { Typography } from '@mui/material';
import Information from './Information';
const Card = () => {
    const [hotels, setHotels] = useState<NewHotelType[]>([])

    useEffect(() => {
        onSnapshot(
            hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
                setHotels(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                }))
            }
        )
    }, [])
    return (
        <>
            <Typography variant="h2" fontFamily={'cursive'} sx={{ mt: 4 }}>
                All Hotels
            </Typography>
            {
                hotels && hotels.length ? (
                    hotels.map((id) => {
                        return <Information id={id} />
                    })) : (<Typography> No hotel found</Typography>)



            }</>
    )
}
export default Card;