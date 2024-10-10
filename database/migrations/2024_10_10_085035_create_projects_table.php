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
        Schema::create('projects', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Project name
            $table->text('description')->nullable(); // Description of the project
            $table->date('date'); // Project creation or assigned date
            $table->enum('status', ['pending', 'in_progress', 'completed', 'on_hold'])->default('pending'); // Project status
            $table->string('image_path')->nullable(); // Optional image path for the project
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade'); // Foreign key for the user who created the project
            $table->foreignId('updated_by')->nullable()->constrained('users')->onDelete('cascade'); // Foreign key for the user who last updated the project
            $table->timestamps(); // created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
