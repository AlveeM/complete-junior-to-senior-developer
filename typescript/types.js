// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only " + age;
// array
var pets = ['cat', 'dog', 'egg'];
var pets2 = ['lion', 'tiger', 'lizard'];
// objects
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var no = null;
// typle
var basket;
basket = ['basketball', 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
var sizeNum = Size.Small;
// any
var whatever = 'hello';
whatever = 5;
whatever = true;
whatever = Size.Small;
// void
var sing = function () {
    console.log('lalalalal');
};
// never
var error = function () {
    throw Error('error');
};
// type RobotArmy = {
//     count: number,
//     type: string,
//     magic: string
// }
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
