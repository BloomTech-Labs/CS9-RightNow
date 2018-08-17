Table of Contents
-----------------

* About
* Requirements 
* Configuration
* Firebase Backend Architecture
* Maintaining


<h2>About:</h2>
This is a full-stack scheduling application. Businesses may launch new ventures and host appointment calendars, while users may see available openings and schedule appointments in real-time.

<h2>Requirements:</h2>
Internet connection and computer (for Desktop) or smart phone (for Mobile)

<h2>Configuration:</h2>
Privacy settings available in the profile settings

<h2>Firebase Backend Architecture</h2>
Firebase acts as a backend-as-a-service, providing an abstraction for data storage and retreival. Because this is abstracted away, we utilize firebase functions to interact with their backend and manage our data. In order to provide additional clarity, we provide a brief outline of our backend architecture here:

<h4>Database, Collections, and Documents </h4>
<h4>Backend Functions</h4>

<h2>Maintaining</h2>
Our Application runs React on the front end, a Go backend, Redis for caching, and Mongodb to hold the data. It is deployed on AWS.

This is a full stack-application developed by Anthony, Mark, Henry, Harrison, and Jeffrey. 
