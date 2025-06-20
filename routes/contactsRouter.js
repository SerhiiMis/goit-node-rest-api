import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContactById,
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { favorite } = req.body;
      const updated = await updateStatusContact(id, favorite);
      if (!updated) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }
);

export default contactsRouter;
