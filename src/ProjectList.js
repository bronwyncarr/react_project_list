import React from 'react'
import Project from './Project'

export default function ProjectList({projects}) {
	return (
		<div>
			{projects.map((project, index) => (
				<Project key={index} project={project} />
			))}
		</div>
	)
}
