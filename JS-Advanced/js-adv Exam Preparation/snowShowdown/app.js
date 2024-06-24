window.addEventListener("load", solve);

function solve() {
    const addBtn = document.querySelector('.add-btn');
    const snowManNameRef = document.getElementById('snowman-name');
    const snowManHeightRef = document.getElementById('snowman-height');
    const locationRef = document.getElementById('location');
    const creatorNameRef = document.getElementById('creator-name');
    const specialAtrRef = document.getElementById('special-attribute');
    const snowmanPreview = document.querySelector('.snowman-preview');
    const snowList = document.querySelector('.snow-list');
    const mainInfo = document.querySelector('main');
    const backImg = document.getElementById('back-img');
    const body = document.querySelector('.body');

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
        if(!snowManNameRef.value || !snowManHeightRef.value || !locationRef.value || !creatorNameRef.value || !specialAtrRef.value) {
          return;
        }

        let liEl = createLiItem(snowManNameRef.value, snowManHeightRef.value, locationRef.value, creatorNameRef.value, specialAtrRef.value);
        snowmanPreview.appendChild(liEl);
        addBtn.disabled = 'true';

        snowManNameRef.value = '';
        snowManHeightRef.value = '';
        locationRef.value = '';
        creatorNameRef.value = '';
        specialAtrRef.value = '';
    })


    function createLiItem (name, height, location, creator, specialAtribute) {
      let li = document.createElement('li');
      li.classList.add('snowman-info');
      
      let article = document.createElement('article');
      let pName = document.createElement('p');
      pName.textContent = `Name: ${name}`;
      let pHeight = document.createElement('p');
      pHeight.textContent = `Height: ${height}`;
      let pLocation = document.createElement('p');
      pLocation.textContent = `Location: ${location}`;
      let pCreator = document.createElement('p');
      pCreator.textContent = `Creator: ${creator}`;
      let pAttribute = document.createElement('p');
      pAttribute.textContent = `Attribute: ${specialAtribute}`;

      let divForBtns = document.createElement('div');
      divForBtns.classList.add('btn-container');
      let editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit';

      editBtn.addEventListener('click', (e) => {
        snowManNameRef.value = name;
        snowManHeightRef.value = height;
        locationRef.value = location;
        creatorNameRef.value = creator;
        specialAtrRef.value = specialAtribute;

        e.currentTarget.parentElement.parentElement.remove();
        addBtn.disabled = '';
      })

      let nextBtn = document.createElement('button');
      nextBtn.textContent = 'Next';
      nextBtn.classList.add('next-btn');

      nextBtn.addEventListener('click', (e) => {
        e.currentTarget.parentElement.parentElement.remove();

        let li = document.createElement('li');
        li.classList.add('snowman-content');
        
        let article = document.createElement('article');
        let pName = document.createElement('p');
        pName.textContent = `Name: ${name}`;
        let pHeight = document.createElement('p');
        pHeight.textContent = `Height: ${height}`;
        let pLocation = document.createElement('p');
        pLocation.textContent = `Location: ${location}`;
        let pCreator = document.createElement('p');
        pCreator.textContent = `Creator: ${creator}`;
        let pAttribute = document.createElement('p');
        pAttribute.textContent = `Attribute: ${specialAtribute}`;
        let sendBtn = document.createElement('button');
        sendBtn.classList.add('send-btn');
        sendBtn.textContent = 'Send';

        sendBtn.addEventListener('click', (e) => {
          mainInfo.remove();

          backImg.hidden = false;

          let backBtn = document.createElement('button');
          backBtn.textContent = 'Back';
          backBtn.classList.add('back-btn');
          body.appendChild(backBtn);

          backBtn.addEventListener('click', (e) => {
           window.location.reload();
          })

        })

        article.appendChild(pName);
        article.appendChild(pHeight);
        article.appendChild(pLocation);
        article.appendChild(pCreator);
        article.appendChild(pAttribute);
        article.appendChild(sendBtn);
        li.appendChild(article);

        snowList.appendChild(li);
      })

      article.appendChild(pName);
      article.appendChild(pHeight);
      article.appendChild(pLocation);
      article.appendChild(pCreator);
      article.appendChild(pAttribute);

      divForBtns.appendChild(editBtn);
      divForBtns.appendChild(nextBtn);

      li.appendChild(article);
      li.appendChild(divForBtns);

      return li;
    }
}
