const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguage');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting people `, err.message);
    next(err);
  }
});
/**
 * @swagger
 * /people:
 *   get:
 *     summary: Returns the list of people on the Titanic
 *     tags: [People]
 *     responses:
 *       200:
 *         description: The list of people on the Titanic
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 */



router.post('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});


/**
 * @swagger
 * /people:
 *   post:
 *      description: Used to insert people
 *      tags:
 *          - people
 *      parameters:
 *          - in: body
 *            name: People
 *            description: People data
 *            schema:
 *              type: object
 *              required:
 *                 - uuid
 *                 - Survived
 *                 - Pclass
 *                 - Name
 *                 - Sex
 *                 - Age
 *                 - Siblings_Spouses_Aboard
 *                 - Parents_Children_Aboard
 *                 - Fare
 *              properties:
 *                  uuid:
 *                      type: integer
 *                      example: 4
 *                  Survived:
 *                      type: boolean
 *                      example: true
 *                  Pclass:
 *                      type: integer
 *                      example: 1
 *                  Name:
 *                      type: string
 *                      example: bobbybabu
 *                  Sex:
 *                      type: string
 *                      example: male
 *                  Age:
 *                      type: integer
 *                      example: 1
 *                  Siblings_Spouses_Aboard:
 *                      type: integer
 *                      example: 1
 *                  Parents_Children_Aboard:
 *                      type: integer
 *                      example: 1
 *                  Fare:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: People retrieved successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/:uuid', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.uuid, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

/**
 * @swagger
 * /people/{uuid}:
 *   put:
 *      description: Used to update people
 *      tags:
 *          - people
 *      parameters:
 *          - in: path
 *            name: uuid
 *            description: People id
 *            schema:
 *              type: integer
 *          - in: body
 *            name: People
 *            description: People data
 *            schema:
 *              type: object
 *              required:
 *                 - Survived
 *                 - Pclass
 *                 - Name
 *                 - Sex
 *                 - Age
 *                 - Siblings_Spouses_Aboard
 *                 - Parents_Children_Aboard
 *                 - Fare
 *              properties:
 *                  Survived:
 *                      type: boolean
 *                      example: true
 *                  Pclass:
 *                      type: integer
 *                      example: 1
 *                  Name:
 *                      type: string
 *                      example: bobbybabu
 *                  Sex:
 *                      type: string
 *                      example: male
 *                  Age:
 *                      type: integer
 *                      example: 1
 *                  Siblings_Spouses_Aboard:
 *                      type: integer
 *                      example: 1
 *                  Parents_Children_Aboard:
 *                      type: integer
 *                      example: 1
 *                  Fare:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: People retrieved successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */








router.delete('/:uuid', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.remove(req.params.uuid));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

/**
 * @swagger
 * /people/{uuid}:
 *   delete:
 *      description: Used to delete people
 *      tags:
 *          - people
 *      parameters:
 *          - in: path
 *            name: uuid
 *            description: People id
 *            schema:
 *              type: integer
 *          - in: body
 *            name: People
 *            description: People data
 *            schema:
 *              type: object
 *      responses:
 *          '200':
 *              description: People ret
 */

module.exports = router;