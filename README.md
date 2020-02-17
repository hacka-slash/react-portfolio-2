Personal Porftfolio Tutorial, Paul Hanna Original


From Reat-Mdl, using a nav-bar that: {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
    ..Must import all tags it came with: 
    (App.js)
    import { Button, Card, CardText } from 'react-mdl'; 

    ..*!ERROR/NOT WORKING PROPERLY WITH RESIZE TO SMALL WINDOW THE NAVIGATION ONLY LOOKS GOOD FULL SCREEN?!


[npm install react-router-dom] to navigate through my components via navigation header.


..Had a strange error with the Main.js, using the route. The error was in the syntax of the es6 function:
    const main = () => {} GAVE ERROR.
    const main = () => () OKAY ?!


 ..After getting the Main working with the router we need, imported into the App.js {Link} from 'react-router-dom, and changed all <a> tags to <Link>