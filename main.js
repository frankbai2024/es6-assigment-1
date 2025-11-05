const comment_list = [];
const $ = (sel) => document.querySelector(sel);
let state = { items: [] };
function LetConst() {
  /*  const name = "Alice";
  if (true) {
    let name = "Bob";
    console.log("name of 1: " + name); // Outputs: Bob
  }
  console.log("name of 2: " + name); // Outputs: Alice
*/
  comment_list.length = 0; // Clear previous comments
  state.items.splice(0, state.items.length);
  let comment =
    "var is function scope only," +
    "<br/>" +
    "let is block scope," +
    "<br/> " +
    "const is block scope and cannot be reassigned.";
  let sample = `  const name = "Alice";<br/>
                if (true) {<br/>
                    let name = "Bob";<br/>
                    console.log("name of 1: " + name); // Outputs: Bob<br/>
                }<br/>
                console.log("name of 2: " + name); // Outputs: Alice<br>
                // Error if name was declared with var
                `;
  let img = "img/task1.png";
  let item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };
  //comment_list.push(item);

  console.log("1st:", state.items);

  comment = "This is another comment about Let and Const.";
  sample = `  const pi = 3.14;<br/>
  pi = 3.14159; // This will cause an error`;
  img = "";
  item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };
  //comment_list.push(item);
  console.log("2nd:", state.items);

  disPlay();
}

function disPlay(comment_list = state.items) {
  console.log(comment_list);
  const div = $("#comments");
  div.innerHTML = "";
  //div.innerHTML = "text <br/>";

  div.innerHTML = comment_list
    .map(
      (item) =>
        `<p style="color: blue;">${item.comment} <br/> 
        ${
          item.img
            ? `<a href="${item.img}" target="_blank">
                <img src="${item.img}" alt="Image" width=300 height=100/> 
              </a><br>`
            : ""
        }

        <code style="color: green;">${item.sample}</code> <br/>
        </p>`
    )
    .join("");
}
//         //<img src="${item.img}" alt="Image" width=200 height=100/> <br>
function ArrowFunctions() {
  comment_list.length = 0;
  state.items.splice(0, state.items.length);
  let comment =
      "Arrow functions are a more concise syntax for writing function expressions.",
    sample = `const add = (a, b) => a + b;`,
    img = "img/task2.png";
  let item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };
  //comment_list.push(item);

  console.log("1st:", state.items);

  comment = "箭头函数的简写形式使得代码更简洁。";
  sample = "";
  img = "img/task2-1.png";
  item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };

  comment =
    "核心区别：箭头函数没有自己的 this.它会从定义它的上下文中继承 this.<br>";
  sample = "";
  img = "img/task2-2.png";
  item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };
  //comment_list.push(item);
  console.log("2nd:", state.items);

  comment =
    "在事件监听中，普通函数更适合用作回调，因为 this 会自动指向被点击的元素；<br>" +
    "而箭头函数会“继承”外层作用域的 this，通常不是你想要的结果。";
  sample = "";
  img = "img/task2-3.png";
  item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };

  disPlay();
}

function TemplateLiterals() {
  state.items.splice(0, state.items.length);
  let greeting = "Hello";
  let name = "World";
  let message = `${greeting}, \n ${name}!<br>
  Welcome to the course.`;

  comment = `Template literals allow\n for easier string interpolation.<br> 
  simply use  < br /> for new lines.`;
  sample = `const message = \`${greeting} ${name} ! < br /> welcome to the course.\`;`;
  img = "img/task3.png";
  item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };

  disPlay();
}

function Destructuring() {
  state.items.splice(0, state.items.length);

  const persons = [
    { name: "Alice", age: 25, city: "Sydney" },
    { name: "Bob", age: 30, city: "Melbourne" },
    { name: "Charlie", age: 28, city: "Brisbane" },
  ];

  let sample = showPerson2(persons);
  let comment = `persons.map( ({ name, age, city }) =>
                                \`Name:\${name} at Age:\${age}\`<br>
                            ).join("")`;

  let img = "img/task4.png";
  let item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };

  disPlay();
}

function showPerson(persons) {
  persons.map(({ name, age, city }) => {
    //map() 会生成一个新数组（每个元素是字符串模板）。
    console.log("showPerson: ", name, age, city);
  });
  const sample = persons
    .map(
      ({ name, age, city }) =>
        `<div>Name:${name}---Age:${age}---City:${city}</div>`
    )
    .join(""); //.join('') 把它们连接成完整 HTML。
  return sample;
}

const showPerson2 = (persons) => {
  persons.map(({ name, age, city }) => {
    console.log("showPerson 2: ", name, age, city);
  });
  const sample = persons
    .map(({ name, age, city }) => `<div>Name:${name} at Age:${age}</div>`)
    .join("");
  return sample;
};

function DefaultParameters() {
  state.items.splice(0, state.items.length);

  console.log("Area 1:", calculateArea1(5)); // Uses default height = width
  console.log("Area 2:", calculateArea1(5, 10)); // Uses provided height = 10
  console.log("Area 3:", calculateArea2(5)); // Uses fallback height = width
  console.log("Area 4:", calculateArea2(5, 10)); // Uses provided height = 10
  console.log("Area 5:", calculateArea3(5)); // Uses default height = 10
  console.log("Area 6:", calculateArea3(5, 15)); // Uses provided height = 15
  let comment = `Default parameters allow named parameters to be initialized with default values if not provided.`;
  let sample = `function calculateArea(width, height = width) {<br>
    return width * height;
  }`;
  let img = "img/task5.png";
  let item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };

  comment = `You can also set default values that are not dependent on other parameters.`;
  sample = `function calculateArea(width, height = 10) {<br>
    return width * height;
  }`;
  img = "";
  item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };

  comment = `without default parameters, we often use logical OR (||) to set fallback values.`;
  sample = `function calculateArea(width, height) {<br>
    height = height || width; // Fallback to width if height is undefined<br>
  }`;
  img = "";

  item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };

  disPlay();
}

const calculateArea1 = (width, height = width) => width * height;

const calculateArea2 = (width, height) => {
  // No default parameter
  height = height || width; // Fallback to width if height is undefined
  return width * height;
};

const calculateArea3 = (width, height = 10) => width * height;

function resetComments() {
  state.items.splice(0, state.items.length);

  disPlay();
}

function RestSpread() {
  state.items.splice(0, state.items.length);

  let arr1 = [1, 2];
  let arr2 = [3, 4];
  let combineArr = [...arr1, ...arr2]; // Using spread operator
  console.log("sum arr1+ arr2:", sum(...combineArr)); // Using rest operator

  let comment = `The rest/ spread operator (...) are always used to expand or combine arrays.`;
  let sample = `let combineArr = [...arr1, ...arr2];<br>
                const sum = (...combineArr) =>{<br>
                return combineArr.reduce((acc, curr) => acc + curr, 0);<br>
              }`;
  let img = "img/task6.png";
  let item = { comment, sample, img };
  state = { ...state, items: [...state.items, item] };
  disPlay();
}

const sum = (...combineArr) => {
  // rest operator
  return combineArr.reduce((acc, curr) => acc + curr, 0);
};
