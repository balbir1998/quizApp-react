const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<scripting>", "<javascript>", "<script>"],
        ansIndex: 3,
        duration: { minute: 0, second: 10 }
    },
    {
        question: "Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
        choices: ["const", "var", "let", "static"],
        ansIndex: 2,
        duration: { minute: 0, second: 30 }
    },
    {
        question: "What is the purpose of JavaScript in web development?",
        choices: ["To structure web page", "To style web pages", "To add interactivity and dynamic content to web pages", "To store data on the server"],
        ansIndex: 2,
        duration: { minute: 0, second: 30 }
    },
    {
        question: "What will be the output of the following code snippet?",
        desc: "const obj1 = {first: 20, second: 30, first: 50}; console.log(obj1);",
        choices: ["{first: 20, second: 30}", "{first: 50, second: 30}", "{first: 20, second: 50, first: 20}", "Syntax Error"],
        ansIndex: 1,
        duration: { minute: 0, second: 30 }
    },
    {
        question: "Which method is used to convert a JSON object to a string?",
        choices: ["JSON.stringify()", "JSON.parse()", "toString()", "convertToString()"],
        ansIndex: 0,
        duration: { minute: 0, second: 45 }
    },
    {
        question: "Which operator is used to check both value and type in JavaScript?",
        choices: ["==", "=", "===", "!="],
        ansIndex: 2,
        duration: { minute: 0, second: 40 }
    },
    {
        question: "What is the result of `typeof null` in JavaScript?",
        choices: ["null", "object", "undefined", "boolean"],
        ansIndex: 1,
        duration: { minute: 1, second: 0 }
    },
    {
        question: "Which function is used to delay execution of code in JavaScript?",
        choices: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        ansIndex: 0,
        duration: { minute: 0, second: 30 }
    },
    {
        question: "Which keyword is used to prevent modification of an object?",
        choices: ["freeze", "Object.freeze()", "seal", "Object.prevent()"],
        ansIndex: 1,
        duration: { minute: 0, second: 45 }
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        choices: [".push()", ".pop()", ".shift()", ".unshift()"],
        ansIndex: 0,
        duration: { minute: 0, second: 30 }
    },
    {
        question: "How do you declare a JavaScript class?",
        choices: ["function ClassName {}", "class ClassName {}", "object ClassName {}", "declare ClassName {}"],
        ansIndex: 1,
        duration: { minute: 1, second: 0 }
    },
    {
        question: "What will the code `console.log(3 > 2 > 1)` output?",
        choices: ["true", "false", "undefined", "Error"],
        ansIndex: 1,
        duration: { minute: 1, second: 0 }
    },
    {
        question: "How can you add an event listener in JavaScript?",
        choices: ["element.addEventListener()", "element.onEvent()", "element.addEvent()", "element.listen()"],
        ansIndex: 0,
        duration: { minute: 0, second: 45 }
    },
    {
        question: "Which method removes the first element of an array?",
        choices: [".pop()", ".shift()", ".splice()", ".unshift()"],
        ansIndex: 1,
        duration: { minute: 0, second: 40 }
    },
    {
        question: "What is the output of `console.log(typeof NaN)`?",
        choices: ["number", "NaN", "undefined", "object"],
        ansIndex: 0,
        duration: { minute: 1, second: 0 }
    },
    {
        question: "Which JavaScript method can be used to iterate over an array?",
        choices: [".map()", ".forEach()", ".filter()", "All of the above"],
        ansIndex: 3,
        duration: { minute: 1, second: 0 }
    },
    {
        question: "What will be the output of `console.log(0.1 + 0.2 === 0.3)`?",
        choices: ["true", "false", "undefined", "Error"],
        ansIndex: 1,
        duration: { minute: 1, second: 0 }
    },
    {
        question: "Which symbol is used for JavaScript template literals?",
        choices: ["'", "\"", "`", "$"],
        ansIndex: 2,
        duration: { minute: 0, second: 45 }
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        choices: ["<!-- comment -->", "// comment", "/* comment */", "' comment"],
        ansIndex: 1,
        duration: { minute: 0, second: 30 }
    },
    {
        question: "Which of the following is NOT a JavaScript framework?",
        choices: ["React", "Angular", "Vue", "Django"],
        ansIndex: 3,
        duration: { minute: 0, second: 45 }
    },
    {
        question: "What does the `reduce()` method return?",
        choices: ["A new array", "The accumulated result", "The first element", "An object"],
        ansIndex: 1,
        duration: { minute: 1, second: 0 }
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        choices: ["for", "while", "do...while", "None"],
        ansIndex: 2,
        duration: { minute: 0, second: 45 }
    },
    {
        question: "What does `isNaN()` do?",
        choices: ["Checks if the value is not a number", "Converts a value to a number", "Returns true for NaN only", "Throws an error if value is NaN"],
        ansIndex: 0,
        duration: { minute: 0, second: 40 }
    },
    {
        question: "Which JavaScript object method converts a string to an integer?",
        choices: ["parseInt()", "Number()", "parseFloat()", "String()"],
        ansIndex: 0,
        duration: { minute: 0, second: 50 }
    },
    {
        question: "What will the following code return? `Boolean(0)`",
        choices: ["true", "false", "undefined", "Error"],
        ansIndex: 1,
        duration: { minute: 0, second: 45 }
    }
];

export default questions;