/**
 * OrganizationProfiles.js
 *
 * @description :: The OrganizationProfiles table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'OrganizationProfiles',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    levelId: {
      type: 'string',
      required: false,
      size: 30,
      defaultsTo: null
    },
    answer: {
      type: 'string',
      required: false,
      size: 30,
      defaultsTo: null
    },
    userID: {
      type: 'string',
      required: false,
      size: 30,
      defaultsTo: null,
      model: 'Users'
    }
  }
};