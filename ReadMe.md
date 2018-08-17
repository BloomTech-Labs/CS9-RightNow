Table of Contents
-----------------

* About
* Requirements 
* Configuration
* Firebase Backend Architecture
* Maintaining


<h2>About:</h2>
This is a full-stack scheduling application. Businesses may launch new ventures and hobusinessppointmenes calendars,business users may see available openings and schedule appointments in real-time.

<h2>Requirements:</h2>
Internet connection and computer (for Desktop) or smart phone (for Mobile)

<h2>Configuration:</h2>
Privacy settings available in the profile settings

<h2>Firebase Backend Architecture</h2>
Firebase acts as a backend-as-a-service, providing an abstraction for data storage and retreival. Because this is abstracted away, we utilize firebase functions to interact with their backend and manage our data. In order to provide additional clarity, we provide a brief outline of our backend architecture here:

<h4>Database, Collections, and Documents </h4>
Firebase currently has two available databases: Cloud Firestore and Firebase Realtime Database. Cloud Firestore provides all of the features of the Realtime Database, with additional scalability, query, and development features. 

This database provides us with a scalable, non-relational (NoSQL) database, which contains collections of documents to serve as a blueprint for each of the items in our database. Our database is structured with 3 collections (appointments, businesses, users), each of which has 1 document (appointment, business, user), which outlines the fields of each entry. 

**Collection -> Document -> Field:**
* appointments -> appointment -> startDate, endDate, company, service, cost, booked location, uniqueId 
* users -> user -> name, phone, email, bookedAppointments, pastAppointments, uniqueId
* businesses -> business -> name, phone, email, bookedAppointments, openAppointments, pastAppointments, service, street#, streetAddress, city, state, zip, ratings, uniqueId

<h4>Backend Functions</h4>
Because the database is handled directly through Firebase, our applications utilize firebase functions to instruct the firebase API to retrieve or update the data we need. Below is an example of the function we utilize to retreive all unbooked appointments and move them to state:

```firebase.database().ref("appointments").orderByChild("booked").equalTo("no");
    appointmentsFilter.on('value', snapshot => {
      let appointmentsArr = snapshot.val();
      let newState = [];
      for (let appointment in appointmentsArr) {
        newState.push({
          id: appointment,
          name: appointmentArr[appointment].name,
          startDate: appointmentArr[appointment].startDate,
          zip: appointmentArr[appointment].zip,
        });
      }
      this.setState({
        appointments: newState
      });
    });
```

Firebase functions allow us to chain multiple filters together. For instance, we can search for all unbooked appointments for a specific specific industry, such as haircuts: 

```firebase.database().ref("appointments").orderByChild("booked").equalTo("no").orderByChild("service".equalTo("haircuts";
    appointmentsFilter.on('value', snapshot => {
      let appointmentsArr = snapshot.val();
      let newState = [];
      for (let appointment in appointmentsArr) {
        newState.push({
          id: appointment,
          name: appointmentArr[appointment].name,
          startDate: appointmentArr[appointment].startDate,
          zip: appointmentArr[appointment].zip,
        });
      }
      this.setState({
        appointments: newState
      });
    });
```

For more information, please consult the Firebase Documentation https://firebase.google.com/docs/functions/

<h2>Maintaining</h2>
Our Application runs React on the front end, a Go backend, Redis for caching, and Mongodb to hold the data. It is deployed on AWS.

This is a full stack-application developed by Anthony, Mark, Henry, Harrison, and Jeffrey. 
