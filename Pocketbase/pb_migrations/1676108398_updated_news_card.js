migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rsus0lo6fet1f56")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rsus0lo6fet1f56")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
