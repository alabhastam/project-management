<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(3), // Generate a random task name
            'description' => $this->faker->paragraph, // Generate a random description
            'date' => $this->faker->date(), // Random date
            'status' => $this->faker->randomElement(['pending', 'in_progress', 'completed', 'on_hold']), // Random status
            'image_path' => $this->faker->imageUrl(), // Fake image URL
            'priority' => $this->faker->randomElement(['low', 'medium', 'high']), // Random priority
            'due_time' => $this->faker->time(), // Random due time
            'created_by' => User::factory(), // Associate with a random user
            'updated_by' => User::factory(), // Associate with a random user
            'assigned_user_id' => User::factory(), // Randomly assign to a user
            'project_id' => Project::factory(), // Randomly associate with a project
        ];
    }
}
