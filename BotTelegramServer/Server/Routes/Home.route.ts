import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('buen dia');
});

export const Home = router;