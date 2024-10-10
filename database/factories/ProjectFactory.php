<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(3), // Generate a random project name
            'description' => $this->faker->paragraph, // Generate a random description
            'date' => $this->faker->date(), // Random date
            'status' => $this->faker->randomElement(['pending', 'in_progress', 'completed', 'on_hold']), // Random status
            'image_path' => $this->faker->imageUrl(), // Fake image URL
            'created_by' => User::factory(), // Associate with a random user
            'updated_by' => User::factory(), // Associate with a random user
        ];
    }
}
