'use client';

import { signInWithGooglePopup } from "../lib/firebaseauth.utils"
import { useState } from 'react';
import Home from "./home";


export default function SignIn() {
    const [isLogged, setIsLogged] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);

        setIsLogged(true);

        setDisplayName(response.user.displayName ?? "");
        setEmail(response.user.email ?? "");
    }

    if (isLogged) return <Home displayName={displayName} email={email}></Home>

    return (
        <div>
            <button className="text-black bg-white p-4 rounded-lg" onClick={logGoogleUser}>Sign in With Google</button>
        </div>
    )
}
