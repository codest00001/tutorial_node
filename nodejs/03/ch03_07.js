const fs = require('fs');
const path = require('path');

const newFilePath = path.join(__dirname, 'a3','b3','c3','d3.txt');
console.log(newFilePath);
console.log(path.parse(newFilePath).dir);//디렉토리까지만 나옴
console.log(path.parse(newFilePath).base);//파일명만 나옴

