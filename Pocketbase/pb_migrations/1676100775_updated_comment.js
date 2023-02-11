migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgbq7wyr",
    "name": "replies",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "4c418ctdo6t06r1",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  // remove
  collection.schema.removeField("bgbq7wyr")

  return dao.saveCollection(collection)
})
