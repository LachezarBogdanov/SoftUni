window.addEventListener('load', solve);

function solve() {
        const carModelRef = document.getElementById('car-model');
        const carYearRef = document.getElementById('car-year');
        const partNameRef = document.getElementById('part-name');
        const partNumberRef= document.getElementById('part-number');
        const conditionRef = document.getElementById('condition');
        const btnNext = document.getElementById('next-btn');
        let infoListItem = document.querySelector('.info-list');
        let confirmList = document.querySelector('.confirm-list');
        let image = document.getElementById('complete-img');
        let pForOrder = document.getElementById('complete-text');

        btnNext.addEventListener('click', (e) => {
                e.preventDefault();
                
                if(carModelRef.value === '' || partNameRef.value === '' || partNumberRef.value === '' || conditionRef.value === '' || carYearRef.value === '' || carYearRef.value < 1980 || carYearRef.value > 2023) {
                        return;
                }

                let liElement = createLi(carModelRef.value, carYearRef.value, partNameRef.value, partNumberRef.value, conditionRef.value);
                infoListItem.appendChild(liElement);
                btnNext.disabled = 'true';

                carModelRef.value = '';
                carYearRef.value = '';
                partNameRef.value = '';
                partNumberRef.value = '';
                conditionRef.value ='';
                
        })
        
        function createLi(model, year, name, numberValue, condition) {
                let li = document.createElement('li');
                li.classList.add('part-content');
                let article = document.createElement('article');
                let pModel = document.createElement('p');
                pModel.textContent = `Car Model: ${model}`;
                let pYear = document.createElement('p');
                pYear.textContent = `Car Year: ${year}`;
                let pName = document.createElement('p');
                pName.textContent = `Part Name: ${name}`;
                let pNumber = document.createElement('p');
                pNumber.textContent = `Part Number: ${numberValue}`;
                let pCondition = document.createElement('p');
                pCondition.textContent = `Condition: ${condition}`;
                let editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.classList.add('edit-btn');
                
                editBtn.addEventListener('click', (e) => {
                               carModelRef.value = model;
                               carYearRef.value = year;
                               partNameRef.value = name;
                               partNumberRef.value = numberValue;
                               conditionRef.value = condition;

                               e.currentTarget.parentElement.remove();
                                btnNext.disabled = '';

                                       });

                let continueBtn = document.createElement('button');
                continueBtn.textContent = 'Continue';
                continueBtn.classList.add('continue-btn');

                continueBtn.addEventListener('click', (e) => {
               
                 let liToTransfer = e.currentTarget.parentElement;
                 
                 Array.from(liToTransfer.querySelectorAll('button')).forEach(el => el.remove());
                 
                 let confirmBtn = document.createElement('button');
                 confirmBtn.textContent = 'Confirm';
                 confirmBtn.classList.add('confirm-btn');

                 confirmBtn.addEventListener('click', (e) => {

                        e.currentTarget.parentElement.remove();
                        image.style.visibility = 'visible';
                        pForOrder.textContent = 'Part is Ordered!';
                 })
                 
                 let cancelBtn = document.createElement('button');
                 cancelBtn.textContent = 'Cancel';
                 cancelBtn.classList.add('cancel-btn');

                 cancelBtn.addEventListener('click', (e) => {
                        e.currentTarget.parentElement.remove();
                        btnNext.disabled = '';
                 })     
                 
                 liToTransfer.appendChild(confirmBtn);
                 liToTransfer.appendChild(cancelBtn);

                 confirmList.appendChild(liToTransfer);
                });
                
                article.appendChild(pModel);
                article.appendChild(pYear);
                article.appendChild(pName);
                article.appendChild(pNumber);
                article.appendChild(pCondition);
                li.appendChild(article);
                li.appendChild(editBtn);
                li.appendChild(continueBtn);
                

                return li;
        }
}


    
    
