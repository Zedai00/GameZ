const { Router } = require("express")

const categoryController = require("../controllers/categoryController")

const categoryRouter = Router()

// Create 
categoryRouter.get("/create", categoryController.showCreateForm)
categoryRouter.post("/", categoryController.createCategory)

// Read
categoryRouter.get("/", categoryController.showCategories)
categoryRouter.get("/:id", categoryController.showCategoryDetails)
categoryRouter.get("/:id/items", categoryController.showCategoryItems)

// Update 
categoryRouter.get("/:id/edit", categoryController.showEditForm)
categoryRouter.post("/:id", categoryController.updateCategory)

// Delete
categoryRouter.post("/:id/delete", categoryController.deleteCategory)

module.exports = categoryRouter
