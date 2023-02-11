migrate((db) => {
  const collection = new Collection({
    "id": "rsus0lo6fet1f56",
    "created": "2023-02-10 19:27:56.543Z",
    "updated": "2023-02-10 19:27:56.543Z",
    "name": "news_card",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zdghzyt8",
        "name": "heading",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zo9e8zbc",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cnfwcqfs",
        "name": "source",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("rsus0lo6fet1f56");

  return dao.deleteCollection(collection);
})
