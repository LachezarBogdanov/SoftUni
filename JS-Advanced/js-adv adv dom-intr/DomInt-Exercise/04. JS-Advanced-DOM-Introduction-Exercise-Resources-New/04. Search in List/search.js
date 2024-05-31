function search() {
   let searchText = document.getElementById('searchText').value;
   let townsOfLi = Array.from(document.querySelectorAll('ul li'));
   let towns = [];
   
   for (let town of townsOfLi) {
      towns.push(town.textContent);
   }

   for (let city of towns) {
         for (let curTry of townsOfLi) {
            if(curTry.textContent === city) {
               curTry.style.textDecoration = '';
               curTry.style.fontWeight = '';
            }
         }
      }

      
      let includesCities = [];
      for (let city of towns) {
         if(city.includes(searchText)) {
            includesCities.push(city);
            for (let curTry of townsOfLi) {
               if(curTry.textContent === city) {
                  curTry.style.textDecoration = 'underline';
                  curTry.style.fontWeight = 'bold';
               }
            }
         }
         
      }
      
      let res = document.getElementById('result');
      res.textContent = `${includesCities.length} matches found`
   }
   
