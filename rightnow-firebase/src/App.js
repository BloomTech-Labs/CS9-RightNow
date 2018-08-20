import React, { Component } from 'react';
// import glamorous from 'glamorous';

// sweetAlert2
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// Components
import NavBar from './components/nav_bar';
import UserLanding from './components/user_landing';


// const MySwal = withReactContent(Swal);

/* theme */

/* App */
class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<UserLanding />
			</div>
		);
	}
}

export default App;
