# binary-sort

## Instalation
After you clone this repo you need to move inside ```binary-sort``` directory and run command

``` npm install```

> To run ```npm install``` you must have installed **node.js**

## Description
Binary search works only for sorted arrays

### Example input :
```typescript
const testArray: number = [31, 32, 44, 56, 61, 76];
binarySearch(testArray, 44);
```
### Output of example input :
This method will return index of founded value. If value does not exist in this array method will return -1
```typescript
2
```

**binarySort** method takes two parametrs:

 - **array** -> it is the list which you want to sort
 - **value** -> value to search

## How it works
On this graphic you can see how **binary-sort** algortihm works :
<p align="center">
  <img src="https://i.stack.imgur.com/At5nF.jpg=true" alt="BinarySearch"/>
</p>
