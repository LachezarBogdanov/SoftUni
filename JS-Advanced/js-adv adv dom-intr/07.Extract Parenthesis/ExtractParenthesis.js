function extract(content) {
    let text = document.getElementById('content').textContent;
    let pattern = /\((?<name>\w+[\w ]*)\)/g;

   let match = pattern.exec(text);
   let words = [];

   while(match !== null) {
    words.push(match.groups.name);

    match = pattern.exec(text);
   }

    return words.join('; ');
}   