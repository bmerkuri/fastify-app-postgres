let items = require('../Items')
const { getItems,getItem,postItem,deleteItem,updatedItem } = require("./../controllers/items");

const Item = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
};

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemsOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "description"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: postItem,
};

const updateItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "description"],
      properties: {
        name: {
          type: "string",
        },
        description: {
          type: "string",
        },
      },
    },
    response: {
      200: Item,
    },
  },
  handler: updatedItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

const itemRoute = (fastify, options, done) => {
  fastify.get("/", getItemsOpts);

  fastify.get("/:id", getItemOpts);

  fastify.post("/", postItemsOpts);

  fastify.put("/:id", updateItemOpts);

  fastify.delete("/:id", deleteItemOpts);

  done();
};

module.exports = { itemRoute };
