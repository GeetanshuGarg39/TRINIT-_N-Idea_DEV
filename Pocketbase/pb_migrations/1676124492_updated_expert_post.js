migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  // remove
  collection.schema.removeField("drw3zjnk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drw3zjnk",
    "name": "tag",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "#info",
        "#life_update"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
