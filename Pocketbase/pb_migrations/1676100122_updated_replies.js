migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4c418ctdo6t06r1")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "myahgoxj",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohtundsn",
    "name": "author",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4c418ctdo6t06r1")

  // remove
  collection.schema.removeField("o85fleht")

  // remove
  collection.schema.removeField("myahgoxj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohtundsn",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
