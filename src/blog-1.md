# The significance of union and intersection types in Typescript.
In typescript, Sometimes a property can take more than one data types.We use Union or Intersection types for that. 

## Union Type
Union type is formed using two or more types.Which represents the values that may be any one of those types.It uses "|" symbol to separate the types.
Example: 
```tsx
     type Value = string|number  
```
Where the type of value can be string or number.

## Intersection Type
Intersection type is formed combining  two or more types into one.Which will have the types of those other types.It uses "&" symbol to combine the types.
Example:
```tsx
    type Child={
        name:string;
        age:number
    }
    type Adult={
        name:string;
        bankBalance:number;
    }
    type People =Child & Adult;
```
Where the People type have the both types of Child and Adult



