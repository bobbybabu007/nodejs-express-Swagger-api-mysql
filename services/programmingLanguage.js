const db = require('./db');
const helper = require('../helper');
const config = require('../config1');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT uuid, Survived, Pclass, Name, Sex, Age , Siblings_Spouses_Aboard, Parents_Children_Aboard, Fare
    FROM titanic`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function create(programmingLanguage){ 
  const result = await db.query(
    `INSERT INTO titanic 
    (uuid, Survived, Pclass, Name, Sex, Age, Siblings_Spouses_Aboard, Parents_Children_Aboard, Fare) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [
      programmingLanguage.uuid, programmingLanguage.Survived,
      programmingLanguage.Pclass, programmingLanguage.Name,
      programmingLanguage.Sex, programmingLanguage.Age, programmingLanguage.Siblings_Spouses_Aboard, programmingLanguage.Parents_Children_Aboard, programmingLanguage.Fare
    ]
  );
 
  let message = 'Error in creating people';

  if (result.affectedRows) {
    message = 'People created successfully';
  }

  return {message};
}


async function remove(uuid){
  const result = await db.query(
    `DELETE FROM titanic WHERE uuid=?`, 
    [uuid]
  );

  let message = 'Error in deleting people';

  if (result.affectedRows) {
    message = 'People deleted successfully';
  }

  return {message};
}

 
async function update(uuid, programmingLanguage){
 
  const result = await db.query(
    `UPDATE titanic SET Survived=?, Pclass=?, Name=?, Sex=?, Age=?, Siblings_Spouses_Aboard=? , Parents_Children_Aboard=?, Fare=? WHERE uuid=?`, 
    [programmingLanguage.Survived,
 programmingLanguage.Pclass, programmingLanguage.Name,
 programmingLanguage.Sex, programmingLanguage.Age, programmingLanguage.Siblings_Spouses_Aboard, programmingLanguage.Parents_Children_Aboard, programmingLanguage.Fare, uuid
    ]
  );

  let message = 'Error in updating people';

  if (result.affectedRows) {
    message = 'People updated successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  remove,
  update
}