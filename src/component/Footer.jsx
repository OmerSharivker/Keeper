import React from "react";
const copyright= new Date().getFullYear();
console.log(copyright);
function Footer(){
return (<footer><p>Copyright ©️{copyright}</p></footer>);
}

export default Footer;