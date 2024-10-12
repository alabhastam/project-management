<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the projects.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // Fetch all projects from the database
        $projects = Project::all();

        // Return the Inertia view with the projects data
        return Inertia::render('Projects/Index', [
            'projects' => $projects
        ]);
    }
}
