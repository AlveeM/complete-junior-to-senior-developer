// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// array
let pets: string[] = ['cat', 'dog', 'egg'];
let pets2: Array<string> = ['lion', 'tiger', 'lizard'];

// objects
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let no: null = null;

// tuple
let basket: [string, number];
basket = ['basketball', 5];

// enum
enum Size { Small = 1, Medium = 2, Large = 3 };
let sizeName: string = Size[2];
let sizeNum: number = Size.Small;

// any
let whatever: any = 'hello';
whatever = 5;
whatever = true;
whatever = Size.Small;

// void
let sing = (): void => {
    console.log('lalalalal');
}

// never
let error = (): never => {
    throw Error('error');
}

// interface or type
interface RobotArmy {
    count: number,
    type: string,
    magic?: string // ? indicates optional property
}

// type RobotArmy = {
//     count: number,
//     type: string,
//     magic: string
// }

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!');
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!');
}

// function
let fightRobotArmy3 = (robots: RobotArmy):void => {
    console.log('FIGHT!');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('FIGHT!');
    return 5;
}

//  classes
class Animal {
    private sing: string = 'lalalala';
    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello, {this.sing}`;
    }
}

let lion = new Animal('RAAAWWR');
lion.greet();

// union
let confused: string | number = "hello";