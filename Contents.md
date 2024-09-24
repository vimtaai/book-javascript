# Guide to Learn Programming with JavaScript

## Introduction

- [x] **Goal of the guide**: paths for learning programming, prerequisites
- [x] **Structure of the guide**: contents, notations, code examples, visualization with connections
- [x] **Principles**: modern, learning-focused, principles can be applied to development
- [x] **How to use**: introduction is background information, use the learning paths
- [x] **Notes**: more advanced technological considerations in side notes
- [x] **About the author**: background in education and development
- [x] **Acknowledgement**: web programming handbook

## Web Basics

- [ ] **Web as a development platform**
  - [ ] Interactive web pages & web applications
  - [ ] Why the web is good for learning?
- [ ] **Core technologies of the Web**  
  (*`link`*) *MDN*
  - [ ] How the web works: HTTP, URL
  - [ ] How webpages work: HTML, JS, CSS, JSON
- [ ] **History of JavaScript**
  - [ ] Birth of JavaScript
  - [ ] Progressive enhancement
  - [ ] Node.js, SPAs

## JavaScript Basics

- [x] **Goals**: getting started, mini-reference
- [x] **Properties of JavaScript** (*`link`*) *Node.js, Deno, MDN*
  - [x] Script language: runtime, browser, Node.js, Deno  
  - [x] Dynamically typed: value vs reference  
    (*`note`*) educational considerations
  - [x] Paradigms: imperative, functional, object-oriented  
    (*`note`*) role of paradigms, multi-paradigm languages
  - [x] Documentation: official docs  
  - [x] (*`note`*) ECMAScript versions: we use the "latest"
  - [x] (*`note`*) TypeScript as a typed alternative
- [x] **Basic syntax**
  - [x] Statements
  - [x] Control structures
  - [x] Variables
- [x] **Data types**
  - [x] `number`, `string`, `boolean`, `undefined`: syntax, properties, methods
  - [x] `array`, `object`: syntax, pass as reference
  - [x] `function`: syntax, first-class type
- [x] **Classes**
  - [x] `class`: syntax  
    (*`note`*) no "real" classes, they are functions, prototypes
  - [x] Fields, methods
  - [x] Getters, setters
  - [x] Private fields and methods
- [x] **Working with data**
  - [x] Representing data: `object`-`array`-primitive  
    (*`note`*) JSON, serialize
  - [x] Processing data: array functions, loops on arrays and objects
  - [ ] (*`theory`*) Data-information-knowledge triangle
- [ ] **Event handling**
  - [ ] Event binding: `addEventListener`, event handler
  - [ ] Event object: properties, canceling, bubbling
  - [ ] Custom events: details
  - [ ] (*`theory`*) Event loop
- [x] **Error handling**
  - [x] Error type
  - [x] Try-catch
  - [x] Custom errors
- [x] **Asynchronous programming**
  - [x] Promises: how they work, promise states
  - [x] `async`-`await`: how and when to use
- [ ] **Module system**
  - [ ] `import`-`export`: requires server, differences from Node.js
    (*`note`*) Live Server
  - [ ] Structuring your code, best practices
  - [ ] Built-in modules: Node, Deno

## Tools and Coding Best Practices

- [x] **Setting up the environment**
  - [x] Code editor, browser, Node.js, Deno
  - [ ] Extensions: prettier, live server  
    (*`note`*): linting, code formatting  
    (*`note`*): for pair coding Live Share
- [ ] Clean code (*`link`*)
  - [ ] Naming conventions
  - [ ] Function usage best practices

## Developing Applications

- [ ] **Goals**: using native tech, frontend applications  
  (*`note`*) frontend frameworks
- [ ] **Prerequisite, setup** (*`link`*) *JavaScript Basics / Setting up the environment*
  - [ ] Basic HTML, CSS
  - [ ] Code editor, browser  
- [ ] **Interactive UI** (*`link`*) *JavaScript Basics / Event handling*
  - [ ] DOM: input-output API for HTML, accessing elements  
    (*`note`*) navigating the DOM
  - [ ] Basic events: interactive elements  
    (*`note`*) watch out for data type transformations  
  - [ ] Event object: using event details, keyboard, mouse
  - [ ] (*`task`*) Screencast mode
- [ ] **UI generation**
  - [ ] Imperative: how to create and insert elements
  - [ ] Declarative: creating nested templates  
    (*`note`*) rendering libraries
  - [ ] Event delegation: why and how  
    (*`note`*) how frameworks solve it
- [ ] **State management** (*`link`*) *JavaScript Basics / Data types*
  - [ ] Storing state: what is state, UI is state representation  
  - [ ] State mutation: directly or through dedicated methods  
  - [ ] UI rendering: trigger re-render when state changes
  - [ ] (*`advanced`*) best practices for state management, classes of state
  - [ ] (*`link`*) *Slider puzzle*
- [ ] **Application architecture** (*`link`*) *JavaScript Basics / Module system*
  - [ ] State-UI-Events: interaction, data flow
  - [ ] Structuring code: purpose vs. components  
  - [ ] (*`advanced`*) web components, component-based development
  - [ ] (*`advanced`*) state libraries, unidirectional flow, reactive programming
  - [ ] (*`task`*) *Minesweeper*
- [ ] **Storing data**
  - [ ] `LocalStorage`: storing basic data on the user's computer, serialization
  - [ ] `IndexedDB`: storing structured data on the user's computer
  - [ ] (*`advanced`*) data stored on servers, BaaS concept
  - [ ] (*`task`*) *Basic Kanban board*
- [ ] **Complex examples**
  - [ ] (*`task`*) Slider puzzle
  - [ ] (*`task`*) Minesweeper
  - [ ] (*`task`*) Basic Kanban board

## Graphics and Games

- [ ] **Goals**: basics of programming through graphics and games, no library
- [ ] **Prerequisite, setup** (*`link`*) *JavaScript Basics / Setting up the environment*
  - [ ] Code editor, browser
  - [ ] Basic mathematics (coordinate geometry, trigonometry)
- [ ] **Basics of computer graphics**
  - [ ] Raster vs. vector graphics
  - [ ] Coordinate system: `(0,0)`, translation
  - [ ] Color theory: RGB, hex colors, color spaces
- [ ] **The HTML Canvas** (*`link`*) *JavaScript Basics / Data types*
  - [ ] Properties of canvases
  - [ ] Simple shapes: drawing shapes, fill and stroke
  - [ ] Paths: line types, closing the path, line properties
  - [ ] Text: drawing text, text properties
  - [ ] Images: drawing images
  - [ ] Drawing functions: parameters, translate
  - [ ] (*`advanced`*) Sprites
- [ ] **User interaction** (*`link`*) *JavaScript Basics / Event handling*
  - [ ] Events: listening to global events
  - [ ] Event details: event object
  - [ ] (*`task`*) *Simple drawing application*
- [ ] **Simulations and games**
  - [ ] Simulation loop: timers, loop components
  - [ ] (`*advanced*`) Animation frames: advanced loop, timing
  - [ ] Games: simulations with events, game loop
  - [ ] Collision: how to detect
  - [ ] Stages: multi-stage games
  - [ ] (*`task`*) *Breakout, Infinite runner*
- [ ] **Structuring the code** (*`link`*) *JavaScript Basics / Module system*
  - [ ] Game objects: sprites with classes, translate
  - [ ] State-UI-Events: interaction, data flow
  - [ ] Structuring code: purpose vs. components
  - [ ] (*`task`*) *Top-down shooter*
- [ ] **Complex examples**
  - [ ] (*`task`*) Simple drawing application
  - [ ] (*`task`*) Breakout
  - [ ] (*`task`*) Infinite runner
  - [ ] (*`task`*) Top-down shooter

## Turtles and Simulations

- [ ] **Goals**: computational thinking through agent-based programming  
  (*`note`*) we could build it natively with canvases, we use Agent.js
- [ ] **Prerequisite, setup** (*`link`*) *JavaScript Basics / Setting up the environment*
  - [ ] Agent JS
  - [ ] Code editor, browser
- [ ] **Basic drawing** (*`link`*) *JavaScript Basics / Data types*
  - [ ] HTML Canvas: basics, dimensions, coordinates, context  
    (*`note`*) Agent JS as an alternative
  - [ ] Sequences: drawing with sequences
  - [ ] Loops: repeats, basic math
  - [ ] Turtle properties: color, pen
  - [ ] Procedures: functions with side effects
  - [ ] Recursion: recursive patterns
  - [ ] Multi-agent: multiple turtles, pass agent to function
- [ ] **Simulations**
  - [ ] Timers: animation, callbacks
  - [ ] Random: randomization
  - [ ] Cellular automata: field, neighbors
  - [ ] Complex simulations: agents and fields combined
  - [ ] (*`task`*) *Predator-prey model*
- [ ] **User interaction** (*`link`*) *JavaScript Basics / Event handling*
  - [ ] Events: listening to global events
  - [ ] Event details: event object, adding agents, start-stop
  - [ ] (*`task`*) *Game of life*
- [ ] **Configuration UI**
  - [ ] Form elements: basic HTML inputs, DOM output, monitoring
  - [ ] Events: listener, buttons, setting parameters
- [ ] **Complex examples**
  - [ ] (*`task`*) Predator-prey model
  - [ ] (*`task`*) Game of life
  - [ ] (*`task`*) Ant model

## Console applications

- [ ] **Goals**: basics of programming through classic algorithmic problems
- [ ] **Prerequisite, setup** (*`link`*) *JavaScript Basics / Setting up the environment*
  - [ ] Basic CLI commands **or** IDE setup
  - [ ] Code editor or IDE, Deno
- [ ] **Basic data handling** (*`link`*) *JavaScript Basics / Data types*
  - [ ] Running Deno
  - [ ] Variables and constants
  - [ ] Reading from console  
    (*`note`*) Browser APIs
  - [ ] (*`task`*) *Guess the number*
  - [ ] (*`theory`*) I/O streams
- [ ] **Basic algorithms** (*`link`*) *JavaScript Basics / Data types*
  - [ ] Higher order functions
  - [ ] Aggregation: `reduce`, `find`
  - [ ] Mapping: `map`, `filter`
  - [ ] (*`theory`*) Programming theorems
- [ ] **Working with files** (*`link`*) *JavaScript Basics / Asynchronous programming*
  - [ ] File I/O: read, parse
    (*`note`*) Allowing file I/O in deno
  - [ ] (*`advanced`*): JSON, data serialization
- [ ] **Advanced algorithms**
  - [ ] Sorting: selection sort, bubble sort, insertion
  - [ ] (*`advanced`*): quick sort
