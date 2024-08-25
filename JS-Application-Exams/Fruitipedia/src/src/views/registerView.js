import { register } from "../data/user.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";


const temp = (onRegister) => html`
    <!-- Register Page (Only for Guest users) -->
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit=${onRegister}>
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
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>
`

export async function registerView() {
    render(temp(createSubmitHandler(onRegister)));

    async function onRegister(data, form) {
        let {email, password, 're-password': rePass} = data;

        if(!email || !password || !rePass) {
            return alert('All fields are required!');
        }

        if(password != rePass) {
            return alert('Passwords don\'t match!');
        }

        await register(email, password);

        updateNav();
        page.redirect('/');
    }
}