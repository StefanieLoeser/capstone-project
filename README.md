
![rekordbag_phone-mockup](https://user-images.githubusercontent.com/104068626/196662850-ad47a830-3a45-4762-ad03-5bb55d4a9222.png)


## RekordBag 

This app was developed as a Capstone Project for the Web Development Bootcamp at neuefische (07-10/2022). It enables vinyl DJs to prepare a selection of records from their collection for their upcoming gig digitally instead of spending hours in front of their reccord shelve. 


### About 
The collection data gets fetched from the user's [Discogs](https://www.discogs.com/) collection database. You can browse through those records in a list view, seeing the cover and information on the artist, title, label and year of the release. Track information can be toggles via a button, as can be a form to add YouTube-videos via pasting and adding a link. Based on the given information and after pre-listening to your favorite songs you can make a selection and bookmark records for your gig that are shown in your digital recordbag. This way you don't need to grab and listen to all your actual records but only pick them up when you have a final list. 


### Demo
Try it out yourself on Vercel: [RekordBag](https://rekordbag.vercel.app/)

https://user-images.githubusercontent.com/104068626/196183640-1897d780-8638-45a6-97a3-39d76cd55cb5.mov


### How to Run
- Clone repository
- create a `.env.local`-file according to the `.env.example` inside the root folder
- Add your `DISCOGS_USER_TOKEN` from [discogs](https://www.discogs.com/)
- install all dependencies via `$ npm install`
- Run app in development mode via `$ npm run dev`
- visit on: http://localhost:3000/

### Techstack
- NextJS
- React
- styled components
- React Hook Form
- localStorage
- Discogs API
