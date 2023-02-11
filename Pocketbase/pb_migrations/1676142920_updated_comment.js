migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  // remove
  collection.schema.removeField("xtywe0ea")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xtywe0ea",
    "name": "post",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "3wjnmu9zwfq3s5y",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
