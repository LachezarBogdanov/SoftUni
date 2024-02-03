function trekkingMania(input) {

    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let allGuys = 0;

    for(let i = 1; i <= groups; i++) {
        let climbers = Number(input[i]);

        if(climbers <= 5) {
            musala += climbers;
        } else if(climbers <= 12) {
            monblan += climbers;
        } else if(climbers <= 25) {
            kilimandjaro += climbers;
        } else if(climbers <= 40) {
            k2 += climbers;
        } else if(climbers > 40) {
            everest += climbers;
        }
        allGuys += climbers;
    }
    let musalaPerCent = (musala / allGuys) * 100;
    let monblanPerCent = (monblan / allGuys) * 100;
    let kilimandjaroPerCent = (kilimandjaro / allGuys) * 100;
    let k2PerCent = (k2 / allGuys) * 100;
    let everestPerCent = (everest / allGuys) * 100;

    console.log(`${musalaPerCent.toFixed(2)}%`);
    console.log(`${monblanPerCent.toFixed(2)}%`);
    console.log(`${kilimandjaroPerCent.toFixed(2)}%`);
    console.log(`${k2PerCent.toFixed(2)}%`);
    console.log(`${everestPerCent.toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);