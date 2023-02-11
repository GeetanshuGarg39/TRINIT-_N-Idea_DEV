migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  collection.createRule = null

  return dao.saveCollection(collection)
})
