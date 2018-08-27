# API

**URL** -- https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/

**Customer Paths**
- `/customer` -- POST -- create a new customer
- `/customer/:id` -- GET -- retireve all customer data except for appointment collections
- `/customer/:id` -- PUT -- update customer by id
- `/customer/:id/upcoming` -- GET -- fetch array of customer's future appointments
- `/customer/:id/past` -- GET -- fetch customer's past appointments

**Business Paths**
- `/business` -- POST -- create a new business
- `/business/:id` -- GET -- retrieve business details and owner details
- `/business/:id` -- PUT -- update existing business by id
- `/business/:id/available` -- GET -- fetch array of available appointments
- `/business/:id/booked` -- GET -- get business' booked appointments
- `/business/:id/past` -- GET -- fetch business' past appointments

**Appointment Paths**
- `/appointment` -- POST -- create a new appointment
- `/appointment/:id` -- GET -- fetch appointment by id
- `/appointment/:id` -- DELETE -- delete existing appointment
- `/appointment/:id/confirm` -- PUT -- customer confirms appointment -- adds customer ref to appointment


# To test NEW functions locally...

0. Requirements: Firebase CLI

1. `cd` into the `functions` directory

2. run `yarn` to install dependencies 

3. run `yarn compile-funcs` to compile with babel

4. run `yarn serve`

5. have some fun with postman

