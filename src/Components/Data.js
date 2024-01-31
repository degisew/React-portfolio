const languages = ['JavaScript', 'Python', 'Ruby', 'HTML5', 'CSS3'];

const frameworks = [
  'React/Redux',
  'Ruby on Rails',
  'Django',
  'Bootstrap',
  'RSpec',
];

const ToolsAndMethods = [
  'Chrome Dev Tools',
  'React Dev Tools',
  'Git',
  'GitHub',
  'VScode',
  'Webstorm',
  'RubyMine',
  'Netlify',
  'TDD',
];
const professional = [
  'Pair programming',
  'Communication',
  'Problem-solving',
  'Team-work',
  'Mentoring',
];

const projects = [
  {
    id: 1,
    title: 'Commerce Store',
    url: 'screenshoots/commercestore.png',
    builtWith: ['Python', 'Django', 'Django Rest Framework', 'PostgreSQL'],
    github: 'https://github.com/degisew/commerce-store',
    live: '',
    description:
      `A back-end e-commerce API built with Python, Django, and PostgreSQL that is fully functional and ready to integrate with a front-end UI. 
       It includes endpoints for creating, retrieving, updating, and deleting products, as well as for managing orders, customers, carts, and their items. The API is built on a scalable and secure infrastructure.`,
  },
  {
    id: 2,
    title: 'HubSpot',
    url: 'screenshoots/discord.png',
    builtWith: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
    github: 'https://github.com/degisew/HubSpot',
    live: '',
    description:
      `A real-time chat application using Django and Python, inspired by Discord. This project aims to replicate some of the key features of Discord, allowing users to create and join chat rooms, send and receive messages in real-time, and manage user accounts. 
       Implemented features such as text messaging, user authentication, roles, and permissions.`,
  },
  {
    id: 3,
    title: 'Budget Management App',
    url: 'screenshoots/budget.png',
    builtWith: ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    github: 'https://github.com/degisew/Budget-App',
    live: '',
    description:
      `A budget app is a web up built with Ruby o Rails. 
       It will introduce transactions for each category and tracks the amount of money you spent on each category.`,
  },
  {
    id: 4,
    title: 'Recipe App',
    url: 'screenshoots/recipe.png',
    builtWith: ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    github: 'https://github.com/degisew/Recipe-App',
    live: '',
    description:
      `The Recipe app keeps track of all your recipes, ingredients, and inventory.It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.
       Also,since sharing recipes is an important part of cooking the app should allow you to make them.`,
  },
  {
    id: 5,
    title: 'E-Commerce Shop App',
    url: 'screenshoots/commerce.png',
    builtWith: ['React', 'CSS3', 'Material-UI', 'Commercejs-API', 'Stripe'],
    github: 'https://github.com/degisew/E-commerce',
    live: 'https://degisew-commerce.netlify.app/',
    description:
      `A full-stack E-Commerce app for your shopping business. 
       It allows users to buy products, add to the cart, remove from the cart, choose the shipping process, and make payments.`,
  },
  {
    id: 6,
    title: 'Space Travelers\' Hub',
    url: 'screenshoots/space.png',
    builtWith: ['React', 'Redux', 'CSS3', 'Material-UI', 'SpaceX-API'],
    github: 'https://github.com/degisew/Space-travelers-hub',
    live: 'https://degisew-space-travelers-hub.netlify.app/',
    description:
      `A website built with React, Redux, MUI, SpaceX API, and CSS. 
       Some of the features are: a user can reserve rockets, can register and join missions, and can see his/her reservation details in his profile section. The user can also cancel the reservation any time.`,
  },
  {
    id: 7,
    title: 'Meal App',
    url: 'screenshoots/meal.png',
    builtWith: ['HTML5', 'CSS3', 'JavaScript', 'TheMealDBAPI'],
    github: 'https://github.com/degisew/TheMealDB-API',
    live: 'https://degisew.github.io/TheMealDB-API/dist/',
    description:
      `This project is created using HTML5,SCSS and JavaScript with TheMealDB API that accesses the meals from the api and displays it. 
      some of the features are: user can see the meals and add and see his/her comment. The user can also reserve the meals.`,
  },
  // {
  //   id: 8,
  //   title: 'Math Magicians',
  //   url: 'screenshoots/calculator.png',
  //   builtWith: ['React', 'SCSS'],
  //   github: 'https://github.com/degisew/Math-Magicians-React-App',
  //   live: 'https://degisew-calculator-app.netlify.app/',
  //   description:
  //     `Math magicians is a website for all fans of mathematics.
  //      It is a Single Page App (SPA) built with React that allows
  //      users to: make simple calculations and read a random math-related quote.`,
  // },
  // {
  //   id: 9,
  //   title: 'Awesome Books',
  //   url: 'screenshoots/awesome.png',
  //   builtWith: ['HTML5', 'JavaScript', 'CSS3'],
  //   github: 'https://github.com/degisew/awesome-books',
  //   live: 'https://degisew.github.io/awesome-books/',
  //   description:
  //     `A website developed with html, CSS and JavaScript that adds and removes
  //      awesome books dynamically.
  //     one of the best feature is that, all the data are stored in a browser local storage.`,
  // },
];

const testimonals = [];

const contact = {
  address: 'Addis Ababa, Ethiopia',
  Phone: '+251953059021',
  // postalCode: 'Postal code: 6000',
  email: 'degisew.mengist21@gmail.com',
};

export {
  languages,
  frameworks,
  ToolsAndMethods,
  professional,
  projects,
  testimonals,
  contact,
};
