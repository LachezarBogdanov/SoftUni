import { register } from "../data/user.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";


const temp = (onRegister) => html`
    <!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onRegister}>
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`

export async function registerView() {
    let spanText = document.querySelector('span');

    render(temp(createSubmitHandler(onRegister)));

    async function onRegister(data) {
        let {'confirm-pass' : rePass, email, password} = data;
        
        if(!rePass || !email || !password) {
            return alert('All fields are required!');
        }

        if(password != rePass) {
            return alert('Please enter same passwords');
        }

        await register(email, password);

        spanText.textContent = `Welcome, ${email}`;
        
        updateNav();

        page.redirect('/dashboard')
    }
}