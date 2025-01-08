const router = require('express'). Router();
const recipeCtrl = require('../controllers/recipes');



router.get('/recipes',recipeCtrl.index);
router.get('/recipes/new',recipeCtrl.newRecipe);
router.post('/recipes',recipeCtrl.postRecipe);
router.get('/recipes/:recipeId', recipeCtrl.showRecipe);
router.get('/recipes/:recipeId/edit',recipeCtrl.editRecipe);
router.put('recipes/:recipeId', recipeCtrl.updateRecipe);
router.delete('/recipes/:recipeId', recipeCtrl.deleteRecipe);

module.exports = router;
