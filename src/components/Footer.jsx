import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const twitterHandle='n3rma121';
   
    return(
        <footer>
            <p>
            ©{currentYear} Nirmal Dhakal  | Contact: nirmaldhakal2032@gmail.com |
            Twitter: <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer">@{twitterHandle}</a> 
            </p>
        </footer>
    )
}