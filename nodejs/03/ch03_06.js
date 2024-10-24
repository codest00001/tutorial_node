const {exec} = require('child_process');

const cmd = `dir`;

// 파라미터 

exec(cmd, (err, stdout, stderr)=>{
    if(err){
        console.log(`에러발생 : ${err}`);
        return;
    }
    console.log(stdout);
})