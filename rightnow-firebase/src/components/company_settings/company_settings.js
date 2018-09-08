// import React, { Component } from 'react';

// import { CheckBoxContainer,
// CheckBox,
//     CheckBoxes} from '../share_settings/user_notification';
// import { Wrapper,
// PwLabel,
//     ChangePasswordInput} from '../share_settings/user_change_password';
// import {
//     Appointment,
// AppointmentList,
//     Upcoming} from '../share_settings/upcoming_appointments';
// import { PastAppointment, Past} from '../share_settings/past_appointments';
// import {
//     Container,
//     Label,
//     InputField,
//     LeftSide,
//     ContactTitle
// } from './company_contact_form';
// import BusinessProvider, { BusinessContext } from '../../context/businessContext';

// import glamorous from 'glamorous';

// export const FormContainer = glamorous.div({
//     // border: '1px solid blue',
//     width: '100%',
//     // margin: "2%",
//     border: '10px 10px',
//     backgroundColor: '#232123',
//     cover: 'no-repeat',
//     textAlign: 'center',
//     paddingTop: '2%'
// });

// export const Title = glamorous.h3({
//     color: 'white'
// })

// const Button = glamorous.button({
//     borderRadius: '7px',
//     background: '#00c6fd',
//     width: '60%',
//     height: '100%',
//     alignSelf: 'center',
//     //margin: "0 1%",
//     padding: '0 3%',
//     fontWeight: 600,
//     fontSize: '1.3em',
//     color: '#EBEBEB',
//     ':hover': {
//         cursor: 'pointer',
//         boxShadow: '2px 2px gray'
//     }
// });

// class UserSettings extends Component {
//     render() {
//         return (
//             <BusinessProvider>
//                 <BusinessContext.Consumer>
//                     {(value) => {
//                         value.getCustomerAppt(); // Get all appointments booked by the customer/user
//                         if (value.finished) {
//                         if axios request is finished
//                         if (value.queryResults.length !== 0) {
//                         check if the array is empty or not
//                         console.log('get appts', value.getCustomerAppt());
//                         console.log('test',value);
//                         return (
//                             <FormContainer>
//                                  <Title>Business Settings</Title>
//                           {/*<UpcomingAppointments userState={value.queryResults} />*/}
//                                 <Appointment>
//                                 <Upcoming>Upcoming Appointments</Upcoming>
//                                 <hr />
//                                 <AppointmentList>
//                                     <AppointmentDetails
//                                         service={"Hair Cut"}
//                                         time={"12:00 PM"}
//                                         day={"9-20-2018"}
//                                         company={"ProCuts"}
//                                         money={"45.00"}
//                                     />

//                                     <AppointmentDetails
//                                         service={"Hair Cut"}
//                                         time={"12:00 PM"}
//                                         day={"9-20-2018"}
//                                         company={"ProCuts"}
//                                         money={"45.00"}
//                                     />
//                                     <AppointmentDetails
//                                         service={"Hair Cut"}
//                                         time={"12:00 PM"}
//                                         day={"9-20-2018"}
//                                         company={"ProCuts"}
//                                         money={"45.00"}
//                                     />
//                                 </AppointmentList>
//                                 </Appointment>
//                                 {/*<PastAppointments userState={value} />*/}
//                                 <PastAppointment>
//                                     <Past>Past Appointments</Past>
//                                 </PastAppointment>
//                                 {/*<CompanyContactForm userState={value} />*/}
//                         {/* component is in company_info*/}
//                                 {/*<UserChangePassword />*/}
//                                 <h3>Password</h3>
//                                 <Label>Password</Label>

//                                 <ChangePasswordInput
//                                     type="password"
//                                     placeholder="password"
//                                     id="MyInput"
//                                 />
//                                 <PwLabel>Re-Enter Password</PwLabel>
//                                 <ChangePasswordInput
//                                     type="password"
//                                     placeholder="enter password"
//                                     id="MyInput2"
//                                 />
//                                 <PwLabel>Show Password</PwLabel>
//                                 <ChangePasswordInput
//                                     type="checkbox"
//                                     onClick={showPassword}
//                         {/* <UserNotification /> */}
//                      <Button onClick={() => this.props.UserProvider}>Save</Button>
//                             </FormContainer>
//                         );
//                         // }
//                         // }
//                     }}
//                 </BusinessContext.Consumer>
//             </BusinessProvider>
//         );
//     }
// }

// export default UserSettings;
