// Definition of the structure of the User object || Useful for externalizing the structure, making the code more readable and maintainable

// Interfaces are used to define the structure of an OBJECT.
export interface User {
    id: string; 
    name: string; 
    avatar: string;
  }; 
  
  // Type Aliases are used to define the structure of a custom type (Objects, Primitives types, Unions, Intersection, Tuples, Functions...).
  // export type User = {
  //   id: string, 
  //   name: string, 
  //   avatar: string
  // }; 