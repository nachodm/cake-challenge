# Structure

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Hence, this app follows the Nextjs recommended architecture. The app folder contains each of the routes of the application in a different folder (part1, part2). You may see some other folders such as components, which contains the common components across the app. This folder does not create a new route for the app, as it does not contain the page.tsx file that makes the Next.js router generate a new route.

Within each route, the architecture is also quite common across most of ReactJS projects. You may find a components folder with those components used within that page, and also a types and mocks data folders. As I'm using TypeScript, I like to store types in their own folder when they are used in several places. Mocks folder contains that mock data used in the carousel.

We can also find a src folder that only contains the theme I'm using for MUI in this app. Having only two hours, I obviously didnt have time to set up the theme as I would have liked to, containing all colors, fonts, and custom elements to match perfectly Cake guidelines. Nonetheless, I've included two components overwrites as an example.

## The task

I've performed the two parts of this task in different tabs, with a home tab from which you can navigate to one or another.

The first part of the task is the one in which I found the instructions more confusing: I didn't know whether I had to do the whole dark theme (which I've done a couple of times in MUI, but takes more than the two hours limit that you state in the task), and I also didn´t fully grasp if I was supossed to change the switch button with the Toggle button of the Modal (hope I had to, as that's how it's currently working)

The second part was much easier to understand. I've decided to not use all of MUI power to handle by myself some of the responsiveness required for this task.
