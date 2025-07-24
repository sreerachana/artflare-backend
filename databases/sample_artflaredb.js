db.roles.insertMany([
    { "id": 1, "role_name": "Creater" },
    { "id": 2, "role_name": "Customer" },
    { "id": 3, "role_name": "Admin" }
  ]);

//  inserting users

  db.users.insertMany([
  {
    name: "Admin User",
    phone_number: "9999999999",
    email: "admin@example.com",
    password: "$2b$10$MTTzGcPyli2Hpo5fp1wsmOG5gv9byzxkxWx61EcfzBRfg68kUWeHe",
    role: ["admin"],
    block_status: false,
    profile_photo: null,
    reset_code: null,
    reset_code_expiry: null,
    is_deleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Customer One",
    phone_number: "9000000001",
    email: "customer1@example.com",
    password: "$2b$10$MTTzGcPyli2Hpo5fp1wsmOG5gv9byzxkxWx61EcfzBRfg68kUWeHe",
    role: ["customer"],
    block_status: false,
    profile_photo: null,
    reset_code: null,
    reset_code_expiry: null,
    is_deleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Customer Two",
    phone_number: "9000000002",
    email: "customer2@example.com",
    password: "$2b$10$MTTzGcPyli2Hpo5fp1wsmOG5gv9byzxkxWx61EcfzBRfg68kUWeHe",
    role: ["customer"],
    block_status: false,
    profile_photo: null,
    reset_code: null,
    reset_code_expiry: null,
    is_deleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Customer Three",
    phone_number: "9000000003",
    email: "customer3@example.com",
    password: "$2b$10$MTTzGcPyli2Hpo5fp1wsmOG5gv9byzxkxWx61EcfzBRfg68kUWeHe",
    role: ["customer"],
    block_status: false,
    profile_photo: null,
    reset_code: null,
    reset_code_expiry: null,
    is_deleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Customer Four",
    phone_number: "9000000004",
    email: "customer4@example.com",
    password: "$2b$10$MTTzGcPyli2Hpo5fp1wsmOG5gv9byzxkxWx61EcfzBRfg68kUWeHe",
    role: ["customer"],
    block_status: false,
    profile_photo: null,
    reset_code: null,
    reset_code_expiry: null,
    is_deleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Creator One",
    phone_number: "9000000011",
    email: "creator1@example.com",
    password: "$2b$10$MTTzGcPyli2Hpo5fp1wsmOG5gv9byzxkxWx61EcfzBRfg68kUWeHe",
    role: ["creator"],
    block_status: false,
    profile_photo: null,
    reset_code: null,
    reset_code_expiry: null,
    is_deleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Creator Two",
    phone_number: "9000000012",
    email: "creator2@example.com",
    password: "$2b$10$MTTzGcPyli2Hpo5fp1wsmOG5gv9byzxkxWx61EcfzBRfg68kUWeHe",
    role: ["creator"],
    block_status: false,
    profile_photo: null,
    reset_code: null,
    reset_code_expiry: null,
    is_deleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);



// inserting categories
db.categories.insertMany([
  {
    name: "Abstract",
    description: "Non-representational art that uses shapes, colors, and forms.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Classic",
    description: "Traditional styles of fine art from historical periods.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Nature",
    description: "Artwork that features landscapes, wildlife, and natural elements.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Fantasy",
    description: "Imaginative scenes featuring mythical creatures and dream worlds.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Digital",
    description: "Art created using digital tools and software.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Portrait",
    description: "Art focused on capturing the likeness of a person or group.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Surrealism",
    description: "Dream-like, bizarre imagery inspired by subconscious thought.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Minimalism",
    description: "Simplicity in design with minimal color and form.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Pop Art",
    description: "Art influenced by popular culture and mass media.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Photography",
    description: "Captured visuals of moments, people, or landscapes.",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

  

// inserting artworks
db.artworks.insertMany([
  {
    artist_id: "6867c1a8fc6e49d3dad305f3",
    art_name: "Starry Night",
    art_image: "/artworks/starry_night.jpeg",
    pricing: 1500,
    description: "A dreamy night sky with swirling stars inspired by Van Gogh.",
    rating: 4.8,
    quantity: 10,
    category_id: "68667e22d310e610f8a05f03",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1a8fc6e49d3dad305f3",
    art_name: "Sunset Overdrive",
    art_image: "/artworks/sunset_drive.jpeg",
    pricing: 800,
    description: "A beautiful sunset over a mountain valley.",
    rating: 4.5,
    quantity: 5,
    category_id: "68667e22d310e610f8a05f04",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1a8fc6e49d3dad305f3",
    art_name: "Digital Bloom",
    art_image: "/artworks/digital_bloom.jpeg",
    pricing: 650,
    description: "A vibrant explosion of digital flowers.",
    rating: 4.2,
    quantity: 8,
    category_id: "68667e22d310e610f8a05f05",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1bcfc6e49d3dad305f5",
    art_name: "The Abstract Eye",
    art_image: "/artworks/abstract_eye.jpeg",
    pricing: 1200,
    description: "An abstract piece portraying vision and perception.",
    rating: 4.9,
    quantity: 2,
    category_id: "68667e22d310e610f8a05f06",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1bcfc6e49d3dad305f5",
    art_name: "Fantasy Realms",
    art_image: "/artworks/fantasy_realms.jpeg",
    pricing: 2000,
    description: "A majestic depiction of a fantasy landscape.",
    rating: 5.0,
    quantity: 4,
    category_id: "68667e22d310e610f8a05f07",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1bcfc6e49d3dad305f5",
    art_name: "Ocean Deep",
    art_image: "/artworks/ocean_deep.jpeg",
    pricing: 900,
    description: "A deep sea exploration of blues and marine life.",
    rating: 4.6,
    quantity: 6,
    category_id: "68667e22d310e610f8a05f08",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1c7fc6e49d3dad305f7",
    art_name: "The Lonely Tree",
    art_image: "/artworks/lonely_tree.jpeg",
    pricing: 750,
    description: "A solitary tree standing in an open field.",
    rating: 4.1,
    quantity: 3,
    category_id: "68667e22d310e610f8a05f09",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1c7fc6e49d3dad305f7",
    art_name: "City Lights",
    art_image: "/artworks/city_lights.jpeg",
    pricing: 1300,
    description: "Night-time cityscape with glowing lights.",
    rating: 4.4,
    quantity: 9,
    category_id: "68667e22d310e610f8a05f0a",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1c7fc6e49d3dad305f7",
    art_name: "Mind Maze",
    art_image: "/artworks/mind_maze.jpeg",
    pricing: 1100,
    description: "A complex, mind-bending artwork with patterns and puzzles.",
    rating: 4.7,
    quantity: 7,
    category_id: "68667e22d310e610f8a05f0b",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artist_id: "6867c1c7fc6e49d3dad305f7",
    art_name: "Aurora Dreams",
    art_image: "/artworks/aurora_dreams.jpeg",
    pricing: 1800,
    description: "A magical aurora borealis in the northern skies.",
    rating: 4.9,
    quantity: 5,
    category_id: "68667e22d310e610f8a05f0c",
    payment_id: null,
    createdAt: new Date(),
    updatedAt: new Date()
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
  
  db.notifications.insertMany([
  {
    id: 1,
    user_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', // Sample UUID
    title: 'Your Order Has Been Shipped!',
    message: 'Order #1023 is now on its way. Track your shipment in the Orders section.',
    type: 'ORDER_UPDATE',
    is_read: false,
    related_id: 1023, // order_id
    created_at: new Date('2025-06-16T09:30:00Z'),
    updated_at: new Date('2025-06-16T09:30:00Z')
  },
  {
    id: 2,
    user_id: 'a2b6c7d8-90ef-1234-abcd-5678efghijkl',
    title: '₹500 Added to Your Wallet',
    message: 'You received ₹500 from your recent artwork sale!',
    type: 'WALLET',
    is_read: false,
    related_id: null,
    created_at: new Date('2025-06-15T12:00:00Z'),
    updated_at: new Date('2025-06-15T12:00:00Z')
  },
  {
    id: 3,
    user_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    title: 'Artwork Sold!',
    message: 'Your artwork "Golden Horizon" has been purchased.',
    type: 'ARTWORK_SOLD',
    is_read: true,
    related_id: 78, // artwork ID
    created_at: new Date('2025-06-14T17:45:00Z'),
    updated_at: new Date('2025-06-14T18:00:00Z')
  },
  {
    id: 4,
    user_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    title: 'Special Offer on Digital Art!',
    message: 'Get 20% off all digital artworks till June 20.',
    type: 'PROMOTION',
    is_read: false,
    related_id: null,
    created_at: new Date('2025-06-13T10:15:00Z'),
    updated_at: new Date('2025-06-13T10:15:00Z')
  },
  {
    id: 5,
    user_id: 'a2b6c7d8-90ef-1234-abcd-5678efghijkl',
    title: 'System Maintenance Notification',
    message: 'Our platform will undergo maintenance on June 18 from 2 AM to 4 AM.',
    type: 'SYSTEM',
    is_read: true,
    related_id: null,
    created_at: new Date('2025-06-12T08:00:00Z'),
    updated_at: new Date('2025-06-12T08:00:00Z')
  }
]
);

// 