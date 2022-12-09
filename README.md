# Advice-generator-app

# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](screenshot/desktop.png)

### Links

- Live Site URL: [https://rainbow-shortbread-36d552.netlify.app](https://rainbow-shortbread-36d552.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS


### What I learned

In this project, I used Third-party API for the first time.

```js
fetch('https://api.adviceslip.com/advice') //
  .then(response => {
    return response.json();
  })
```

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - This helped me with understanding Fetch API.

## Author

- Frontend Mentor - [@Mustafacmn](https://www.frontendmentor.io/profile/Mustafacmn)
- Twitter - [@beginnercoderr](https://twitter.com/beginnercoderr)
