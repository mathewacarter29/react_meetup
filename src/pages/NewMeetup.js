import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  //Object to allow us to navigate using the URL history
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    //Send an HTTP request
    //fetch(firebase URL/meetups (adds a meetups table to the database).json, )
    fetch(
      "https://react-getting-started-93fea-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
