import React, { useEffect, useState } from 'react';
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore"
import { deleteHotel, hotelsCollection } from '../lib/controller';
import { NewHotelType } from '../types/hotel';
import { Button, Typography } from '@mui/material';
import Information from './Information';
import { useNavigate } from "react-router-dom"
const Card = () => {
    const [hotels, setHotels] = useState<NewHotelType[]>([])
    const navigate = useNavigate();
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
                hotels && hotels.length > 0 ? (
                    hotels.map((id) => {
                        return <>
                            <Information id={id} />
                            <Button onClick={() => { deleteHotel(id.id, navigate("/")) }}>
                                Delete Hotel</Button>
                        </>
                    })) : (<Typography> No hotel found</Typography>)
            }</>
    )
}
export default Card;