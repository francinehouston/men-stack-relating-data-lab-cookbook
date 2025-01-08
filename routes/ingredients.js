const router = require('express'). Router();
const ingredientCtrl = require('../controllers/ingredients');



router.get('/ingredients',ingredientCtrl.index);
router.get('/ingredients', ingredientCtrl.listIngredient);
router.get('/ingredients/new', ingredientCtrl.newIngredient);
router.post('/ingredients', ingredientCtrl.postIngredient);
router.get('/ingredients/:ingredientId', ingredientCtrl.showIngredient);
router.get('/ingredients/:ingredientId/edit',ingredientCtrl.editIngredient);
router.put('/ingredients/:ingredientId', ingredientCtrl.updateIngredient);
router.delete('/ingredients/:ingredientId', ingredientCtrl.deleteIngredient);

module.exports = router;
