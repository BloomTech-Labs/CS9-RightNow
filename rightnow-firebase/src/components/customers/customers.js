import React, { Component } from 'react';
import UserProvider from '../../context/userContext';
import QuickSearch from '../_quickSearch/quickSearch';

// import UserLanding from '../user_landing';
import FeaturedAppointments from '../featured_appointments/feat_appts';
import IndustryView from '../industry_view/industry_view';

import glamorous from 'glamorous';

import Landing from './landing';

const HomeContainer = glamorous.div({
	width: '100vw',
	paddingBottom: '10%'
});

export default class Customers extends Component {
	render() {
		// console.log('prop check', this.props.businessContext);
		return (
			<HomeContainer>
				<UserProvider>
					<Landing businessContext={this.props.businessContext} />
					<FeaturedAppointments />
					<IndustryView />
				</UserProvider>
			</HomeContainer>
		);
	}
}
