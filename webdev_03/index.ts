export const myMean = (array: number[]): number => {
  /* TODO: add your code */
  return array.reduce((num1, num2) => num1 + num2) / array.length
};

export const getPrimes = (array: number[]): number[] => {
  /* TODO: add your code */
  const isPrime = (number): boolean => {
    for (let i = 2; i < Math.sqrt(number); i++)
      if (number % i === 0) return false
    return number > 1
  }
  return array.filter(isPrime)
};

export const partition = (
  array: number[],
  belongToGroup1: (element: number) => boolean
): { group1: number[]; group2: number[] } => {
  /* TODO: add your code */
  const arr1 = array.filter(belongToGroup1)
  const arr2 = array.filter(num => !belongToGroup1(num))
  return { group1: arr1, group2: arr2 }
};

// TODO: You should replace this any with an accurate object type in your submission!
type Doggo = {
  name: string,
  age: number,
  breed: string
};


export const makeSentences = (array: Doggo[]): string[] => {
  /* TODO: add your code */
  const isVowel = (a: string): boolean => {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(a.toLowerCase()) !== -1
  }
  const makeSentence = (dog: Doggo): string => {
    const article = isVowel(dog.breed.charAt(0)) ? 'an' : 'a';
    const grammar = dog.age > 1 ? 'years' : 'year';
    return `${dog.name} is ${dog.age.toFixed(1)} ${grammar} old and is ${article} ${dog.breed}`
  }
  return array.map(makeSentence);
};

console.log(myMean([1, 2, 3, 4, 5]));
console.log(getPrimes([1, 5, 16, 3]));
console.log(partition([1, 2, 3, 4, 5, 6], (n) => n % 3 === 0));
console.log(partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));
const doggos = [
  { name: 'Sparky', age: 3.35, breed: 'Pomeranian Husky' },
  { name: 'Oreo', age: 5.42, breed: 'Dalmatian' },
  { name: 'Stella', age: 4, breed: 'Alaskan Klee Kai' },
  { name: 'Tyler', age: 0.5, breed: 'Corgi' }
];

console.log(makeSentences(doggos));