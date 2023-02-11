migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3wjnmu9zwfq3s5y")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
