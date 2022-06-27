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

// newfn(200);
// newfn(200);
// newfn(200);
// newfn(200);


function makeIterator(start, end, step)
{
    let current = start;

    const iterator =  {

        next() {
            let result;
            if (current < end) {
                result = {
                    value: current++,
                    done: false,
                }
            }
            else {
                result = {
                    value: end,
                    done: true,
                }
            }


            return result;
        }
    }

    return iterator;
}

function* makeGenerator(start, end, step)
{
    let current = start;

    while (current <= end) {
        yield current;
        current += step;
    }

}


const gen = makeGenerator(1, 10, 3);


const iterable1 = {}
const iterable2 = {}

// const iter = makeIterator(1, 10, 3);

iterable1[Symbol.iterator] = () => makeIterator(1, 10, 3);
iterable2[Symbol.iterator] = () => makeIterator(1, 10, 3);

console.log("Iterator:")

const iter = iterable1[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());

// console.log("Generator:")
// console.log(gen.next());
// console.log(gen.next());

// for (let i of gen) {
//     console.log(i);
// }

// console.log(...gen);

console.log("Iterable1:");
console.log(...iterable1);

console.log("Iterable2:");
console.log(...iterable2);
