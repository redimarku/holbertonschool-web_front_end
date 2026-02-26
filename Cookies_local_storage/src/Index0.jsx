import { useState } from "react";


function Index0() {

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // console.log("---firstname", firstname);
  // console.log("----email", email);

  const setCookies = (e) =>{
    e.preventDefault();

    document.cookie = `Firstname=${firstname}; path=/`;
    document.cookie = `Email=${email}; path=/`;
    console.log(document.cookie.split("; "));

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

export default Index0;