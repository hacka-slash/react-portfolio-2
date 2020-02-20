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




 ....!HAD TO MAKE A NEW REPO WITH REMOTE NAME 'origin3'...Not sure why original repo push was no longer working but was getting this error:
    error: failed to push some refs to 'https://github.com/hacka-slash/react-portfolio-1.git'
    hint: Updates were rejected because the tip of your current branch is behind
    hint: its remote counterpart. Integrate the remote changes (e.g.
    hint: 'git pull ...') before pushing again.      
    hint: See the 'Note about fast-forwards' in 'git 
    push --help' for details.



    ######### Vid2 ###########
    ..Making use of <Grid> on LandingPage.js. React-mdl tag similar to bootstrap how it is made up of 12 points whole to be divided via 'col' property for <tags>


    ..Working on Gradients, reccomended bookmark is uigradients.com


..FontAwsome tag included into the index.html so that the LandingPage.js can have the stlye className="fa fa-linked-square" etc....
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

 ..With the fontawsome link we can use classname linkedIn logo, github logo, etc...


 ################ Vid3 ##################
  ..Working on the Projects page. We are creating a tab display tyoe of navigation below our main navigation. We import these {Tabs} from 'react-mdl'

  ..With the <Tabs>, each element within it is refered to in a manner similar to an array. The way we refer to each <Tab> within the <Tabs> is by {this.state.activeTab}. Like an array, the active Tab starts its count from 0, etc. (Rough draft statmement lol)

  ..We return a JSX depending on which state.activeTab is showing. For each JSX, we will display a card which we import from 'react-mdl'. (Each mdl feature/component is detailed in its documentation @ https://tleunen.github.io/react-mdl/components )


  ################### Vid4 ######################
  ..We are making the Contact page, Will be a grid with two cells. (Grid deprecated Tables)