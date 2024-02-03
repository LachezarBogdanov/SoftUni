function histogram (input){

    let countN = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
        for(let i = 1; i <= countN; i++){
            let num = Number(input[i]);
            if(num < 200){
                p1 += 1;
            }else if(num <= 399){
                p2 += 1;
            }else if(num <= 599){
                p3 += 1;
            }else if(num <= 799){
                p4 += 1;
            }else {
                p5 += 1;
            }
        }
    
        let p1Percent = (p1 / countN) * 100;
        let p2Percent = (p2 / countN) * 100;
        let p3Percent = (p3 / countN) * 100;
        let p4Percent = (p4 / countN) * 100;
        let p5Percent = (p5 / countN) * 100;
    
        console.log(`${p1Percent.toFixed(2)}%`);
        console.log(`${p2Percent.toFixed(2)}%`);
        console.log(`${p3Percent.toFixed(2)}%`);
        console.log(`${p4Percent.toFixed(2)}%`);
        console.log(`${p5Percent.toFixed(2)}%`);
    
    }
    histogram(["3",
    "1",
    "2",
    "999"]);
    