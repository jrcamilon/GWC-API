/**
 * JobProfileChoices.js
 *
 * @description :: The JobProfileChoices table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'JobProfileChoices',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    competenceId: {
      type: 'string',
      required: true,
      size: 3
    },
    jobLevelID: {
      type: 'integer',
      required: true,
      size: 11,
      model: 'JobLevels'
    },
    choice: {
      type: 'string',
      required: true,
      size: 244
    }
  }
};