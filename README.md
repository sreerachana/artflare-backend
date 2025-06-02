 
## Install Libraries
npm i express bcryptjs cookie-parser cors helmet joi jsonwebtoken mongoose nodemailer ejs express-ejs-layouts connect-flash express-session bootstrap fontawesome

passsport passport-local

## scripts
"start": "node --env-file=.env index.js",
"dev": "node --watch --trace-warnings --env-file=.env index.js"

## artflare models

# users		
Column Name	Data Type	Constraints
user_id	uuid	PRIMARY KEY, AUTO_INCREMENT
name	VARCHAR(20)	NOT NULL
phone_number	VARCHAR(15)	UNIQUE
email	VARCHAR(50)	UNIQUE, NOT NULL
password	VARCHAR(20)	NOT NULL
role_id	INT	FOREIGN KEY REFERENCES roles(id)
block_status	BOOLEAN	DEFAULT FALSE
profile_photo	BLOB	NULL
created_at	DATETIME	DEFAULT CURRENT_TIMESTAMP
updated_at	DATETIME	DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
is_deleted	BOOLEAN	DEFAULT FALSE
deleted_at	DATETIME	DEFAULT NULL
		
# roles		
Column Name	Data Type	Constraints
id	INT	PRIMARY KEY, AUTO_INCREMENT
role_name	VARCHAR(50)	NOT NULL
		
# artwork		
Column Name	Data Type	Constraints
id	INT	PRIMARY KEY, AUTO_INCREMENT
artist_id	INT	FOREIGN KEY REFERENCES users(user_id)
art_name	VARCHAR(20)	NOT NULL
art_image	BLOB	NOT NULL
pricing	FLOAT	NOT NULL
description	TEXT	NULL
created_at	DATETIME	DEFAULT CURRENT_TIMESTAMP
rating	DECIMAL(2,1)	DEFAULT 0.0
updated_date	DATETIME	DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
quantity	INT	DEFAULT 0
category_id	INT	FOREIGN KEY REFERENCES categories(id)
payment_id	INT	FOREIGN KEY REFERENCES payment(id)

# categories		
Column Name	Data Type	Constraints
id	INT	PRIMARY KEY, AUTO_INCREMENT
category	VARCHAR(100)	UNIQUE, NOT NULL

# orders		
Column Name	Data Type	Constraints
id	INT	PRIMARY KEY, AUTO_INCREMENT
user_id	INT	FOREIGN KEY REFERENCES users(user_id)
total_amt	DECIMAL(10,2)	NOT NULL
status_id	ENUM('DELIVERED', 'PENDING', 'SHIPPING')	NOT NULL
created_at	DATETIME	DEFAULT CURRENT_TIMESTAMP
order_date	DATETIME	DEFAULT CURRENT_TIMESTAMP	

# order_items		
Column Name	Data Type	Constraints
order_item_id	INT	PRIMARY KEY, AUTO_INCREMENT
order_id	INT	FOREIGN KEY REFERENCES orders(id)
art_id	INT	FOREIGN KEY REFERENCES art(id)
quantity	INT	NOT NULL
price_at_purchase	DECIMAL(10,2)	NOT NULL
deliver_date	DATETIME	DEFAULT CURRENT_TIMESTAMP
status_id	ENUM('DELIVERED', 'PENDING', 'SHIPPING')	NOT NULL

# cart		
Column Name	Data Type	Constraints
id	INT	PRIMARY KEY, AUTO_INCREMENT
user_id	INT	FOREIGN KEY REFERENCES users(user_id)
art_id	INT	FOREIGN KEY REFERENCES art(id), NOT NULL
quantity	INT	NOT NULL
created_at	DATETIME	DEFAULT CURRENT_TIMESTAMP
updated_at	DATETIME	DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	

# payment		
Column Name	Data Type	Constraints
id	INT	PRIMARY KEY, AUTO_INCREMENT
order_id	INT	FOREIGN KEY REFERENCES orders(id)
payment_amt	DECIMAL(10,2)	NOT NULL
status_id	ENUM('DELIVERED', 'PENDING', 'SHIPPING')	NOT NULL
created_at	DATETIME	DEFAULT CURRENT_TIMESTAMP
updated_at	DATETIME	DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

# rating		
Column Name	Data Type	Constraints
review_id	INT	PRIMARY KEY, AUTO_INCREMENT
review	TEXT	NOT NULL
rating	INT	CHECK (rating BETWEEN 1 AND 5)