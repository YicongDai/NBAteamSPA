# Assignment 2 - Vue app - Automated development process.

Name: Yicong Dai

Student No.:W20082480

## Overview.
This project tries to build a NBA team client by Vue app, admin can login, view the team list, add a team, edit a team and even remove a team. The data comes from heroku, in addition, the project will bundle with webpack and do some cypress test, what is more, it realizes continuous integration on Travis CI and then auto-deploys on Surge.

## E2E Testing.

. . . A listing of the output generated locally from running ONE of your spec test files (teams.spec.js).
     $ npx cypress run --spec cypress/integration/addTeam.spec.js
     C:\Users\Administrator\Desktop\NBAteamVue-1.0>npx cypress run --spec cypress/integration/addTeam.spec.js
     ====================================================================================================

       (Run Starting)

       ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
       │ Cypress:    3.1.3                                                                              │
       │ Browser:    Electron 59 (headless)                                                             │
       │ Specs:      1 found (addTeam.spec.js)                                                          │
       │ Searched:   cypress\integration\addTeam.spec.js                                                │
       └────────────────────────────────────────────────────────────────────────────────────────────────┘


     ────────────────────────────────────────────────────────────────────────────────────────────────────

       Running: addTeam.spec.js...                                                              (1 of 1)


       Add a team page
         √ allows a valid team to be submitted (13909ms)
         √ shows error messages for incomplete form fields (2694ms)


       2 passing (17s)


       (Results)

       ┌───────────────────────────────┐
       │ Tests:        2               │
       │ Passing:      2               │
       │ Failing:      0               │
       │ Pending:      0               │
       │ Skipped:      0               │
       │ Screenshots:  0               │
       │ Video:        true            │
       │ Duration:     16 seconds      │
       │ Spec Ran:     addTeam.spec.js │
       └───────────────────────────────┘


       (Video)

       - Started processing:   Compressing to 32 CRF
       - Finished processing:  C:\Users\Administrator\Desktop\NBAteamVue-1.0\cypress\videos\addTeam.spec.js.mp4 (2 seconds)


     ====================================================================================================

       (Run Finished)


           Spec                                                Tests  Passing  Failing  Pending  Skipped
       ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
       │ √ addTeam.spec.js                           00:16        2        2        -        -        - │
       └────────────────────────────────────────────────────────────────────────────────────────────────┘
         All specs passed!                           00:16        2        2        -        -        -


## Continuous Integration.

. . . URL of the Travis build page for the Vue app,

https://travis-ci.org/diarmuidoconnor/donationsSPA

## Automated Deployment.

.... Specify the URL of the auto-deployed Vue app

http://terrible-vacation.surge.sh/

## Extra features.

The data in this project come from 'https://nbawebtest.herokuapp.com/teams' and the project use a custom bundler configuration.

## Appendix.

. . . .  A listing of the output generated from running locally all of  spec test files. The command to produce this is:

     $ npx cypress run
C:\Users\Administrator\Desktop\NBAteamVue-1.0>npx cypress run


====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    3.1.3                                                                              │
  │ Browser:    Electron 59 (headless)                                                             │
  │ Specs:      6 found (aboutUs.spec.js, addTeam.spec.js, contactUs.js, home-page.spec.js, login… │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: aboutUs.spec.js...                                                              (1 of 6)


  About us page
    √ show some information about the app (2492ms)


  1 passing (3s)


  (Results)

  ┌───────────────────────────────┐
  │ Tests:        1               │
  │ Passing:      1               │
  │ Failing:      0               │
  │ Pending:      0               │
  │ Skipped:      0               │
  │ Screenshots:  0               │
  │ Video:        true            │
  │ Duration:     2 seconds       │
  │ Spec Ran:     aboutUs.spec.js │
  └───────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\Administrator\Desktop\NBAteamVue-1.0\cypress\videos\aboutUs.spec.js.mp4 (0 seconds)


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: addTeam.spec.js...                                                              (2 of 6)


  Add a team page
    √ allows a valid team to be submitted (6346ms)
    √ shows error messages for incomplete form fields (2938ms)


  2 passing (9s)


  (Results)

  ┌───────────────────────────────┐
  │ Tests:        2               │
  │ Passing:      2               │
  │ Failing:      0               │
  │ Pending:      0               │
  │ Skipped:      0               │
  │ Screenshots:  0               │
  │ Video:        true            │
  │ Duration:     9 seconds       │
  │ Spec Ran:     addTeam.spec.js │
  └───────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\Administrator\Desktop\NBAteamVue-1.0\cypress\videos\addTeam.spec.js.mp4 (1 second)


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: contactUs.js...                                                                 (3 of 6)


  Contract us page
    √ show some information about the app (2406ms)


  1 passing (2s)


  (Results)

  ┌────────────────────────────┐
  │ Tests:        1            │
  │ Passing:      1            │
  │ Failing:      0            │
  │ Pending:      0            │
  │ Skipped:      0            │
  │ Screenshots:  0            │
  │ Video:        true         │
  │ Duration:     2 seconds    │
  │ Spec Ran:     contactUs.js │
  └────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\Administrator\Desktop\NBAteamVue-1.0\cypress\videos\contactUs.js.mp4 (0 seconds)


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: home-page.spec.js...                                                            (4 of 6)


  Home page
    √ Shows a header (2366ms)
    Navigation bar
      √ Shows the required links (1060ms)
      √ Redirects when links are clicked (586ms)


  3 passing (4s)


  (Results)

  ┌─────────────────────────────────┐
  │ Tests:        3                 │
  │ Passing:      3                 │
  │ Failing:      0                 │
  │ Pending:      0                 │
  │ Skipped:      0                 │
  │ Screenshots:  0                 │
  │ Video:        true              │
  │ Duration:     4 seconds         │
  │ Spec Ran:     home-page.spec.js │
  └─────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\Administrator\Desktop\NBAteamVue-1.0\cypress\videos\home-page.spec.js.mp4 (0 seconds)


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: login.spec.js...                                                                (5 of 6)


  Login page
    √ show some information about the login (3905ms)


  1 passing (4s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        1             │
  │ Passing:      1             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     3 seconds     │
  │ Spec Ran:     login.spec.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\Administrator\Desktop\NBAteamVue-1.0\cypress\videos\login.spec.js.mp4 (0 seconds)


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: teams.spec.js...                                                                (6 of 6)


  Manage Teams page
    √ allows a team to be deleted (15844ms)


  1 passing (16s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        1             │
  │ Passing:      1             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     15 seconds    │
  │ Spec Ran:     teams.spec.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\Administrator\Desktop\NBAteamVue-1.0\cypress\videos\teams.spec.js.mp4 (1 second)


====================================================================================================

  (Run Finished)


      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √ aboutUs.spec.js                           00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ addTeam.spec.js                           00:09        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ contactUs.js                              00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ home-page.spec.js                         00:04        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ login.spec.js                             00:03        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ teams.spec.js                             00:15        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:38        9        9        -        -        -


