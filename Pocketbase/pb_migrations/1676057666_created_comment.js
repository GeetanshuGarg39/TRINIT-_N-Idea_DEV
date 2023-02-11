migrate((db) => {
  const collection = new Collection({
    "id": "lqwc27gkok7axim",
    "created": "2023-02-10 19:34:26.851Z",
    "updated": "2023-02-10 19:34:26.851Z",
    "name": "comment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aicxzjte",
        "name": "author",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "b08ll78j",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 500,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("lqwc27gkok7axim");

  return dao.deleteCollection(collection);
})
