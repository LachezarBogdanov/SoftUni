import { login } from "../data/user.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";


const temp = (onLogin) => html`
    <!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${onLogin}>
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`

export async function loginView() {
    let spanText = document.querySelector('span');

    render(temp(createSubmitHandler(onLogin)));

    async function onLogin(data) {
        let {email, password} = data;

        if(!email || !password) {
            return alert('All fields are required!');
        }

        await login(email, password);

        spanText.textContent = `Welcome, ${email}`;
        
        updateNav();
        page.redirect('/dashboard');
    }
}