migrate((db) => {
  const collection = new Collection({
    "id": "4c418ctdo6t06r1",
    "created": "2023-02-11 07:20:05.840Z",
    "updated": "2023-02-11 07:20:05.840Z",
    "name": "replies",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4c418ctdo6t06r1");

  return dao.deleteCollection(collection);
})
