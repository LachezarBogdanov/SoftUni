import { login, updateNav } from "../data/user.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onLogin) => html`
     <!-- Login Page (Only for Guest users) -->
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${onLogin}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`

export async function loginView() {
    render(temp(createSubmitHandler(onLogin)));

    async function onLogin({email, password}, form) {
        if(!email || !password) {
            return alert('All fields are required!');
        }

        await login(email, password);

        updateNav();
        page.redirect('/');
    }
}