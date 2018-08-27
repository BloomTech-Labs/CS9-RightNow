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

# Database Structure

```
/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

  Known bugs:

    * If a user's login habbits varry across multiple services, 
      a new account will be created in the db for each service.

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

  Database structure:

    customers -- stores a collection of customer docs (one doc = one customer)
         \
          \
          customer -- stores user information 
            * name, email, phone, uid 
            * past appointments -- collection of id references to appointments attended in the past
            * future appointments -- collection of id references to future appointments
                    \
                     \
                     customers = {
                       uid: string,
                       first_name: string,
                       last_name: string,
                       email: string,

                       past_appointments: [],

                       future_appointments: []
                     }


    businesses -- stores a collections of business docs (one doc = one business)
              \
               \
              business -- stores business information
                * business details -- object -- name, address, phone, rating, photos, hours
                * owner details -- object -- name, email, phone
                * available appointments -- collection of id references to corresponding appointments
                * booked appointments -- collection of id references to corresponding appointments
                     \
                      \
                      businesses = {
                        business_info: {
                          name: string,
                          phone: string,
                          rating: number,
  
                          street_number: string,
                          street_name: string,
                          city: string,
                          state: string,
                          zip: string

                          photos: [],
                          hours: {}
                        },

                        owner_info: {
                          first_name: string,
                          last_name: string,
                          email: string
                          phone: string
                        },

                        available_appointments: [],

                        booked_appointments: [],

                        past_appointments: []
                      }
    
    
    appointments -- stores a collection of ALL appointments (ever?)
                \
                 \
                appointment -- stores appointment details
                  * active -- boolean -- true for future appointment - false for past appointment
                  * details -- object -- business name, address, time, cost, type
                  * business host -- reference -- ref to business id
                  * customer -- reference -- ref to customer id
                      \
                       \
                       appointment = {
                         active: boolean,

                         business_ref: reference to business host,

                         customer_ref: reference to customer,

                         details: {
                           type: string,
                           time: string,
                           cost: string
                         }
                       }
              
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */
```