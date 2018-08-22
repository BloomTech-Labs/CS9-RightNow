import React, { Component } from "react";
import {
  Container, 
  Sorting, 
  Time,
  SortBy
} from "./selection_results_styles";
import AppointmentCard from "../appointment_card/appt_card";

// DUMMY DATA
const information = {
  0: {
    businessImage: "https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg",
    businessName: "Caputo's Bake Shop",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4.5,
    appointments: {
      0: {
        type: "Haircut",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Haircut",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Haircut",
        time: "4:30-5:00",
        cost: "$105"
      }
    }
  },
  1: {
    businessImage: "http://shantltalibarbershop.com/assets/img/gallery/2.jpg",
    businessName: "Shantl Barber Shop",
    streetAddress: "1209 2nd Avenue",
    cityStateZip: "New York, NY 10065",
    rating: 5,
    appointments: {
      0: {
        type: "Shave",
        time: "12:30-2:00",
        cost: "$35"
      },
      1: {
        type: "Shave",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Shave",
        time: "3:30-5:00",
        cost: "$50"
      }
    }
  },
  2: {
    businessImage: "https://resourcedesignlab.files.wordpress.com/2010/08/storefront_smithsbar.jpg",
    businessName: "Smiths",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4,
    appointments: {
      0: {
        type: "Something",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Goes",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Here",
        time: "4:30-5:00",
        cost: "$105"
      }
    }
  },
  3: {
    businessImage: "https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg",
    businessName: "Caputo's Bake Shop",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4.5,
    appointments: {
      0: {
        type: "Haircut",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Haircut",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Haircut",
        time: "4:30-5:00",
        cost: "$105"
      }
    }
  },
  4: {
    businessImage: "http://shantltalibarbershop.com/assets/img/gallery/2.jpg",
    businessName: "Shantl Barber Shop",
    streetAddress: "1209 2nd Avenue",
    cityStateZip: "New York, NY 10065",
    rating: 5,
    appointments: {
      0: {
        type: "Shave",
        time: "12:30-2:00",
        cost: "$35"
      },
      1: {
        type: "Shave",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Shave",
        time: "3:30-5:00",
        cost: "$50"
      }
    }
  },
  5: {
    businessImage: "https://resourcedesignlab.files.wordpress.com/2010/08/storefront_smithsbar.jpg",
    businessName: "Smiths",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4,
    appointments: {
      0: {
        type: "Something",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Goes",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Here",
        time: "4:30-5:00",
        cost: "$105"
      }
    }
  },
  6: {
    businessImage: "https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg",
    businessName: "Caputo's Bake Shop",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4.5,
    appointments: {
      0: {
        type: "Haircut",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Haircut",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Haircut",
        time: "4:30-5:00",
        cost: "$105"
      }
    }
  },
  7: {
    businessImage: "http://shantltalibarbershop.com/assets/img/gallery/2.jpg",
    businessName: "Shantl Barber Shop",
    streetAddress: "1209 2nd Avenue",
    cityStateZip: "New York, NY 10065",
    rating: 5,
    appointments: {
      0: {
        type: "Shave",
        time: "12:30-2:00",
        cost: "$35"
      },
      1: {
        type: "Shave",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Shave",
        time: "3:30-5:00",
        cost: "$50"
      }
    }
  },
  8: {
    businessImage: "https://resourcedesignlab.files.wordpress.com/2010/08/storefront_smithsbar.jpg",
    businessName: "Smiths",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4,
    appointments: {
      0: {
        type: "Something",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Goes",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Here",
        time: "4:30-5:00",
        cost: "$105"
      }
    }
  }
}

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString() })
  }
  
  render() {
    return (
      <Container>

        <Sorting>
            <h2>Current time:</h2>
            <Time>{this.state.time}</Time>
            <SortBy>
              <option disabled selected hidden>Sort By</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5+ hours</option>
            </SortBy>
        </Sorting>

        {Object.keys(information).map((key, index) => <AppointmentCard businessInfo={information[key]} key={index} /> )}
        
      </Container>
    )
  }
}
