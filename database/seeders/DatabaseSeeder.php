<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Create 20 random users
        User::factory(20)->create();

        // Create 10 projects with each having 5 tasks
        Project::factory(10)->create()->each(function ($project) {
            Task::factory(5)->create([
                'project_id' => $project->id, // Assign tasks to the project
            ]);
        });
    }
}
