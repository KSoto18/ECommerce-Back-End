const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all Tags
router.get('/', async (req, res) => {

  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }]
    })

    res.status(200).json(allTags);

  } catch (err) {
    console.info(err);
    res.status(500).json(err);
  }
});

// Get Tag by its ID #
router.get('/:id', async (req, res) => {

  try {
    const allTags = await Tag.findByPk({
      include: [{ model: Product }]
    })

    if (!allTags) {
      res.status(404).json({ message: 'Input a valid ID...' });
      return;
    }

    res.status(200).json(allTags);

  } catch (err) {
    console.info(err);
    res.status(500).json(err);
  }
});

// Add a new Tag
router.post('/', async(req, res) => {
  
    try {
      const allTags = await Tag.create({
        tag_name: req.body.tag_name
      })
  
      res.status(200).json(allTags);
  
    } catch (err) {
      console.info(err);
      res.status(500), json(err);
    }
});

// Update a Tag by its ID #
router.put('/:id', async (req, res) => {
  
  try {
    const allTags = await Tag.update(req.body,
      {
        where: {
          id: req.params.id
        },
      })

    if (!allTags) {
      res.status(404).json({ message: 'Not a valid id...' });
      return;
    }

    res.status(200).json(allTags);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
