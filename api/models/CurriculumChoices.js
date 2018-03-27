/**
 * CurriculumChoices.js
 *
 * @description :: The CurriculumChoices table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'curriculumChoices',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    categoryid: {
      type: 'string',
      required: true,
      index: true,
      size: 3,
      model: 'Categories'
    },
    jobLevelID: {
      type: 'integer',
      required: true,
      index: true,
      size: 11,
      model: 'JobLevels'
    },
    curriculumChoice: {
      type: 'string',
      required: true,
      size: 252
    }
  }
};