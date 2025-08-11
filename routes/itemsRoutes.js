const { Router } = require("express")

const itemsController = require("../controllers/itemsController")

const itemRouter = Router()

// Create
itemRouter.get("/create", itemsController.showCreateForm)
itemRouter.post("/", itemsController.createItem)

// Read
itemRouter.get("/", itemsController.showItems)
itemRouter.get("/:id", itemsController.showItemDetails)

// Update
itemRouter.get("/:id/edit", itemsController.showEditForm)
itemRouter.post("/:id", itemsController.updateItem)

// Delete
itemRouter.post("/:id/delete", itemsController.deleteItem)

module.exports = itemRouter


