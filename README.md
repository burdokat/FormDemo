## Installation

Git clone the repository

```
git clone <repo>
cd <repo>
```

Make sure you have these global dependencies installed:
  - ionic
  - angular

```
npm install -g @ionic/cli
npm install -g @angular/cli
```

Install local dependencies and run the app

```
npm i
ionic serve
```

## Forewords

So after all the troubleshooting and enclosing the issue, I created this
demo example to share it with the public.

Steps to follow

```
  - With the ionic app served in the browser, open the Chrome Dev Tools.
  - Take a first heap snapshot right away for comparison purposes.
  - From there try login out, and login in several times as you need. (Type
    anything as you like inside the inputs in the login page.)
  - Then take another memory heap snapshot and search for "page" and "NgModel"
    the first search will give you the total amount of the auth page instances
    piled up from the previous step. The latter search will give you all the
    NgModel instances from the auth page template form... of every auth page
    instance created (#AuthPageInstances X #inputFormFields).
```

Notes:
```
  - This demo has been made as such that the representation of this bug has
    been simplified to its minimum expression using the minimum configurations
    to represent an angular template driven form. That should be enough to
    describe the exhibited unusual behaviour and report this as an issue.
  - The SAME BEHABIOUR IS EXHIBITED in reactive driven forms too. I have
    already tested and transformed this same demo into its analogous reactive
    driven approach, having the same memory leak as in the template driven
    approach. (Try it if you want).
  - This was also tested with the submit buttton in the login page enabled. In
    other words, with the disabled property of the submit button deleted in 
    the login page, just to navigate back and forth without touching the form.
    Testing this setup DID NOT EXHIBIT ANY MEMORY LEAK.
  - A thorough test was made with angular 8, and it DID NOT EXHIBIT ANY MEMORY
    LEAK AT ALL. 
  - You can search also in the HEAP SNAPSHOT the observables that keeps piling
    up. What is happening is that the form instances are not being garbage
    collected. Hence, everything from the form and up to its container are
    been kept in memory.
```

Conclusion:
```
  - This bug must be related to another angular 9 issue (still unknown or
    unknown to me) or it can be a bug created within the integration of 
    angular 9 in the current ionic 5 version.
    Solving the bug is out of this scope, but I can mention an useful detail
    that angular 8 with Ionic 5 works just fine without exhibiting this bug.
```
