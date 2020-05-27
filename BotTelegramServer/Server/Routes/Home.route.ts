import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('buenas noches');
});

export const Home = router;