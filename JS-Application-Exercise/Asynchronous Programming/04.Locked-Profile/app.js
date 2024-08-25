async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');

    // Fetch user profiles from the server
    const response = await fetch(url);
    const data = await response.json();

    // Clear any existing content in the main element
    main.innerHTML = '';

    // Create profile cards for each user
    Object.values(data).forEach((user, index) => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';

        profileDiv.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${index}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index}Username" value="${user.username}" disabled readonly />
            <div id="user${index}HiddenFields" style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${index}Email" value="${user.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user${index}Age" value="${user.age}" disabled readonly />
            </div>
            <button>Show more</button>
        `;

        // Add event listener for the button
        const button = profileDiv.querySelector('button');
        button.addEventListener('click', () => {
            const hiddenFieldsDiv = profileDiv.querySelector(`#user${index}HiddenFields`);
            const lockStatus = profileDiv.querySelector(`input[name="user${index}Locked"]:checked`).value;

            if (lockStatus === 'unlock') {
                if (hiddenFieldsDiv.style.display === 'none') {
                    hiddenFieldsDiv.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenFieldsDiv.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });

        // Append the profile div to the main element
        main.appendChild(profileDiv);
    });
}