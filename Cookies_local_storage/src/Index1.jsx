import { useState } from "react";


function Index1() {

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

 	// Menyra e pare
	// const setCookie = (name, value, days) => {
	// 	let expires = "";
	// 	if (days) {
	// 		const date = new Date();
	// 		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	// 		expires = "; expires=" + date.toUTCString();
	// 	}
	// 	document.cookie = name + "=" + value + expires + "; path=/";
	// 	setMessage(`Cookie set: ${name} = ${value}`);
	// };

    // Menyra e dyte
    const setCookie = (name, value, days) => {
 const expirationDate = new Date();
 expirationDate.setDate(expirationDate.getDate() + days);

 document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};

    const setCookies = (e) =>{
         e.preventDefault();
    setCookie("Firstname", firstname, 10); 
    setCookie("Email", email, 10);        
    // console.log(document.cookie.split("; "));
    }


const showCookies = (e) =>{
  e.preventDefault();
  setMessage(document.cookie);
  // console.log(message);
}

  
  return (
    <>
       <form onSubmit={setCookies}>
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="Firstname"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <button type="submit">Log me in</button>
      </form>

      <button onClick={showCookies}>Show Cookies</button>
   {message.length > 0 ? (
  <p>Cookies: {message}</p>
) : null}
    </>
  );
}

export default Index1;