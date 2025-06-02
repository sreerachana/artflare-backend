db.roles.insertMany([
    { "id": 1, "role_name": "Artist" },
    { "id": 2, "role_name": "Buyer" },
    { "id": 3, "role_name": "Admin" }
  ]);

//  inserting users

  db.users.insertMany([
    {
      "user_id": "UUID1", "name": "User1", "phone_number": "9876543200",
      "email": "user1@example.com", "password": "pass1word",
      "role_id": 1, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID2", "name": "User2", "phone_number": "9876543201",
      "email": "user2@example.com", "password": "pass2word",
      "role_id": 2, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID3", "name": "User3", "phone_number": "9876543202",
      "email": "user3@example.com", "password": "pass3word",
      "role_id": 1, "block_status": true, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID4", "name": "User4", "phone_number": "9876543203",
      "email": "user4@example.com", "password": "pass4word",
      "role_id": 2, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID5", "name": "User5", "phone_number": "9876543204",
      "email": "user5@example.com", "password": "pass5word",
      "role_id": 1, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID6", "name": "User6", "phone_number": "9876543205",
      "email": "user6@example.com", "password": "pass6word",
      "role_id": 2, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID7", "name": "User7", "phone_number": "9876543206",
      "email": "user7@example.com", "password": "pass7word",
      "role_id": 1, "block_status": true, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID8", "name": "User8", "phone_number": "9876543207",
      "email": "user8@example.com", "password": "pass8word",
      "role_id": 2, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID9", "name": "User9", "phone_number": "9876543208",
      "email": "user9@example.com", "password": "pass9word",
      "role_id": 1, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    },
    {
      "user_id": "UUID10", "name": "User10", "phone_number": "9876543209",
      "email": "user10@example.com", "password": "pass10word",
      "role_id": 2, "block_status": false, "profile_photo": null,
      "created_at": ISODate("2025-05-06T00:00:00Z"), "updated_at": ISODate("2025-05-06T00:00:00Z"),
      "is_deleted": false, "deleted_at": null
    }
  ]);


// inserting categories
db.categories.insertMany([
    { "id": 1, "category": "Painting" },
    { "id": 2, "category": "Sketch" },
    { "id": 3, "category": "Digital Art" },
    { "id": 4, "category": "Sculpture" },
    { "id": 5, "category": "Photography" },
    { "id": 6, "category": "Illustration" },
    { "id": 7, "category": "Abstract" },
    { "id": 8, "category": "Modern" },
    { "id": 9, "category": "Classic" },
    { "id": 10, "category": "Fantasy" }
  ]);
  

// inserting artworks
db.artworks.insertMany([
    {
      "id": 1, "artist_id": "UUID3", "art_name": "ArtPiece1",
      "art_image": null, "pricing": 872.52,
      "description": "Description for ArtPiece1",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 2.4, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 5, "category_id": 1, "payment_id": null
    },
    {
      "id": 2, "artist_id": "UUID5", "art_name": "ArtPiece2",
      "art_image": null, "pricing": 1200.00,
      "description": "Description for ArtPiece2",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 3.8, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 3, "category_id": 2, "payment_id": null
    },
    {
      "id": 3, "artist_id": "UUID1", "art_name": "ArtPiece3",
      "art_image": null, "pricing": 452.00,
      "description": "Description for ArtPiece3",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 4.5, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 2, "category_id": 3, "payment_id": null
    },
    {
      "id": 4, "artist_id": "UUID6", "art_name": "ArtPiece4",
      "art_image": null, "pricing": 999.99,
      "description": "Description for ArtPiece4",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 1.9, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 10, "category_id": 1, "payment_id": null
    },
    {
      "id": 5, "artist_id": "UUID2", "art_name": "ArtPiece5",
      "art_image": null, "pricing": 745.75,
      "description": "Description for ArtPiece5",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 3.2, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 1, "category_id": 2, "payment_id": null
    },
    {
      "id": 6, "artist_id": "UUID7", "art_name": "ArtPiece6",
      "art_image": null, "pricing": 300.10,
      "description": "Description for ArtPiece6",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 4.9, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 4, "category_id": 3, "payment_id": null
    },
    {
      "id": 7, "artist_id": "UUID9", "art_name": "ArtPiece7",
      "art_image": null, "pricing": 580.00,
      "description": "Description for ArtPiece7",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 2.0, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 6, "category_id": 1, "payment_id": null
    },
    {
      "id": 8, "artist_id": "UUID4", "art_name": "ArtPiece8",
      "art_image": null, "pricing": 1100.00,
      "description": "Description for ArtPiece8",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 3.7, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 8, "category_id": 2, "payment_id": null
    },
    {
      "id": 9, "artist_id": "UUID10", "art_name": "ArtPiece9",
      "art_image": null, "pricing": 250.00,
      "description": "Description for ArtPiece9",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 4.3, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 2, "category_id": 3, "payment_id": null
    },
    {
      "id": 10, "artist_id": "UUID8", "art_name": "ArtPiece10",
      "art_image": null, "pricing": 675.30,
      "description": "Description for ArtPiece10",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "rating": 3.5, "updated_date": ISODate("2025-05-06T00:00:00Z"),
      "quantity": 7, "category_id": 1, "payment_id": null
    }
  ]);

  
// inserting orders
db.orders.insertMany([
    {
      "id": 1, "user_id": "UUID7",
      "total_amt": 1403.28, "status_id": "SHIPPING",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 2, "user_id": "UUID2",
      "total_amt": 899.50, "status_id": "PLACED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 3, "user_id": "UUID5",
      "total_amt": 1520.00, "status_id": "DELIVERED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 4, "user_id": "UUID1",
      "total_amt": 430.75, "status_id": "CANCELLED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 5, "user_id": "UUID9",
      "total_amt": 670.10, "status_id": "SHIPPING",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 6, "user_id": "UUID3",
      "total_amt": 300.00, "status_id": "PLACED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 7, "user_id": "UUID6",
      "total_amt": 999.99, "status_id": "DELIVERED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 8, "user_id": "UUID4",
      "total_amt": 785.25, "status_id": "PLACED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 9, "user_id": "UUID10",
      "total_amt": 1200.00, "status_id": "CANCELLED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 10, "user_id": "UUID8",
      "total_amt": 460.60, "status_id": "DELIVERED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "order_date": ISODate("2025-05-06T00:00:00Z")
    }
  ]);

// inserting order_items
db.order_items.insertMany([
    {
      "order_item_id": 1, "order_id": 2, "art_id": 6,
      "quantity": 1, "price_at_purchase": 508.93,
      "deliver_date": ISODate("2025-05-09T00:00:00Z"),
      "status_id": "PENDING"
    },
    {
      "order_item_id": 2, "order_id": 3, "art_id": 4,
      "quantity": 2, "price_at_purchase": 650.00,
      "deliver_date": ISODate("2025-05-10T00:00:00Z"),
      "status_id": "SHIPPED"
    },
    {
      "order_item_id": 3, "order_id": 5, "art_id": 8,
      "quantity": 1, "price_at_purchase": 785.25,
      "deliver_date": ISODate("2025-05-12T00:00:00Z"),
      "status_id": "DELIVERED"
    },
    {
      "order_item_id": 4, "order_id": 6, "art_id": 3,
      "quantity": 3, "price_at_purchase": 150.00,
      "deliver_date": ISODate("2025-05-13T00:00:00Z"),
      "status_id": "PENDING"
    },
    {
      "order_item_id": 5, "order_id": 7, "art_id": 9,
      "quantity": 1, "price_at_purchase": 1200.00,
      "deliver_date": ISODate("2025-05-14T00:00:00Z"),
      "status_id": "SHIPPED"
    },
    {
      "order_item_id": 6, "order_id": 1, "art_id": 7,
      "quantity": 2, "price_at_purchase": 450.00,
      "deliver_date": ISODate("2025-05-11T00:00:00Z"),
      "status_id": "DELIVERED"
    },
    {
      "order_item_id": 7, "order_id": 8, "art_id": 10,
      "quantity": 1, "price_at_purchase": 460.60,
      "deliver_date": ISODate("2025-05-15T00:00:00Z"),
      "status_id": "PENDING"
    },
    {
      "order_item_id": 8, "order_id": 9, "art_id": 2,
      "quantity": 1, "price_at_purchase": 899.50,
      "deliver_date": ISODate("2025-05-16T00:00:00Z"),
      "status_id": "CANCELLED"
    },
    {
      "order_item_id": 9, "order_id": 4, "art_id": 5,
      "quantity": 3, "price_at_purchase": 745.75,
      "deliver_date": ISODate("2025-05-17T00:00:00Z"),
      "status_id": "PENDING"
    },
    {
      "order_item_id": 10, "order_id": 10, "art_id": 1,
      "quantity": 2, "price_at_purchase": 872.52,
      "deliver_date": ISODate("2025-05-18T00:00:00Z"),
      "status_id": "SHIPPED"
    }
  ]);

  
// inserting cart details
db.cart.insertMany([
    {
      "id": 1, "user_id": "UUID4", "art_id": 3,
      "quantity": 4,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 2, "user_id": "UUID7", "art_id": 6,
      "quantity": 1,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 3, "user_id": "UUID3", "art_id": 5,
      "quantity": 2,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 4, "user_id": "UUID1", "art_id": 8,
      "quantity": 1,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 5, "user_id": "UUID9", "art_id": 2,
      "quantity": 3,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 6, "user_id": "UUID5", "art_id": 7,
      "quantity": 1,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 7, "user_id": "UUID6", "art_id": 10,
      "quantity": 2,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 8, "user_id": "UUID8", "art_id": 4,
      "quantity": 5,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 9, "user_id": "UUID10", "art_id": 9,
      "quantity": 2,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 10, "user_id": "UUID2", "art_id": 1,
      "quantity": 1,
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    }
  ]);

  
// inserting payments
db.payments.insertMany([
    {
      "id": 1, "order_id": 9, "payment_amt": 2655.34,
      "status_id": "SHIPPING",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 2, "order_id": 6, "payment_amt": 999.99,
      "status_id": "PLACED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 3, "order_id": 3, "payment_amt": 1520.00,
      "status_id": "DELIVERED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 4, "order_id": 5, "payment_amt": 899.50,
      "status_id": "CANCELLED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 5, "order_id": 7, "payment_amt": 1200.00,
      "status_id": "SHIPPING",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 6, "order_id": 8, "payment_amt": 785.25,
      "status_id": "PLACED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 7, "order_id": 1, "payment_amt": 430.75,
      "status_id": "SHIPPED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 8, "order_id": 2, "payment_amt": 899.50,
      "status_id": "DELIVERED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 9, "order_id": 10, "payment_amt": 460.60,
      "status_id": "CANCELLED",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    },
    {
      "id": 10, "order_id": 4, "payment_amt": 745.75,
      "status_id": "SHIPPING",
      "created_at": ISODate("2025-05-06T00:00:00Z"),
      "updated_at": ISODate("2025-05-06T00:00:00Z")
    }
  ]);

  
// inserting rarting details
db.ratings.insertMany([
    { "review_id": 1, "review": "This is review 1", "rating": 2 },
    { "review_id": 2, "review": "This is review 2", "rating": 2 },
    { "review_id": 3, "review": "This is review 3", "rating": 3 },
    { "review_id": 4, "review": "This is review 4", "rating": 5 },
    { "review_id": 5, "review": "This is review 5", "rating": 1 },
    { "review_id": 6, "review": "This is review 6", "rating": 4 },
    { "review_id": 7, "review": "This is review 7", "rating": 3 },
    { "review_id": 8, "review": "This is review 8", "rating": 5 },
    { "review_id": 9, "review": "This is review 9", "rating": 2 },
    { "review_id": 10, "review": "This is review 10", "rating": 4 }
  ]);
  
  
  db.wishlist.insertMany([
    {
      "_id": 1,
      "user_id": 'UUID1',
      "art_id": 'UUID10',
      "created_at": "2025-05-20T10:15:00Z"
    },
    {
      "_id": 2,
      "user_id": 'UUID2',
      "art_id": 'UUID9',
      "created_at": "2025-05-20T11:00:00Z"
    },
    {
      "_id": 3,
      "user_id": 'UUID3',
      "art_id": 'UUID8',
      "created_at": "2025-05-20T12:30:00Z"
    },
    {
      "_id": 4,
      "user_id": 'UUID4',
      "art_id": 'UUID7',
      "created_at": "2025-05-20T13:10:00Z"
    },
    {
      "_id": 5,
      "user_id": 'UUID5',
      "art_id": 'UUID6',
      "created_at": "2025-05-20T14:45:00Z"
    },
    {
      "_id": 6,
      "user_id": 'UUID6',
      "art_id": 'UUID5',
      "created_at": "2025-05-20T15:30:00Z"
    },
    {
      "_id": 7,
      "user_id": 'UUID7',
      "art_id": 'UUID4',
      "created_at": "2025-05-20T16:05:00Z"
    },
    {
      "_id": 8,
      "user_id": 'UUID8',
      "art_id": 'UUID3',
      "created_at": "2025-05-20T16:40:00Z"
    },
    {
      "_id": 9,
      "user_id": "UUID9",
      "art_id": 'UUID2',
      "created_at": "2025-05-20T17:25:00Z"
    },
    {
      "_id": 10,
      "user_id": 'UUID10',
      "art_id": 'UUID1',
      "created_at": "2025-05-20T18:10:00Z"
    }
  ]
  );
  
  db.wallet.insertMany([
    {
      "_id": 1,
      "artist_id": 201,
      "balance": 1500.00,
      "last_updated": "2025-05-20T10:00:00Z"
    },
    {
      "_id": 2,
      "artist_id": 202,
      "balance": 850.50,
      "last_updated": "2025-05-20T11:30:00Z"
    },
    {
      "_id": 3,
      "artist_id": 203,
      "balance": 1200.75,
      "last_updated": "2025-05-20T12:15:00Z"
    },
    {
      "_id": 4,
      "artist_id": 204,
      "balance": 950.00,
      "last_updated": "2025-05-20T13:45:00Z"
    },
    {
      "_id": 5,
      "artist_id": 205,
      "balance": 400.25,
      "last_updated": "2025-05-20T14:10:00Z"
    },
    {
      "_id": 6,
      "artist_id": 206,
      "balance": 300.00,
      "last_updated": "2025-05-20T15:20:00Z"
    },
    {
      "_id": 7,
      "artist_id": 207,
      "balance": 780.10,
      "last_updated": "2025-05-20T16:30:00Z"
    },
    {
      "_id": 8,
      "artist_id": 208,
      "balance": 50.00,
      "last_updated": "2025-05-20T17:40:00Z"
    },
    {
      "_id": 9,
      "artist_id": 209,
      "balance": 1100.00,
      "last_updated": "2025-05-20T18:50:00Z"
    },
    {
      "_id": 10,
      "artist_id": 210,
      "balance": 0.00,
      "last_updated": "2025-05-20T19:00:00Z"
    }
  ]
  );  
  

// 