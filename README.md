# Personal Website 2020
Personal Website template created with HTML, CSS and JS.
### Features
* CSS Custom properties
* Hamburger button menu
* Animated overlay with menu
* Three different color themes
* Color preferences stored in local storage
* Auto hiding navigation bar on scroll down
* Navigation bar activation by mouse move
* Custom fonts incorporated

### Usage
After you clone this repo to your desktop, go to index.html and edit `<section>` tags.
##### Color Themes
To change color themes go to script.js and add an array containing four color codes in this format:

`const facebook = ['#3b5998', '#8b9dc3','#dfe3ee','#f7f7f7'];`

Then change the function parameter in the event listener:

`colorOne.addEventListener('click',() => colorTheme(facebook));`

Alternatively edit existing arrays: `const facebook, const google, const youtube`
