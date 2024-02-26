const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
    const categoryInfo = await Category.findAll({
      include: {
        model: Product,
        attributes: {
          exclude: ['category_id', 'categoryId']
        }
      }
    });
    res.status(200).json(categoryInfo);
  } catch(err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryInfo = await Category.findByPk(req.params.id, {
      include: Product
    });
    //check if category exists, if not, throw 404
    if(categoryInfo){
      res.status(200).json(categoryInfo);
    } else {
      res.status(404).json('category DNE');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryInfo = await Category.create(req.body);
    res.status(200).json(categoryInfo);
  } catch(err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryInfo = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )

    res.status(200).json(categoryInfo);
  } catch(err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryInfo = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryInfo);
  } catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;