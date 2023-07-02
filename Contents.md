# Guide to Learn Programming with JavaScript

## Preface

- **Goal of the book**: paths for learning programming, prerequisites
- **Structure of the book**: contents, notations, code examples, visualization with connections
- **Principles**: modern, learning-focused, principles can be applied to development
- **How to use**: introduction is background information, use the learning paths
- **Notes**: more advanced technological considerations in side notes
- **About the author**: background in education and development
- **Acknowledgement**: web programming handbook

## Introduction

- **Web as a development platform**
  - Interactive web pages & web applications
  - Why the web is good for learning?
- **Core technologies of the Web**  
  (*`link`*) *MDN*
  - How the web works: HTTP, URL
  - How webpages work: HTML, JS, CSS, JSON
- **History of JavaScript**
  - Birth of JavaScript
  - Progressive enhancement
  - Node.js, SPAs

## JavaScript Basics

- **Goals**: getting started, mini-reference
- **Properties of JavaScript** (*`link`*) *Node.js, Deno, MDN*
  - Script language: runtime, browser, Node.js, Deno  
  - Dynamically typed: value vs reference  
    (*`note`*) educational considerations
  - Paradigms: imperative, functional, object-oriented  
    (*`note`*) role of paradigms, multi-paradigm languages
  - Documentation: official docs  
  - (*`note`*) ECMAScript versions: we use the "latest"
  - (*`note`*) TypeScript as a typed alternative
- **Basic syntax**
  - Statements
  - Control structures
  - Variables
  - Functions
- **Data types**
  - `number`, `string`, `boolean`, `undefined`: syntax, properties, methods
  - `array`, `object`: syntax, pass as reference
  - `function`: syntax, first-class type
- **Classes**
  - `class`: syntax  
    (*`note`*) no "real" classes, they are functions, prototypes
- **Working with data**
  - Representing data: `object`-`array`-primitive  
    (*`note`*) JSON, serialize
  - Processing data: array functions, loops on arrays and objects
  - (*`theory`*) Data-information-knowledge triangle
- **Event handling**
  - Event binding: `addEventListener`, event handler
  - Event object: properties, canceling, bubbling
  - Custom events: details
  - (*`theory`*) Event loop
- **Asynchronous programming**
  - Promises: how they work, promise states
  - `async`-`await`: how and when to use
- **Module system**
  - `import`-`export`: requires server, differences from Node.js  
    (*`note`*) Live Server
  - Structuring your code, best practices
- **Setting up the environment**
  - Code editor, browser, Node.js, Deno
  - Extensions: prettier, live server  
    (*`note`*): linting, code formatting  
    (*`note`*): for pair coding Live Share

## Developing Applications

- **Goals**: using native tech, frontend applications  
  (*`note`*) frontend frameworks
- **Prerequisite, setup**
  (*`link`*) *Setting up the environment*
  - Basic HTML, CSS
  - Code editor, browser  
- **Interactive UI** (*`link`*) *JavaScript Basics / Event handling*
  - DOM: input-output API for HTML, accessing elements  
    (*`note`*) navigating the DOM
  - Basic events: interactive elements  
    (*`note`*) watch out for data type transformations  
  - Event object: using event details, keyboard, mouse
  - (*`task`*) Screencast mode
- **UI generation**
  - Imperative: how to create and insert elements
  - Declarative: creating nested templates  
    (*`note`*) rendering libraries
  - Event delegation: why and how  
    (*`note`*) how frameworks solve it
- **State management** (*`link`*) *JavaScript Basics / Data types*
  - Storing state: what is state, UI is state representation  
  - State mutation: directly or through dedicated methods  
  - UI rendering: trigger re-render when state changes
  - (*`advanced`*) best practices for state management, classes of state
  - (*`link`*) *Slider puzzle*
- **Application architecture** (*`link`*) *JavaScript Basics / Module system*
  - State-UI-Events: interaction, data flow
  - Structuring code: purpose vs. components  
  - (*`advanced`*) web components, component-based development
  - (*`advanced`*) state libraries, unidirectional flow, reactive programming
  - (*`task`*) *Minesweeper*
- **Storing data**
  - `LocalStorage`: storing basic data on the user's computer, serialization
  - `IndexedDB`: storing structured data on the user's computer
  - (*`advanced`*) data stored on servers, BaaS concept
  - (*`task`*) *Basic Kanban board*
- **Complex examples**
  - (*`task`*) Slider puzzle
  - (*`task`*) Minesweeper
  - (*`task`*) Basic Kanban board

