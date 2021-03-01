'use strict';

class Food {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  // REST: POST -> CRUD: CREATE
  create(object) {
    let record = {
      id: ++this.id,
      record: object
    };
    // push entry into database
    this.db.push(record);
    console.log('========== Successfully added: ===========');
    return record;
  }

  // REST: GET -> CRUD: READ
  read(id) {
    if(id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  // REST: PUT -> CRUD: UPDATE
  update(id, obj) {
    return obj;
  }

  // REST: DELETE -> CRUD: DELETE
  delete(id) {
    return null;
  }

}

module.exports = Food;
