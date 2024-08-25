const firstNameRef = document.querySelector('input[name=firstName]');
const lastNameRef = document.querySelector('input[name=lastName]');
const numberRef = document.querySelector('input[name=facultyNumber]');
const gradeRef = document.querySelector('input[name=grade]');
const buttonSubmit = document.getElementById('submit');
let url = 'http://localhost:3030/jsonstore/collections/students';
let tbody = document.querySelector('tbody');
onLoad();

buttonSubmit.addEventListener('click', onSubmit);

    async function onSubmit(e) {
        debugger
        e.preventDefault();
        if(!firstNameRef.value || !lastNameRef.value || !numberRef.value || !gradeRef.value) {
            return;
        }

        let data = {
            firstName: firstNameRef.value,
            lastName: lastNameRef.value,
            facultyNumber: numberRef.value,
            grade: gradeRef.value
        }

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(data)
        });

        tbody.innerHTML = '';
        onLoad();

        firstNameRef.value = '';
        lastNameRef.value = '';
        numberRef.value = '';
        gradeRef.value = '';
    }

    async function onLoad() {

        let response = await fetch(url);
        let data = await response.json();
        
        Object.values(data).forEach(el => {
            let tr = document.createElement('tr');
    
            tr.innerHTML = `
            <td>${el.firstName}</td> 
            <td>${el.lastName}</td>
            <td>${el.facultyNumber}</td>
            <td>${el.grade}</td>
            ` 
            tbody.appendChild(tr);
        })
    }

   




