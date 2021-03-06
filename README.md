# Veritone - Shopping List

## How to install and run

### To Install
```
git clone https://github.com/ronakh130/Veritone-ShoppingList.git
cd Veritone-ShoppingList
npm i
```

### To Run
```
npm start (to run app)
npm run test (to run tests)
```

After executing the start command, a new tab should automatically open in your default browser. If it either doesn't open or you'd like to manually open the site, visit http://localhost:8080/.

## Thoughts

### Tech Stack
The tech stack I ended up using was React, Redux ToolKit, and Node/Express. I decided not to use React Router since there were only 2 main pages and I felt this could easily be accomplished with conditional rendering. As for the Redux decision, I'm not familiar with Redux-Saga and traditional Redux has a lot of initial boilerplate which I felt was overkill for the size of this app so I went with the Redux Toolkit which has the quicker startup time and is more readable in my opinion. I was also planning on learning and using MaterialUI but I ended up not having as much time as I would have liked to work on this so I decided to prioritize the more core features of the app instead. This was, however, the first time I used styled-components though which I actually really enjoyed and will definitely use it in my future projects.


### Thoughts
- I was a little confused with the requirement of the numerical dropdown for user input. I went ahead and assumed the dropdown on the addItem modal was to add multiple items at once while the editItem modal updates the quantity of each single listItem. There's also the ability to increase the amount the dropdown can go up to by simply changing a constant variable but for now I just left it at 5.
- The test suite is an area that could greatly benefit from being iterated on. Currently, the redux reducers are fully covered and I have a basic test to check if the app opens initially. If I had more time, this is definitely one area I would improve by increasing the overall coverage of react components with the unit testing as well as add end to end testing with mock user inputs.
- The app in its current state is able to preserve user input with the redux state but it all gets wiped when the app is closed. I was planning on adding some kind of persistant storage by either connecting to a database or even create a local file but like above, the time crunch made me prioritize the more core features.
- The loading screen didn't make my deadline since it was my lowest priority for 2 reasons, it didn't affect the functionality of the app and there being no delay in state updates since I had no queries being made to some backend. However, if I did get to this stage I believe the best way to do this would be conditionally rendering it similarly to the modals except the state variable it's linked to gets updated everytime a fetch is made to the backend and resetting it once the fetch is finished.