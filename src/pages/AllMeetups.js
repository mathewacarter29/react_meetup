import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //takes 2 params - function and dependencies (empty dependency array executes only first time)
  useEffect(() => {
    setIsLoading(true);
    //Fetch the data before we render the page
    fetch(
      "https://react-getting-started-93fea-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        //The json method will turn the fetch response into a javascript object
        //however, this method also returns a Promise, so we need to wait until it is done also
        return response.json();
      })
      .then((data) => {
        //extract array of meetups from data, but we need to make the page wait for this to finish before putting stuff on the screen
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            //Use ... (spread operator) to add all elements of an object
            ...data[key],
          };
          meetups.push(meetup);
        }
        //changing state would reload the component, and re-fetch the data, causing another reload
        //this would cause an infinite loop
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
