function legendaryFarming(str) {

    let keyMaterial = { shards: 0, fragments: 0, motes: 0 };
    let junk = {};

    let legendaryItems = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    let curMaterials = str.split(' ');
    for (let i = 0; i < curMaterials.length; i += 2) {
        let qty = Number(curMaterials[i]);
        let material = curMaterials[i + 1].toLowerCase();

        if(keyMaterial.hasOwnProperty(material)) {
            keyMaterial[material] += qty;

            if(keyMaterial[material] >= 250) {
                console.log(`${legendaryItems[material]} obtained!`);
                keyMaterial[material] -= 250;
                break;
            } 
        } else {
            if(junk.hasOwnProperty(material)) {
                junk[material] += qty;
            } else {
                junk[material] = qty;
            }
        }
    } 

    let sortAlph =  Object.entries(keyMaterial).sort((a, b) => a[0].localeCompare(b[0]));
    let sortByDescKeys =sortAlph.sort((a, b) => b[1] - a[1]);
    
    for (let [material, qty] of sortByDescKeys) {
        console.log(`${material}: ${qty}`);
    }

    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [junkMat, junkQty] of sortedJunk) {
        console.log(`${junkMat}: ${junkQty}`);
    }

}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');