const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagInfo = await Tag.findAll({
      include: {
        model: Product,
        attributes: {
          exclude: ['tag_id', 'tagId']
        }
      }
    });
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagInfo = await Tag.findByPk(req.params.id, {
      include: Product
    });
    //check if category exists, if not, throw 404
    if (tagInfo) {
      res.status(200).json(tagInfo);
    } else {
      res.status(404).json('tag DNE');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagInfo = await Tag.create(req.body);
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagInfo = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )

    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagInfo = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
