const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {

    try {
      const allCategories = await Category.findAll({
        include: [{ model: Product }]
      })

      res.status(200).json(allCategories);

    }catch(err) {
      console.info(err);
      res.status(500).json(err);
    }
  
});

router.get('/:id', async (req, res) => {

   try {
      const allCategories = await Category.findAll({
        include: [{ model: Product,
                    attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
                 }]
      })
      
      if (!allCategories) {
        res.status(404).json({ message: 'Input a valid ID...'});
        return;
      }

      res.status(200).json(allCategories);

    }catch(err) {
      console.info(err);
      res.status(500).json(err);
    }
  
});


router.post('/', async (req, res) => {
  
   try {
     const allCategories = await Category.create({
       category_name: req.body.category_name
     })

     res.status(200).json(allCategories);

   } catch(err) {
     console.info(err);
     res.status(500),json(err);
   }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
