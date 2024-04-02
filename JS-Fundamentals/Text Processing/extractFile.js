function extractFile (str){

    let splitedStr = str.split('\\');

    let allFile = splitedStr.pop();
    let splitedFile = allFile.split('.');
    let extansion = splitedFile.pop();
    let fileName = splitedFile.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extansion}`);

}
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx');