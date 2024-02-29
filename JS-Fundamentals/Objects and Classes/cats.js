function cats(arr){
    
    class Cats {
        constructor(curCatName, curCatAge) {
            this.name = curCatName;
            this.age = curCatAge;
            console.log(`${curCatName}, age ${curCatAge} says Meow`);
        }

    }
    
    for (let cat of arr) {
     let curCat = cat.split(' ');
     let curCatName = curCat[0];
     let curCatAge = Number(curCat[1]);
     let newCat = new Cats(curCatName, curCatAge);
     
    }
}
cats(['Mellow 2', 'Tom 5']);