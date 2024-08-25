import { login } from "../data/user.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";
import { notificationHandler } from "./notification.js";


const temp = (loginHandler) => html`
     <!-- Login Page (Only for Guest users) -->
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${loginHandler}>
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
    render(temp(createSubmitHandler(loginHandler)));

    async function loginHandler(data, form){
        let {email, password} = data;

        if(!email || !password) {
           return notificationHandler('All fields are required!');
        }

        await login(email, password);

        updateNav();
        page.redirect('/');
    }
}