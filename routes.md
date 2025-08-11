# Category

## Create

### Routes

- **GET** `/categories/create` -> `categoryController.showCreateForm`
- **POST** `/categories` -> `categoryController.createCategory`

### Views

- **GET** `/categories/create` -> `category-create.ejs`

### Controllers

- **GET** `/categories/create` -> `showCreateForm()` -> `render("category-create.ejs")`
- **POST** `/categories` -> `createCategory()` -> Save in DB -> Redirect to `/categories`

## Read

### Routes

- **GET** `/categories` -> `categoryController.showCategories`
- **GET** `/categories/:id` -> `categoryController.showCategoryDetails`
- **GET** `/categories/:id/items` -> `categoryController.showCategoryItems`

### Views

- **GET** `/categories` -> `categories.ejs`
- **GET** `/categories/:id` -> `categories-details.ejs`
- **GET** `/categories/:id/items` -> `category-items.ejs`

### Controllers

- **GET** `/categories` -> `showCategories()` -> `render("categories.ejs")`
- **GET** `/categories/:id` ->  `showCategoryDetails()` -> render("categories-details.ejs")
- **GET** `/categories/:id/items` -> `showCategoryItems()` -> `render("category-items.ejs")`


## Update

### Routes

- **GET** `/categories/:id/edit` -> `categoryController.showEditForm`
- **POST** `/categories/:id` -> `categoryController.updateCategory`

### Views

- **GET** `/categories/:id/edit` -> `category-edit.ejs`

### Controllers

- **GET** `/categories/:id/edit` -> `showEditForm()` -> `render("category-edit.ejs")`
- **POST** `/categories/:id` -> `updateCategory()` -> Update Category in DB -> Redirect to `/categories`

## Delete

### Routes

- **POST** `/categories/:id/delete` -> `categoryController.deleteCategory`

### Views

- No View

### Controllers

- **POST** `/categories/:id/delete` -> `deleteCategory()` -> Delete Category in DB -> Redirect to `/categories`

---

# Item

## Create

### Routes

- **GET** `/items/create` -> `itemsController.showCreateForm`
- **POST** `/items` -> `itemsController.createItem`

### Views

- **GET** `/items/create` -> `item-create.ejs`

### Controllers

- **GET** `/items/create` -> `showCreateForm()` -> `render("item-create.ejs")`
- **POST** `/items` -> `createItem()` -> Save in DB -> Redirect to `/items/:id` (Details Page)

## Read

### Routes

- **GET** `/items` -> `itemsController.showItems`
- **GET** `/items/:id` -> `itemsController.showItemDetails`

### Views

- **GET** `/items` -> `items.ejs`
- **GET** `/items/:id` -> `item-details.ejs`

### Controllers

- **GET** `/items` -> `showItems()` -> `render("items.ejs")`
- **GET** `/items/:id` -> `showItemDetails()` -> `render("item-details.ejs")`

## Update

### Routes

- **GET** `/items/:id/edit` -> `itemsController.showEditForm`
- **POST** `/items/:id` -> `itemsController.updateItem`

### Views

- **GET** `/items/:id/edit` -> `item-edit.ejs`

### Controllers

- **GET** `/items/:id/edit` -> `showEditForm()` -> `render("item-edit.ejs")`
- **POST** `/items/:id` -> `updateItem()` -> Update Item in DB -> Redirect to `/items/:id`

## Delete

### Routes

- **POST** `/items/:id/delete` -> `itemsController.deleteItem`

### Views

- No View

### Controllers

- **POST** `/items/:id/delete` -> `deleteItem()` -> Delete Item in DB -> Redirect to `/items`
