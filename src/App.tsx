function App() {

  let name: string;
  // Union in TS
  let age: number | string;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string]

  type Person = {
    name: string,
    age?: number
  }

  type Animals = Person & {
    breed: string,
    sound: string,
  }

  let animal: Animals;
  animal = {
    name: "Elephant",
    breed: "Mammoth",
    sound: "rumble",
    age: 43
  }  

  console.log(animal.breed);

  let printFun = (newValue: string | number) => {
    console.log(newValue);
  }

  printFun("Khushuuuu");

  // let printName : Function;

  let printName: (firstName: string ) => void
  printName = (firstName: string) => {
    console.log(firstName)
  }

  printName("New Name");
  
  interface Anime {
    name: string;
    isRecommended?: boolean;
    genre?: string;
    rating?: number;
    description?: string;
  }

  interface Cartoons extends Anime {
    channel?: string,
    isFavourite?: boolean,
  }

  let tomAndJerry: Cartoons
  tomAndJerry = {
    name: "Tom and Jerry"
  }

  console.log(tomAndJerry.name);

  let Apothecary: Anime
  Apothecary = {
    name: 'Mao Mao',
    genre: 'Mystery',
    isRecommended: true,
    rating: 9,
    description: "The Apothecary Diaries"
  }

  console.log(Apothecary.description);

  name = "Itachi Uchiha"
  age = 23;
  role = [1, "Developer"]
  isStudent = false;
  hobbies = ["coding", "music", "football"]

  let person : Person = {
    name: "Khushuu",
    age: 23
  }

  let multiplePersons : Person[];

  multiplePersons = [
    {name: 'Naruto', age: 12},
    {name: 'Sasuke', age:13},
    {name: 'Sakura', age:13}
  ]

  console.log(person.name)
  
  const user = {
    name: "Khushboo Chaudhary",
    location: "Boisar",
    Age: 23,
  }
  console.log(user.location);
  
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App
