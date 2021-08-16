# 5 Card Memory Training Game

This is a web based memory training game that allows users to improve their short-term memory through pattern recognition. As short-term memory capacity has been linked to greater overall brain function, improved strategic and critical thinking and positive gains in mental sharpness and health, this simple game which can be played anywhere there is an internet connection provides great benefits to the user.

## UX

The following User Stories were used to focus the development of the project;

### User (Game Player)

1. As a user, I want to play a pattern recognition game which is both enjoyable and has simple-to-follow rules but which provides positive benefits to my memory capacity and brain function.
2. As a user, I want the on-screen layout of the game and its interactivity be fun and enjoyable to use.
3. As a user, I want to be able to play the game on devices of all screen sizes.
4. As a user, I want to be able to select objects (cards) easily and intuitively.
5. As a user, I want the game to increase in difficulty as my skills and capacity improve.
6. As a user, I want to know what level of the game I am currently playing at and how many rounds I have until game completion.
7. As a user, I want to see clearly what my current selection of cards is.
8. As a user, I want to be able to remove the last object (card) I have selected in my selection.
9. As a user, I want to be able to clear my current selection so that I can start over with my selection.
10. As a user, I want to be easily able to submit my selection. 
11. As a user, I want to receive feedback on my selection submission as to whether it is correct or incorrect.
12. As a user, I want the game to flow seamlessly from one round to the next.

The project provides solutions to the above User Stories as follows;

1. The game is relatively simple - five playing cards are displayed for a set period of time before disappearing from view, with the pattern to be recalled and replicated by the user. For first time users the "Rules" button can be selected giving a thorough explanation of the rules.
2. 
3. The on-screen layout adapts to all screen sizes to maximise player usability.
4. Cards are selected by the user by simply clicking on the card image from the 52 card images available.
5. As more consequtive correct patterns are identified by the player, the time period for which the randomly generated cards are displayed shortens, thus increasing the difficulty of the game.
6. A description of the level of the game at which the player is currently is displayed in the user interface area along with the number of rounds required until game completion.
7. The users selection of cards are shown in the user interface area.
8. The user can remove the last card inputted into his or her selection by simply clicking the "REMOVE" button.
9. The user can clear all the cards from their current selection by clicking the "CLEAR ALL" button.
10. The user can submit his or her selection simply by clicking on the "SUBMIT" button.
11. The user, after clicking the "SUBMIT" button gets instant feedback on whether the correct or incorrect selection was made.
12. After clicking the "SUBMIT" button and providing feedback as to whether the user's selection was correct or incorrect, the game flows into another round without any input requried from the user.


### Wireframes

A series of wireframes were produced prior to coding to assist with the project development. These can be found in the project repository (MILESTONE-PROJECT-1/wireframes.pdf) or can be accessed online from https://github.com/darraghogorman37/Milestone-Project-1/blob/cd84c7c647a8ff781902cb82f42f6fa4a5d28c6a/wireframes.pdf.

## Features

The below sections detail both the existing features and potential future fetaures yet to be developed.

### Existing Features

* Player-Interface Area
    * STICKY STICKY Situated conventionally at the top of the page, allows users to move between the webpages. Displays as hamburger style on mobile devices and conventionally spanning the width of the screen on larger sreen sizes.
    ![Navigation Bar on large screen](https://github.com/darraghogorman37/Milestone-Project-1/blob/cd831d7c9b66b4049f63da273de65c14a2c054d0/assets/images/screenshots/navbar-large.JPG)
    ![Navigation Bar on small screen](https://github.com/darraghogorman37/Milestone-Project-1/blob/cd831d7c9b66b4049f63da273de65c14a2c054d0/assets/images/screenshots/navbar-small.JPG)
* Player's Current Card Selection
    * Encourages users to click to sign up for a free trial at the gym.
    ![Callout Bar](https://github.com/darraghogorman37/Milestone-Project-1/blob/38debc0d0056ec2f976d73744ec944f3e2e6e802/assets/images/screenshots/callout-bar.JPG)
* "SUBMIT SELECTION", "REMOVE" and "CLEAR ALL" player buttons
    * Reinforces the gym's brand.
    ![Logo and Slogan](https://github.com/darraghogorman37/Milestone-Project-1/blob/cd831d7c9b66b4049f63da273de65c14a2c054d0/assets/images/screenshots/logo+slogan.JPG)
* Score Update
    * Inspires potential members to sign up with motivational images of people in the gym.
* Level Update
    * Provides location information.
* Answer Feedback
    * Allows those interested to sign up for a free trial at the gym.    
    ![Sign Up Page](https://github.com/darraghogorman37/Milestone-Project-1/blob/cd831d7c9b66b4049f63da273de65c14a2c054d0/assets/images/screenshots/sign-up-page.JPG)
* Rules page
    * Provides information on each of the class types and the weekly class timetable.
    ![Class Timetable](https://github.com/darraghogorman37/Milestone-Project-1/blob/cd831d7c9b66b4049f63da273de65c14a2c054d0/assets/images/screenshots/class-timetable.JPG)
* Intuitive Object Selection
    * Provides potential members with insight from existing members, thus encouraging them to sign-up.
    ![Member Quotes](https://github.com/darraghogorman37/Milestone-Project-1/blob/cd831d7c9b66b4049f63da273de65c14a2c054d0/assets/images/screenshots/member-quotes.JPG)
* Cross-device compatability
    * Provides information on the gym's facilities and equipment.
* Cross-device compatability
    * Provides information on the gym's facilities and equipment.
* Increasing difficulty through game progression.
    * Provides information on the gym's facilities and equipment.

### Features Left to Implement

* Community Forum, whereby members can make posts and discuss relevant topics.
* Class Booking online, whereby members can book themselves into one of the classes happening at the gym.


## Technologies Used

The below resources were used to produce this project:

* HTML5
    * For writing web content.
    * https://html.spec.whatwg.org/

* CSS3
    * For styling HTML content.
    * https://www.w3.org/Style/CSS/

* Bootstrap's HTML, CSS and Java frameworks and libraries
    *  Bootstrap "navbar" for website navigation bar, Bootstrap "Grid" system for page layouts, Boostrap's "button" for callout bar.
    *  https://getbootstrap.com/

* jsDelivr
    * CDN for accessing Bootstrap

* Unsplash Photo Library
    * For photos.
    * https://unsplash.com/

* Pexels
    * For photos.
    * https://www.pexels.com/

* Font Awesome
    * For dumbbell icon used in gym logo. For social media icons in the footer.
    * https://fontawesome.com/

* Google Fonts
    * For "Alfa Slab One" and "Lato" font types.
    * https://fonts.google.com/

* Google Maps
    * For use in `<iframe>` HTML element on Home page.
    * https://www.google.com/maps

* Youtube
    * For use in `<iframe>` HTML element on News page.
    * https://www.youtube.com/

* Gitpod
    * Integrated Development Environment (IDE).
    * https://www.gitpod.io/

* Github
    * For code hosting / storage.
    * https://github.com/

* Gitpages
    * For deployment of code to the internet.
    * https://pages.github.com/

* Google Chrome Web Browser
    * For testing the layout of the webpage on this browser.
    * https://www.google.com/intl/en_ie/chrome/

* Google Chrome Developer Tools
    * For examing webpage layout on various devices with different screen sizes.
    * For experimenting with changes to the code and their imapct in the browser.
    * https://developer.chrome.com/docs/devtools/

* Internet Explorer
    * For testing the layout of the webpage on this browser.
    * https://www.microsoft.com/en-ie/download/internet-explorer.aspx

* Mozilla Firefox
    * For testing the layout of the webpage on this browser.
    * https://www.mozilla.org/en-US/firefox/new/

* W3C CSS Validator
    * For validating CSS code.
    * https://jigsaw.w3.org/css-validator/

* W3C Markup Validator
    * For validating HTML code.
    * https://validator.w3.org/

* Emmet
    * Web Development Toolkit
    * https://emmet.io/


## Development Cycle and Commit Messages

The Gitpod IDE was used to develop this project and changes to the files were "committed" and "pushed" to the project repository in GitHub as the development cycle progressed. When viewing the commit messages in the project repository, please take note that the following notation was used when committing;

X.Y "Description of Changes Made to the File(s)"

where X = a number associated with a particualar webpage (see below), Y = the Yth commit associated with this webpage

X-values are as follows; for Home X=1, for Sign Up X=2, for Our Classes X=3, for What Our Members Say X=4, for Our Facilities X=5, for Gallery X=6, for News X=7

For example, a commit message of "3.4 Changes to allow table re-sizing across various screen sizes" relates to changes made to the Our Classes page and this is the 4th commit relating to this page.

Similarly, a commit titled "1.9 + 4.3 + 6.3 alt attributes added to images" relates to changes made to the Home, What Our Members Say and Gallery pages and these are the 9th, 3rd and 3rd respective commits relating to these pages.

Where X and Y numbers do not precede the git commit message these are changes to the project files not specific to any one webpage, for example, the commit message "Updated Features section in README.md".


## Code Validation

All html code was run through the W3C Markup Validator (https://validator.w3.org/) and all CSS code was run through the W3C CSS Validator (https://jigsaw.w3.org/css-validator/). The CSS code was returned with no errors or warnings. There were a number of warnings associated with the HTML code where heading elements were not placed before section elements. Upon review it was not deemed appropriate to include these. There were no errors associated with the HTML code.

## Testing

1. Test Deployment
    1. Visit the relevant webpage address (https://darraghogorman37.github.io/) and ensure site is live.
    2. Visit the above address via Google Chrome, Internet Explorer and Mozilla Firefox browsers.
    3. Compare the "deployed" version of the website with the version outputted from the source code in the project repository.

2. Home Page
    1. Click on each of the navbar links and verify they each bring the user to the intended webpage.
    2. Click on each of the social media links in the footer and verify they open the correct social media webpage in a new browser window.
    3. Verify the Google maps `<iframe>` loads as intended.
    4. Click on the "view larger map" link within the Google Maps `<iframe>` and verify the Google map opens in a new browser window.
    5. Click on the "Here" callout button within the callout bar and verify this links to the Sign-Up page.
    6. Verify 4 photographs load as intended.
    7. Verify the above steps i-vi using each of the Google Chrome, Internet Explorer and Mozilla Firefox web browsers.
    8. Using the emulator in Google Chrome developer tools, examine the webpage across all of the various devices available in the emulator. Verify the layout on each of the screen sizes is compliant with the principles of good User Experience design (that the layout, conent and styling change in accordance with the media screen queries employed in the stlyes.css file). 

3. Sign-Up Page (General)
    1. Click on each of the navbar links and verify they each bring the user to the intended webpage.
    2. Click on each of the social media links in the footer and verify they open the correct social media webpage in a new browser window.
    3. Verify the above steps i-ii using each of the Google Chrome, Internet Explorer and Mozilla Firefox web browsers.
    4. Using the emulator in Google Chrome developer tools, examine the webpage across all of the various devices available in the emulator. Verify the layout on each of the screen sizes is compliant with the principles of good User Experience design (that the layout, conent and styling change in accordance with the media screen queries employed in the stlyes.css file). 

4. Our Classes Page
    1. Click on each of the navbar links and verify they each bring the user to the intended webpage.
    2. Click on each of the social media links in the footer and verify they open the correct social media webpage in a new browser window.
    3. Verify the above steps i-ii using each of the Google Chrome, Internet Explorer and Mozilla Firefox web browsers.
    4. Using the emulator in Google Chrome developer tools, examine the webpage across all of the various devices available in the emulator. Verify the layout on each of the screen sizes is compliant with the principles of good User Experience design (that the layout, conent and styling change in accordance with the media screen queries employed in the stlyes.css file). 

5. What Our Members Say page
    1. Click on each of the navbar links and verify they each bring the user to the intended webpage.
    2. Click on each of the social media links in the footer and verify they open the correct social media webpage in a new browser window.
    3. Verify 5 photographs load as intended.
    4. Verify the above steps i-iii using each of the Google Chrome, Internet Explorer and Mozilla Firefox web browsers.
    5. Using the emulator in Google Chrome developer tools, examine the webpage across all of the various devices available in the emulator. Verify the layout on each of the screen sizes is compliant with the principles of good User Experience design (that the layout, conent and styling change in accordance with the media screen queries employed in the stlyes.css file). 

6. Our Facilities page
    1. Click on each of the navbar links and verify they each bring the user to the intended webpage.
    2. Click on each of the social media links in the footer and verify they open the correct social media webpage in a new browser window.
    3. Verify the above steps i-ii using each of the Google Chrome, Internet Explorer and Mozilla Firefox web browsers.
    4. Using the emulator in Google Chrome developer tools, examine the webpage across all of the various devices available in the emulator. Verify the layout on each of the screen sizes is compliant with the principles of good User Experience design (that the layout, conent and styling change in accordance with the media screen queries employed in the stlyes.css file). 

7. Gallery page
    1. Click on each of the navbar links and verify they each bring the user to the intended webpage.
    2. Click on each of the social media links in the footer and verify they open the correct social media webpage in a new browser window.
    3. Verify 5 photographs load as intended.
    4. Verify the above steps i-iii using each of the Google Chrome, Internet Explorer and Mozilla Firefox web browsers.
    5. Using the emulator in Google Chrome developer tools, examine the webpage across all of the various devices available in the emulator. Verify the layout on each of the screen sizes is compliant with the principles of good User Experience design (that the layout, conent and styling change in accordance with the media screen queries employed in the stlyes.css file). 

8. News page 
    1. Click on each of the navbar links and verify they each bring the user to the intended webpage.
    2. Click on each of the social media links in the footer and verify they open the correct social media webpage in a new browser window.
    3. Verify the Youtube `<iframe>` loads as intended.
    4. Verify the above steps i-iii using each of the Google Chrome, Internet Explorer and Mozilla Firefox web browsers.
    5. Using the emulator in Google Chrome developer tools, examine the webpage across all of the various devices available in the emulator. Verify the layout on each of the screen sizes is compliant with the principles of good User Experience design (that the layout, conent and styling change in accordance with the media screen queries employed in the stlyes.css file).

9. Sign-Up page (Form)
    1. Within the form on the Sign-Up page, check that the browser signifies to the user when any one of the required 3 fields is not completed prior to clicking "Submit".

10. Cross-Device Testing
    * The above testing procedures 2-9 were carried out on each of the following real devices - 
        1. 1920 x 1080 pixel desktop monitor
        2. HP laptop with 1366 x 768 pixel screen
        3. Lenovo Tab M7 7" Tablet with 1024 x 600 pixel display
        4. Samsung Galaxy Phone A7 (A750FN) 600 x 287 pixel display

The following minor issues remain unresolved after testing and bug-fixing;

1. When viewing on the Internet Explorer web browser, the dumbbell logo used as part of the company logo does not sit centrally in the red radial border.
2. For the What Our Members Say, Our Facilities and News webpages there is a slight color contrast between the logo background area and the background area in the sections beneath.
3. At certain screen sizes the radial border around the dumbbell icon can become distorted and appear more oval than round.
4. On the News page, the post "Headline" or "Topic" does not appear in the dead centre of the page and the visual impact of this is accenuated with increasing screen width. It becomes particularly noticeable at the desktop range of screen sizes.
5. The "Submit" button in the Sign-Up page appears as "Submit Query" in Internet Explorer.

## Deployment

Deployment of the project was achieved through the use of GitHub Pages.

The project files were copied into a GitHub online repository which automatically deploys to the web address https://darraghogorman37.github.io/


## Credits

### Content

The gym logo is based on the "dumbell" logo from the Font Awesome library. https://fontawesome.com/

The social media icons located in the footer are based on icons from the Font Awesome library. https://fontawesome.com/

The "Alfa Slab One" font-type used for the `<h1>` and `<h2>` headings and "Lato" font-type used for the company slogan on the Home page are from the Google Fonts library. https://fonts.google.com/

The map on the Home Page is an `<iframe>` element linked to Google Maps. https://www.google.com/maps

The Exercise of the Week is an `<iframe>` element linked to a YouTube video at web address https://www.youtube.com/watch?v=Ow58yHEl_Ls&t=16s by Omarlsuf.


### Media

The photos used in this site were obtained from the following sources;


#### Home Page

* Build Strength; photo by Sven Mieke, obtained from Unsplash.com.

* Get Flexible; photo by Rawan Yasser, obtained from Unsplash.com.

* Burn Fat; photo by Leon Ardho, obtained from Pexels.com.

* Feel Great; photo by Alora Griffiths, obtained from Unsplash.com.


#### What Our Members Say page

* The photo of "Sarah Dooley" is by Katherine Hood obtinaed from Unsplash.com.
* The photo is "Kate Smyth" is by Ayo Ogunseinde obtinaed from Unsplash.com.
* The photo of "John Harper" is by Karsten Winegeart obtinaed from Unsplash.com.
* The photo if "Paula Radley" is by Sergio Pedemonte obtinaed from Unsplash.com.
* The photo of "Scott Jones" is by Anastase Maragos obtinaed from Unsplash.com.


#### Gallery page

Note that the names of the photos as listed below are as per their name in the project folder Milestone-Project-1/assets/css/images/

* barbell-work; by Sushil Ghimire obtained from Unsplash.com.
* boxing; by Sam Moqadam obtained from Unsplash.com.
* dumbells; by Danielle Cerullo obtained from Unsplash.com.
* floor-area-1; Humphrey Muleba obtained from Unsplash.com.
* floor-area-2; Risen Wang obtained from Unsplash.com.
* floor-area-3; Rodrigo Sarsfield obtained from Unsplash.com.
* pulley; Total Shape obtained from Unsplash.com.
* rack; Jelmer Assink obtained from Unsplash.com.
* ropes; Meghan Hholmes obtained from Unsplash.com.
* squat-rack; Javier-Santos-Guzman obtained from Unsplash.com.
* treadmills; Sven Mieke obtained from Unsplash.com.
* treadmills2; Chuttersnap obtained from Unsplash.com.
* weights; Brett Jordan obtained from Unsplash.com.
* yoga-pose; Emily Sea obtained from Unsplash.com.


### Acknowledgements

- This project is dedicated to my fiancée.
