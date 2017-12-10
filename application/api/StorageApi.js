import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'decks:mobile-flashcards';

let decksInitial = {
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
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function fetchData() {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        return results === null ? createData() : JSON.parse(results)
    });
}

export function saveData(decks) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks));
}

export function createData() {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decksInitial));
    return decksInitial;
}