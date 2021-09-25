import React from "react";

export default function Footer(){
    var year=new Date().getFullYear();
    return(
        <footer>Copyright@{year}</footer>
    );
}