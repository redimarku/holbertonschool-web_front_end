import { useState } from "react";
import Cookies from "js-cookie"

function Index4() {

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(true);
  

    const setCookiesAndShowWelcomeMessage = (e) => {
    e.preventDefault();

    if (!firstname || !email) {
      alert("Please enter both firstname and email");
      return;
    }

    Cookies.set("Firstname", firstname, { expires: 10 });
    Cookies.set("Email", email, { expires: 10 });

    showWelcomeMessageOrForm();
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
 Cookies.remove("Firstname");
    Cookies.remove("Email");
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

          <form onSubmit={setCookiesAndShowWelcomeMessage}>
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

export default Index4;
