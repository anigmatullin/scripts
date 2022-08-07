
export function sleep(ms)
{
    function executor(resolve, reject)
    {
        setTimeout(resolve, ms);
    }

    return new Promise(executor);
}

export function getChars(c, count)
{
    if (count < 1) {
        return "";
    }

    let res = "";
    for (let i=0; i<count; i++) {
        res += c;
    }

    return res;
}

export function pbar(cur, total)
{
    // const c = String.fromCharCode(2588);
    const c = '█';
    const moveCursorUp = `\u001B[2A`;
    const green = `\u001B[32m`;
    const yellow = `\u001B[33m`;
    const reset = `\u001B[0m`;
    console.log('', moveCursorUp);

    const percentage = Math.floor( (cur/total) * 100 );

    let color = yellow;
    if (percentage == 100) {
        color = green;
    }

    const done = color + getChars(c, percentage) + reset;
    const rest = getChars('-', 100 - percentage);
    const strPercentage = color + `${percentage}%` + reset;
    const res = `[${done}${rest}]` + strPercentage;
    
    console.log(res);
    // console.log(rest);

    return percentage;
}

async function testPbar()
{
    // console.log(``);

    const max = 87;
    const delay = 100;
    
    for (let i = 0; i <= max; i++) {
        pbar(i, max);
        await sleep(delay);
    }
}

// testPbar();
