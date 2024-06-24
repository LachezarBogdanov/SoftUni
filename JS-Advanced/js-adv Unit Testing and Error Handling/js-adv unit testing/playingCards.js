function playingCards (face, suit){

    let cardFaces = {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 10,
        'J' : 'J',
        'Q' : 'Q',
        'K' : 'K',
        'A' : 'A'
     };

     let cardSuits = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : '\u2663'
     };

     if(cardFaces.hasOwnProperty(face) && cardSuits.hasOwnProperty(suit)) {
        return (cardFaces[face] + cardSuits[suit]).toString();
     } else {
        throw new Error;
     }

}
console.log(playingCards('1', 'C'));