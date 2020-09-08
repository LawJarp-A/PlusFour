import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
function Home() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function clickHandler() {
        axios.post("/api/", qs.stringify({
            name
        }), {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            }
        }).then((res) => {
            setMessage(res.data.message);
        })
    }
    return (
        <div>
            <h1>PLUS FOUR</h1>
            <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <button type="submit" onClick={() => {
                clickHandler();
            }}>SUBMIT</button>
            {message ? <h2>{message}</h2> : ""}
        </div>
    )
}

export default Home;