const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 , 8],
    [0, 3, 4],
    [1, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let winning = [Number('0'), Number("1"), Number("2"), 4, 6];

const result = winningCombinations.some( rows =>
    rows.forEach( (value, index) => {
        winning.forEach( (values, indexs) => {
            if (index === indexs && value === values)
                console.log(index, indexs);
        })
    })
);
