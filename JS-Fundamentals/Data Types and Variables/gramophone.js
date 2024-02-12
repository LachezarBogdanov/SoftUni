function gramophone(bandName, albumName, songName){

    let duration = (albumName.length * bandName.length) * songName.length / 2;
    let rotating = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${rotating} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');