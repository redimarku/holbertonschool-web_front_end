import { useState } from "react";


function Index3() {

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(true);
  

    const setCookie = (name, value, days) => {
 const expirationDate = new Date();
 expirationDate.setDate(expirationDate.getDate() + days);

 document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};

  const setCookies = (e) => {
  e.preventDefault();

  if (!firstname || !email) {
    alert("Please enter both firstname and email");
    return;
  }

  setCookie("Firstname", firstname, 10); 
  setCookie("Email", email, 10);  

  showWelcomeMessageOrForm();
  

console.log(getCookie("Firstname"))
console.log(getCookie("Email"))


};

 const getCookie = (name) => {
 const cookies = document.cookie
   .split("; ")
   .find((el) => el.startsWith(`${name}=`));

 return cookies ? cookies.split("=")[1] : null;
};

    
const showCookies = (e) =>{
  e.preventDefault();
  setMessage(`Email: ${email} - Firstname: ${firstname}`);
  // console.log(message);
}

//-------------------

const showForm = () => setOpen(true);

const hideForm = () => setOpen(false);

const deleteCookiesAndShowForm =()=>{
 setCookie("Firstname", "", -1);
    setCookie("Email", "", -1);
    showForm();
}

const showWelcomeMessageOrForm = () =>{
    //  const firstnameCookie = getCookie("Firstname");

     if(firstname.length > 0){
        hideForm();
     } else{
        showForm();
     }

}
  
  return (
    <>
    
    {isOpen ? (
        /* -------- LOGIN FORM -------- */
        <div>
          <h2>Login to the website</h2>

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
        </div>
      ) : (
        /* -------- WELCOME -------- */
        <h1>
          Welcome {firstname}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              deleteCookiesAndShowForm();
            }}
            style={{
              fontWeight: "normal",
              fontStyle: "italic",
              marginLeft: "10px",
            }}
          >
            (logout)
          </a>
        </h1>
      )}
    </>
  );
}

export default Index3;