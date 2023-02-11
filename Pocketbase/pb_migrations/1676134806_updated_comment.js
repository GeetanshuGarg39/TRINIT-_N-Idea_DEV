migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim")

  collection.createRule = null

  return dao.saveCollection(collection)
})
