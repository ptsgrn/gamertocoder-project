# Gamertocoder Theme Team (#628)

This is a repo for summission in [Gamer to coder](https://gamertocoder.garena.co.th/) competition.

## Clone this repo

This repo is mirrored of one in Gamer to coder instance. You can clone this repo by using this command:

```bash
# with SSH (recommended)
git clone git@github.com:ptsgrn/gamertocoder-project.git
# with HTTPS
git clone https://github.com/ptsgrn/gamertocoder-project.git
```

Or with Visual studio code:

1. Open vscode
2. Ctrl + Shift + P (or Cmd + Shift + P) to open command palette.
3. Type `git clone` and press enter.
4. Select "Clone from GitHub" and press enter.
5. Paste this repository's url: https://github.com/ptsgrn/gamertocoder-project.git
6. Select a target folder to clone this repo.
7. Enjoy!

> Note: Note, Even thought this is not the main repo, you can still submit your code to this repo. And we will merge it to the main repo at Gamer to coder's Gitlab instance. for your convenience.

## Setup code formatter

We use [Prettier](https://prettier.io/) to format our code. You can install it by using this command:

```bash
# after clone this repo, run:
npm i
```

And you're good to go! Husky will run Prettier before you commit your code automatically. If you want to run Prettier manually, you can use this command:

```bash
npm run format
```

Also you can use Prettier's extension for your IDE. [Here's the list of supported IDE](https://prettier.io/docs/en/editors.html).

> **Note**
> I will remove this section after we finish the project. And also all other file that related to Prettier or npm.

## List of available API endpoints

- https://gamertocoder.garena.co.th/api/assets
- https://gamertocoder.garena.co.th/api/minigame
- https://gamertocoder.garena.co.th/api/minigames

## Required project structure

This repo must be structured like this:

```
.
├── README.md         - This file
├── index.html        - Main page
├── otherPage.html    - Other page (as many as you want)
├── css
│   ├── style.css     - CSS file
│   └── other.css     - Other CSS file (as many as you want)
├── js
│   ├── script.js     - JS file
│   └── other.js      - Other JS file (as many as you want)
└── images
    ├── image.png     - Image file
    └── other.jpg     - Other image file (as many as you want)
```

> **Warning**
> The judge will check your project structure and will not accept your submission if it is not structured like this.

## Code styles

Just for readability, don't take it too seriously. You can use any code style you want.

### CSS

- Classes: `kebab-case`
  - class for child element: `parent-class__child-class` (BEM)
  - doudle underscore `__` is used to separate parent class and child class. Like `hero-image__header-text`.
  - double dash `--` is used to separate modifier class. Like `hero-image--dark`, `hero-image--light`, `btn btn--primary`, `btn btn--secondary`.
  - Try not to use abbreviations. Just use full word. Like `btn btn--primary`, not `btn btn--pry`.
  - Follow [PHPied](https://www.phpied.com/css-coding-conventions/) naming convention. For css code styling. See at [BEM](https://getbem.com/naming/).
    - empty line between each selector.
    - space between selector and `{`.
    - a space between property and value.
    - try not to use shorthand property.
    - use `rem` or `em` instead of px.
    - Use `!important` only when you really need it. (**Very not reccemended** try discuss with your team first)
  - Why we want this naming convention?
    - Easy to read and understand.
    - Prevent naming conflict.
- Ids: `snake_case`
  - use id only when you need to select an element with JS, otherwise use class.
  - consider using class instead of id if you need to select multiple elements.

These rule just for consistency. This will help prevent naming conflict and make your code easier to read and understand.

### Example good css file

```css
/* empty line between each selector */
.hero-image {
  /* space between selector and { */
  /* a space between property and value */
  background-image: url('https://example.com/image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* try not to use shorthand property */
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* use rem or em instead of px */
  font-size: 1.5rem;
  /* use !important only when you really need it */
  /* (Very not reccemended try discuss with your team first) */
  color: #000 !important;
}

/* double underscore __ is used to separate parent class and child class */
.hero-image__header-text {
  /* double dash -- is used to separate modifier class */
  color: #fff;
}

/* double dash -- is used to separate modifier class */
.hero-image--dark {
  background-color: #000;
}

/* space between each selector */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
}
```

Don't worry if you cannot remember all of this. Try using this extension:

- Name: BEM Helper
- Id: Box-Of-Hats.bemhelper
- Description: Improve writing html using BEM naming conventions.
- Version: 1.4.5
- Publisher: Box-Of-Hats
- VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Box-Of-Hats.bemhelper

> **Note**
> Don't be serious about this. Just try to follow this naming convention as much as you can. Sometimes you need to break the rules. Just try to make your code as readable as possible.

### JS

- Use `const` and `let` instead of `var`.
- For variable name, use `camelCase`.
- Use jsdoc for function documentation and intelisense.

### code formatting

for sake of readability we will use prettier to format our code.
