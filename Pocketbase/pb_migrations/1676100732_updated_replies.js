migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4c418ctdo6t06r1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o85fleht",
    "name": "comment",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "lqwc27gkok7axim",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4c418ctdo6t06r1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o85fleht",
    "name": "post",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "lqwc27gkok7axim",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
