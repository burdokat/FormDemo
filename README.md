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

Steps to follow

```
  - With the ionic app served in the browser, open the Chrome Dev Tools.
  - Take a first heap snapshot right away for comparison purposes.
  - From there try login out, and login in several times as you need. (Type
    anything as you like inside the inputs in the login page.)
  - Then take another memory heap snapshot and search for "page" and "NgModel"
    The first search will give you the total amount of the auth page instances
    piled up from the previous step. The latter search will give you all the
    NgModel instances from the auth page template form... of every auth page
    instance created.
```

Notes:
```
  - This demo has been made as such that the representation of this bug has
    been simplified to its minimum expression using the minimum configurations
    to represent an angular template driven form. That should be enough to
    describe the exhibited unusual behaviour and report this as an issue.
    I spent several hours in my original code where I migrated from angular 8
    to angular 9 where I am currently working with more complex code, so it was
    quite a lot and tiresome work to detect the memory leak.
    So after all the troubleshooting and enclosing the issue, I created this
    demo to share it with the public.
```

Conclusion:
```
  - This bug must be related to another angular 9 issue or it can be an unknown
    bug created within the integration of angular 9 in the current ionic 5v. 
    Solving the bug is out of this scope, but I can mention that angular 8 with
    Ionic 5 works fine and doesn't exhibit this bug. 
```
