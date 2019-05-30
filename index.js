const { spawn } = require('child_process');

/**
 * 
 *     cat ./testdata.txt | grep otiai10
 * 
 */
async function main() {
    const cat = spawn('cat', ['./testdata.txt']);
    const grep = spawn('grep', ['otiai']);
    cat.stdout.pipe(grep.stdin);
    grep.stdout.on('data', (chunk) => {
        console.log('[grep]');
        console.log(chunk.toString());
    });
}

main();
