const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all Categories
router.get('/', async (req, res) => {

  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    })

    res.status(200).json(allCategories);

  } catch (err) {
    console.info(err);
    res.status(500).json(err);
  }

});

// Get Category by its ID #
router.get('/:id', async (req, res) => {

  try {
    const allCategories = await Category.findByPk({
      include: [{ model: Product }]
    })

    if (!allCategories) {
      res.status(404).json({ message: 'Input a valid ID...' });
      return;
    }

    res.status(200).json(allCategories);

  } catch (err) {
    console.info(err);
    res.status(500).json(err);
  }

});

// Add a Category
router.post('/', async (req, res) => {

  try {
    const allCategories = await Category.create({
      category_name: req.body.category_name
    })

    res.status(200).json(allCategories);

  } catch (err) {
    console.info(err);
    res.status(500), json(err);
  }
});

// Update a Category by its ID #
router.put('/:id', async (req, res) => {

  try {
    const allCategories = await Category.update(req.body,
      {
        where: {
          id: req.params.id
        },
      })

    if (!allCategories) {
      res.status(404).json({ message: 'Not a valid id...' });
      return;
    }

    res.status(200).json(allCategories);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a Category by its ID #
router.delete('/:id', async (req, res) => {

  try {
    const allCategories = await Category.destroy
     ({
        where: {
          id: req.params.id
        },
      })

    if (!allCategories) {
      res.status(404).json({ message: 'Not a valid id...' });
      return;
    }

    res.status(200).json(allCategories);

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
