import React from 'react';
import { useQuery } from "react-query";
export const PracticeQuery = () => {
    const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return res.json();
    };
    const { data, status } = useQuery("users", fetchUsers);
    console.log(data, status);
    return (<>

        {data.map((user: any) => user.name)}
    </>);
};
