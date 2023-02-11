migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "biomjrg9",
    "name": "content",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 500,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "biomjrg9",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 500,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
