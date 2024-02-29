function songs(arr) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songsArr = [];
    let numberOfSongs = arr.shift();
    let typeOfSong = arr.pop();

    for(let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');
        let music = new Song(type, name, time);
        songsArr.push(music);
    }

    if(typeOfSong === 'all') {
        songsArr.forEach((a) => console.log(a.name));
    } else {
        let filtered = songsArr.filter((b) => b.type === typeOfSong);
        filtered.forEach((c) => console.log(c.name));
    }


}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);