window.addEventListener("load", solve);

function solve() {
 const nameInput = document.getElementById('gem-name');
 const colorInput = document.getElementById('color');
 const caratsInput = document.getElementById('carats');
 const priceInput = document.getElementById('price');
 const typeInput = document.getElementById('type');
 const addBtn = document.getElementById('add-btn');
 const previewList = document.getElementById('preview-list');
 const collectionList = document.getElementById('collection');

 addBtn.addEventListener('click', addBtnWork);


 function addBtnWork (event){
    const nameInputValue = nameInput.value;
    const colorInputValue = colorInput.value;
    const caratsInputValue = caratsInput.value;
    const priceInputValue = priceInput.value;
    const typeInputValue = typeInput.value;

    if(nameInputValue && colorInputValue && caratsInputValue && priceInputValue && typeInputValue) {
         let item = createElementForPreview(nameInputValue, colorInputValue, caratsInputValue, priceInputValue, typeInputValue);
        previewList.appendChild(item);

        addBtn.disabled = true;
        nameInput.value = '';
        colorInput.value = '';
        caratsInput.value = '';
        priceInput.value = '';
        typeInput.value = '';
    }
 }

 function createElementForPreview (name, color, caratsNum, priceNum, type){
    let liItem = document.createElement('li');
         liItem.classList.add('gem-info');
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = name;
    let pColor = document.createElement('p');
    pColor.textContent = `Color: ${color}`;
    let pCarat = document.createElement('p');
    pCarat.textContent = `Carats: ${caratsNum}`;
    let pPrice = document.createElement('p');
    pPrice.textContent = `Price: ${priceNum}$`;
    let pType = document.createElement('p');
    pType.textContent = `Type: ${type}`;

    let btnSaveToCollection = document.createElement('button');
    btnSaveToCollection.textContent = 'Save to Collection';
    btnSaveToCollection.classList.add('save-btn');
    btnSaveToCollection.addEventListener('click', (e) => {
      let makeliEl = makeElForCollection(name, color, caratsNum, priceNum, type);
      collectionList.appendChild(makeliEl);
      e.currentTarget.parentElement.remove();
      addBtn.disabled = false;
    })


    let btnEditInfo = document.createElement('button');
    btnEditInfo.textContent = 'Edit Information';
    btnEditInfo.classList.add('edit-btn');

    btnEditInfo.addEventListener('click', (e) => {
        nameInput.value = name;
    colorInput.value = color;
    caratsInput.value = caratsNum;
    priceInput.value = priceNum;
    typeInput.value = type;

    e.currentTarget.parentElement.remove();
    addBtn.disabled = false;
    });
    
    let btnCancel = document.createElement('button');
    btnCancel.textContent = 'Cancel';
    btnCancel.classList.add('cancel-btn');
    btnCancel.addEventListener('click', (e) => {
      e.currentTarget.parentElement.remove();
      addBtn.disabled = false;
    })
    
    article.appendChild(h4);
    article.appendChild(pColor);
    article.appendChild(pCarat);
    article.appendChild(pPrice);
    article.appendChild(pType);
    liItem.appendChild(article);
    liItem.appendChild(btnSaveToCollection);
    liItem.appendChild(btnEditInfo);
    liItem.appendChild(btnCancel);
    
    return liItem;
 }

   function makeElForCollection(name, color, caratsNum, priceNum, type) {
      let liElement = document.createElement('li');
      let pElement = document.createElement('p');
      pElement.textContent = `${name} - Color: ${color}/ Carats: ${caratsNum}/ Price: ${priceNum}/ Type: ${type}`;
      liElement.appendChild(pElement);

      return liElement;
   }
}
