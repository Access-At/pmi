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
    Schema::table('users', function (Blueprint $table) {
      $table->string("image_path")->nullable();
      $table->string("registration_number")->nullable();
      $table->enum("gender", [
        "male",
        "female"
      ]);
      $table->string("domisili")->nullable();
      $table->enum('type', [
        'A',
        'B',
        'AB',
        'O',
      ]);
      $table->enum("rhesus", [
        "positive",
        "negative"
      ]);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('user', function (Blueprint $table) {
      //
    });
  }
};
