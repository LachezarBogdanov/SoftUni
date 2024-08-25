
import { register } from "../data/user.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";


const registerTemp = (callback) => html`
    <!-- Register Page (Only for Guest users) -->
  <section id="register">
    
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Register</h2>
      <form @submit=${callback} class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
   
  </section> 
`

export function registerView(){
    render(registerTemp(createSubmitHandler(onRegister)));

    async function onRegister({email, password, ['re-password']: repass}, form) {
        if(!email || !password || !repass) {
            return alert('All fields are required');
        }

        if(password != repass) {
            return alert("Passwords don't match!");
        }

        await register(email, password);
        form.reset();

        updateNav();
        page.redirect('/');
    }
}