function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let checkoutButton = document.querySelector('.checkout');
   let textArea = document.querySelector('textarea');

   let cart = {};
   let totalPrice = 0;
   addButtons.forEach(button => button.addEventListener('click', addProductHandler));
   checkoutButton.addEventListener('click', checkout);

   function addProductHandler (event) {
      let product = event.currentTarget.parentElement.parentElement;
      let title = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);
      totalPrice += price;

      if(!cart[title]) {
         cart[title] = price;
      } else {
         cart[title] += price;
      }

      textArea.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
   }

   function checkout (event) {
      let products = Object.keys(cart);
      textArea.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`

      addButtons.forEach(btn => btn.setAttribute('disabled', 'disabled'));
      checkoutButton.setAttribute('disabled', 'disabled');
   }
   
}