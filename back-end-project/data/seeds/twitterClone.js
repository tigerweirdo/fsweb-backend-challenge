/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("likes").del();
    await knex("comments").del();
    await knex("posts").del();
    await knex("users").del();
  
    // Inserts seed entries for users table
    await knex("users").insert([
      {
        user_id: 1,
        username: "temmuz",
        password: "1234",
        email: "temmuz@example.com",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNJW6PmSHckO6yxG6h2RhLLd3gB_JXOGZPQWAB1Q&s",
      },
      {
        user_id: 2,
        username: "ismet",
        password: "1234",
        email: "ismet@example.com",
        avatar:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cyclistmag.com.tr%2F2020%2F12%2F11%2Fbir-ayi-ile-karsilasirsam-ne-yapmaliyim%2F&psig=AOvVaw33xYKh1U3985V4A-An0PQr&ust=1689884080560000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjPsPXKm4ADFQAAAAAdAAAAABAE",
      },
      {
        user_id: 3,
        username: "chris",
        password: "password",
        email: "chris@example.com",
        avatar:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb",
      },
    ]);
  
    // Inserts seed entries for posts table
    await knex("posts").insert([
      {
        post_id: 1,
        user_id: 1,
        content: "Hello, Twitter!",
        created_at: new Date(),
      },
      {
        post_id: 2,
        user_id: 2,
        content: "Tweeting my thoughts...",
        created_at: new Date(),
      },
      {
        post_id: 3,
        user_id: 3,
        content: "Just joined Twitter!",
        created_at: new Date(),
      },
    ]);
  
    // Inserts seed entries for comments table
    await knex("comments").insert([
      {
        comment_id: 1,
        user_id: 2,
        post_id: 1,
        content: "Nice to meet you, Temmuz!",
        created_at: new Date(),
      },
      {
        comment_id: 2,
        user_id: 3,
        post_id: 1,
        content: "Welcome to Twitter!",
        created_at: new Date(),
      },
      {
        comment_id: 3,
        user_id: 1,
        post_id: 2,
        content: "I like your tweets!",
        created_at: new Date(),
      },
    ]);
  
    // Inserts seed entries for likes table
    await knex("likes").insert([
      { like_id: 1, user_id: 3, post_id: 1, created_at: new Date() },
      { like_id: 2, user_id: 1, post_id: 2, created_at: new Date() },
      { like_id: 3, user_id: 2, comment_id: 3, created_at: new Date() },
    ]);
  };