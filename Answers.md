# Answers

1.  What is React JS and what problems does it try and solve?

        React JS is a JavaScript library that tries to solve the problem of extremely dynamic web pages.

1.  What does it mean to _think_ in react?

        To _think_ in react is to think in a component based paradiem. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

          First of all, functional components are functions. They return JSX and can be passed in arguments called props. They do not have a state, however. Class components are JS classes that extend the React.Component class. These classes hold a state but can be passed in props as well. Functional components can be lighter weight to work with but class components have a broader range of functionality

1.  Describe state.

        State is an object that lives on a class and is defined in the constructor of the class. This object can hold any kind of data necessary to run the component. State is immutable and has to be changed with the setState() function. 

1.  Describe props.

         props are parameters that are passed into functional or class components and are often used as in the properties fo the JSX elements within a functional or class component.
