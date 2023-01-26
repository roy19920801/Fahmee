import words from "./part1.json"
import messages from "./part2.json"

export function first(words:Array<string>) {
  //Find the first element in alphabetical order for an array of strings using a loop.
  // For example, for this array: a=['my','name','is','john','doe']; the result should be 'doe'.

  for(let i =1; i < words.length; i ++) {
    let temp:string  = words[0];

    if(temp > words[i]) {
      words[0] = words[i];
      words[i] = temp;
      temp = words[0];
    }
  }

  return words[0];
  //return "to be implemented"
}


interface Message {
  userId: number,
  message: string,
  createdAt: string
}

export function second(messages:Array<Message>) {
  //  There is an array of objects with 3 fields:
  //
  // `userId` - user ID
  // `message` - text of the message
  // `createdAt` - date and time of message
  //
  // Write a function to retrieve text of the last message for every user.


  const lastMessages:Array<string> = []; //This is the variable to store the last message for each person.

  //This is the section to make a group by user ID.
  const groupBy = (objectArray:Array<Message>, property:string):any => {
    return objectArray.reduce((acc, obj) => {
      const key:number = obj[property];
      if (!acc[key]) {
          acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
    }, {});
  }
  const groupedMessages:any = groupBy(messages, 'userId');

  //This is the section to choose the last message for each user.
  for (let i = 1; i <= Object.keys(groupedMessages).length; i ++) {
    const userMessageById: Array<Message> = groupedMessages[i];
    userMessageById.sort((a,b) => {
      let x:string = a.createdAt.toLowerCase();
      let y:string = b.createdAt.toLowerCase();
      if (x > y) {return -1;}
      if (x < y) {return 1;}
      return 0;
    });

    lastMessages.push(userMessageById[0].message);
  }

  return lastMessages;
  //return "to be implemented"
}


console.log("This is result of first function: ", first(words));
console.log("/////////////////////////////////////////////////////////");
console.log("This is the result of the second function: ", second(messages));
