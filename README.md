 ### About the application
  This application allows users to study collections of flashcards.
  It allows users to create different categories of flashcards called "decks",
  add flashcards to those decks, then take a quiz for each with reminder.

 ### Specification
  this project created using (create-react-native-app). 

 ### Data
  I use ( AsyncStorage ) to store decks and flashcards.
  All decks data will be managed using object similar to this : 

    {
      React: {
          title: 'React',
          questions: [
          {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
          },
          {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
          }
          ]
      },
      JavaScript: {
          title: 'JavaScript',
          questions: [
          {
              question:'What is a closure?',
              answer:'The combination of a function and the lexical environment within which that function was declared.'
          }
          ]
      },
      TypeScript: {
        title: "TypeScript",
        questions: [],
      },
    }
              ############# NOTE ###########

### Installation 
To run this project locally, clone this repository or download it, then run the following commands:

 npm install 
 npm start 

 I used expo start you can also use it

NOTE:The app have been tested on Android device