# Category:

- Id: serial primary key
- Name: varchar(255) not null

# Item2Category:

- category: category.id (fk) not null on delete cascade
- item: item.id (fk) not null on delete cascade
- primary key (item, category)

# Item:

- Id: Serial primary key
- Name: varchar(255) not null
- Description: text
- Price: Numeric (12, 2) Not null

# Item2Developer:

- Item: item.id (fk) not null on delete cascade
- Developer: developer.id (fk) not null on delete cascade
- primary key (item, developer)

# Developer:

- Id : serial primary key
- Name: varchar(255) not null
