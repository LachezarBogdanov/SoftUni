function solve() {
    const textAreas = document.querySelectorAll('textarea');
    const inputValues = textAreas[0];
    const outputArea = textAreas[1];

    const buttons = document.querySelectorAll('button');
    const generateBtn = buttons[0];
    const buyBtn = buttons[1];
    const tableTr = document.querySelector('tbody');

    generateBtn.addEventListener('click', generateObj);
    buyBtn.addEventListener('click', onBuyBtn);

    function generateObj () {
        let valueObjs = JSON.parse(inputValues.value);
        
        for (let obj of valueObjs) {
          let createTr = document.createElement('tr');
          createTr.innerHTML = 
                        '<td>' +
                        `<img src=${obj.img}>`+
                        '</td>'+
                        '<td>' +
                        `<p>${obj.name}</p>` +
                        '</td>' +
                        '<td>' +
                        `<p>${obj.price}</p>` +
                        '</td>' +
                        '<td>' +
                        `<p>${obj.decFactor}</p>` +
                        '</td>' +
                        '<td>' +
                        '<input type="checkbox">' +
                        '</td>';

                        tableTr.append(createTr);
                        
        }
    }

    function onBuyBtn () {
      const checkboxes = Array.from(document.querySelectorAll('input'));
      let checked = checkboxes.filter(x => x.checked);
      
      let names = [];
      let totalPrice = 0;
      let sumDecFactor = 0;

      for (let el of checked) {
        let parentTr = el.parentElement.parentElement;
        let [imgTd, nameTd, priceTd, decodeTd] = parentTr.children;
       
        names.push(nameTd.children[0].textContent);
        totalPrice += Number(priceTd.children[0].textContent);
        sumDecFactor += Number(decodeTd.children[0].textContent);
      }

      let avrDecore = sumDecFactor / names.length;

      outputArea.value += `Bought furniture: ${names.join(', ')}\n`
      outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
      outputArea.value += `Average decoration factor: ${avrDecore}`
    }
}