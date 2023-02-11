migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e6l9194w",
    "name": "comment",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "lqwc27gkok7axim",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  // remove
  collection.schema.removeField("e6l9194w")

  return dao.saveCollection(collection)
})
