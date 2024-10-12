import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ProjectsIndex({ projects }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortField, setSortField] = useState('name'); // Default sort by name
    const [sortOrder, setSortOrder] = useState('asc'); // Default sort order

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Function to handle sorting
    const handleSort = (field) => {
        const newSortOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(newSortOrder);
    };

    // Filter projects based on search query
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filtered projects
    const sortedProjects = filteredProjects.sort((a, b) => {
        const isAsc = sortOrder === 'asc';

        if (sortField === 'name') {
            return isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }

        if (sortField === 'date') {
            return isAsc ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        }

        return 0; // Default case (shouldn't hit)
    });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-dark shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* Search Input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                            </div>

                            {/* Projects Table */}
                            {sortedProjects.length === 0 ? (
                                <p>No projects available.</p>
                            ) : (
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400 cursor-pointer"
                                                onClick={() => handleSort('name')}
                                            >
                                                Name {sortField === 'name' && (sortOrder === 'asc' ? '🔼' : '🔽')}
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                                Description
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400 "
                                                onClick={() => handleSort('date')}
                                            >
                                                Status 
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400 cursor-pointer">
                                                Date {sortField === 'date' && (sortOrder === 'asc' ? '🔼' : '🔽')}
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-dark divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {sortedProjects.map((project) => (
                                            <tr key={project.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {project.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                    {project.description.substring(0, 50)}... (truncated)
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                    {project.status}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                    {project.date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                    <button className="mx-1 btn btn-primary btn-sm">View</button>
                                                    <button className="mx-1 btn btn-warning btn-sm">Edit</button>
                                                    <button className="mx-1 btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
