class Analytics {
    private numbers: Array<number>;

    public constructor(numbers: Array<number>) {
        this.numbers = numbers
    }


    public smallerValues(value: number): Array<number> {
        return this.numbers.filter(item => item <= value);
    }

    public addition(value: number): Array<number> {
        return this.numbers.map(item => item + value);
    }

    public orderDesc(): Array<number> {
        return this.numbers.sort((a, b) => b - a)
    }

    public getNumbers(): Array<number> {
        return this.numbers;
    }


}

const sy: Analytics = new Analytics([10, 2, 6, 4, 8, 4, 76, 3, 0]);

console.log(sy.smallerValues(10));
console.log(sy.addition(10));
console.log(sy.orderDesc());

