import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../lib/controller";

function Create() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [feature, setFeature] = useState("Room Only");
    const [imageUrl, setImageUrl] = useState("");

    const [stars, setStars] = useState("1");
    const [country, setCountry] = useState("");
    const [review, setReview] = useState("");
    const [includingFoodPrice, setIncludingFoodPrice] = useState("");
    const [perNight, setPerNight] = useState("");

    const navigate = useNavigate();

    const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("successfully added a new hotel");
        e.preventDefault();
        addHotel({
            title,
            description,
            feature,
            imageUrl,
            starsRating: parseInt(stars, 10),
            country,
            noOfReviews: parseInt(review, 10),
            includingFoodPrice,
            pricePerNight: perNight,
        });



        console.log("successfully added a new hotel");
        navigate("/");
    };

    return (
        <div className="create">
            <h2>Add a new hotel</h2>
            <form onSubmit={(e) => addNewHotel(e)}>
                <Box width="90%" sx={{ justifyContent: "space-evenly", m: 7 }} >

                    <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 3 }}>
                        <TextField
                            type="text"
                            required
                            fullWidth
                            label="Hotel title:"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            required fullWidth
                            label="Hotel description:"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></TextField>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 3 }}>
                        <Select
                            label="Main Feature:"
                            value={feature}
                            onChange={(e) => {
                                setFeature(e.target.value)
                            }}
                        >
                            {["Room Only", "Room with Breakfast included",
                                "Local Charges Payable at Hotel", " Free Parking for all guests",
                                "Free WiFi", "Spa and wellness centre included",
                                " Private parking at the hotel", "Restaurant & Bar",
                                "Swimming pool", "Room and Parking"
                            ].map((id) => {
                                return <MenuItem key={id} value={id}>{id}</MenuItem>
                            })}
                        </Select>
                        <TextField
                            label="Image URL Link location:"
                            type="text"
                            required fullWidth
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        /></Box>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 3 }}>
                        <Select label="Stars Rating:" value={stars} onChange={(e) => setStars(e.target.value)}>
                            {[1, 2, 3, 4, 5].map((id) => {
                                return <MenuItem key={id} value={id}> {id}
                                </MenuItem>
                            })}
                        </Select>
                        <TextField
                            label="Country:"
                            type="text"
                            required fullWidth
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 3 }}>
                        <TextField
                            label="Number of Reviews:"
                            type="number"
                            required fullWidth
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                        <TextField
                            type="text"
                            label=" Pricing Including Food ($):"
                            required fullWidth
                            value={includingFoodPrice}
                            onChange={(e) => setIncludingFoodPrice(e.target.value)}
                        /></Box>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 3 }}>
                        <TextField
                            label="Price per Night ($):"
                            type="text"
                            required fullWidth
                            value={perNight}
                            onChange={(e) => setPerNight(e.target.value)}
                        /></Box>
                    <Button type="submit">Add Hotel</Button> </Box>
            </form>
           

        </div >
    );
}

export default Create;