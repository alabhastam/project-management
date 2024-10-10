<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Task name
            $table->text('description')->nullable(); // Task description
            $table->date('date'); // Task creation or assigned date
            $table->enum('status', ['pending', 'in_progress', 'completed', 'on_hold'])->default('pending'); // Task status
            $table->string('image_path')->nullable(); // Optional image path for the task
            $table->enum('priority', ['low', 'medium', 'high'])->default('medium'); // Task priority
            $table->time('due_time')->nullable(); // Due time for the task
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade'); // Foreign key to the projects table
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade'); // Foreign key for task creator
            $table->foreignId('updated_by')->nullable()->constrained('users')->onDelete('cascade'); // Foreign key for the user who last updated the task
            $table->foreignId('assigned_user_id')->nullable()->constrained('users')->onDelete('set null'); // Foreign key for the user assigned to the task
            $table->timestamps(); // created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
