# nomadcoder-MovieWebService

Clone Coding Repository for [ReactJS for Beginners](https://nomadcoders.co/react-for-beginners) Course of NomadCoder

### What I learned

<p>To use React, we add scripts for React. And those scripts are following:

    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>

First one is for React, it's a library which allows application bery interactive.

Second one is for React-DOM, is a package(or library) allows to put all React elements in HTML body.

</p>

<p>In HTML with JavaScript, first we create HTML elements, then we use them in JS, but in React, we create and use elements in script

    const span = React.createElement(
      "span",
      { id: "sexy-span", style: { color: "red" } },
      "Hello, I'm a span"
    );

When we use _React.createElement()_, inside of parenthesis, we must put HTML's tags.

</p>

<p> By using React, we can integrate the codes where we declare elements, call them, and add some events in a single line of code! Like this:

    const btn = React.createElement(
      "button",
      {
        onClick: () => console.log("im clicked")
      },
      "Click me"
    );

</p>

<p> When we want to render some multiple elements simultaneously, add components in an array then add it just like following:

    const container = React.createElement("div", null, [h3, btn]);

</p>

<p> We can register not only id or style, but also **'event listener'** on property:

    const btn = React.createElement(
      "button",
      {
        onClick: () => console.log("im clicked"),
        style: {
          backgroundColor: "tomato"
        }
      },
      "Click me"
    );

These attributes are showing that React JS is build for **interactivity**.

</p>
