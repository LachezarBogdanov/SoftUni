function thePyramidOfKing (curBase, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let floor = 1;

    for(let currentBase = curBase; currentBase > 0; currentBase -= 2) {
        height += increment;
        let totalArea = currentBase ** 2;

        if(currentBase <= 2) {
            gold = totalArea * increment;
        } else {
            
            let stoneArea = (currentBase - 2) ** 2;
            stone += stoneArea * increment;
            if(floor % 5 === 0) {
               let lapisArea = totalArea - stoneArea;
               lapis += lapisArea * increment;
                
            } else {
                let marbleArea = totalArea - stoneArea;
                marble += marbleArea * increment;
                
            }

        }
        floor++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKing(11,
    1);