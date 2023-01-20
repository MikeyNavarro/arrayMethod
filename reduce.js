// Step 1: watching a youtube video or google: assume already completed

// Step 2: Reducer is an array method that takes in an anonomyous, no named arrow function AKA a callback function. Reducer takes in 4 parameters: 1) your accumulator, 2) the current item you are iterating through, 3) an optional index, 4) and optional array with the same value as your array. Most commonly we just use the accumulator and the currentValue paramaters. Reducer is used to reduce your data and maniplate it how you wish.

// The accumulator is what you will eventually be returning. The accumulators value accumulates ddepending on the instructions you give it as you are iterating through your array.

// The currentValue is the element of your array that your are currently iterating over.

// we can add the accumulators inital value as an additonal parrameter at the end of the curly bracket. This value can be any type (number, array, object, boolean) and gets passed as your accumators first value. This should always be done.

// You can rename your paramters as long as you understand what they are doing. Again the accumlator is meant to be accumulated as you iterate through your array. The currentNumber is how far you are through traversing your array.

// Step 3:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const test = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0);

// output is 55

const store = [
  { name: "Iphone", price: 120 },
  { name: "Ipad", price: 90 },
  { name: "Kindle", price: 40 },
];

//  find total price

const storeTotalPrice = store.reduce((totalPrice, currentItem) => {
  // add every items price to our accumulator named total price
  return totalPrice + currentItem.price;
}, 1200);

// output 1450

const dogs = [
  { name: "Buddy", goodBoy: true },
  { name: "Lucky", goodBoy: true },
  { name: "Sarah Jessica Parker", goodBoy: false },
];

// print a dogs name if that dog is a goodboy

const myGoodBoys = dogs.reduce((accumulator, currentDog) => {
  if (currentDog.goodBoy) {
    // spread operator... accumulator = all my values that are currently in my accumulator + dog name
    // can also use .push(currentDog.name)
    accumulator = [...accumulator, currentDog.name];
  }
  return accumulator;
}, []);

// output = [Buddy, Lucky]

const nested = [[1], [2], [4], [3], [7], [9], [5], [8], [6]];

const noNest = nested.reduce((accumulator, currentElement) => {
  // concat merges two arrays and returns a third with their combines values
  accumulator = currentElement.concat(accumulator);
  return accumulator;
}, []);

// output = [1,2,4,3,7,9,5,8,6]

const someNested = [[1], 2, [3, 4, 5], 6, [7], [8], 9];

// current = [1]
// nested = []
// current = [1]

const noMoreNested = (arr) => {
  someNewArray = arr.reduce((accumulator, current) => {
    // is my current an array
    if (Array.isArray(current)) {
      accumulator = current.concat(accumulator);
      noMoreNested(accumulator, current);
    } else {
      accumulator = [...accumulator, current];
    }
    return accumulator;
    // no add current to accumulator
  }, []);
  return someNewArray.sort();
};

console.log(noMoreNested(someNested));
