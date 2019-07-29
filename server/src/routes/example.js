import { Router } from 'express';

const router = Router();

function cb0(req, res, next) {
  console.log('CB0')
  next()
}

function cb1(req, res, next) {
  console.log('CB1')
  next()
}

function cb2(req, res) {
  res.send('Hello from C!')
}

router.get('/c', [cb0, cb1, cb2])

router.get('/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
});

export default router;
