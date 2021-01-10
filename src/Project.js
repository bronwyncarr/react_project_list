import React from 'react'
import {ProjectHeading, Card} from './Styled'

export default function Project({project}) {
	const {name, description, tech, status} = project
	return (
		<Card>
			<ProjectHeading>{name}</ProjectHeading>
			<p>{tech}</p>
			<p>{description}</p>
			<p>{status}</p>
		</Card>
	)
}
