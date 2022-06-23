function mult1000(a)
{
    return a * 1000;
}

function memo(fn)
{
    let cache = {};

    return (n) => {
        if (n in cache) {
            console.log("cached result");
            console.log(cache[n]);
            return cache[n];
        }
        else {
            res = fn(n);
            cache[n] = res;
            console.log("calculated result");
            console.log(cache[n]);
            return cache[n];
        }
    }
}

newfn = memo(mult1000);

newfn(200);
newfn(200);
newfn(200);
newfn(200);
