import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const ProjectsIndex = ({ projects }) => {
    return (
        <div className="container">
            <h1>All Projects</h1>

            {projects.length === 0 ? (
                <p>No projects available.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.name}</td>
                                <td>{project.description.substring(0, 50)}...</td>
                                <td>{project.status}</td>
                                <td>{project.date}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm">View</button>
                                    <button className="btn btn-warning btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProjectsIndex;
