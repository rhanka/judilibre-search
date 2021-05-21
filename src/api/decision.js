require('../modules/env');
const express = require('express');
const api = express.Router();
const Elastic = require('../modules/elastic');
const route = 'decision';

api.get(`/${route}`, async (req, res) => {
  try {
    const result = await getDecision(req.query);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({ errors: [{ location: route, msg: 'Internal Server Error', error: e.message }] });
  }
});

async function getDecision(query) {
  return {
    location: route,
    query: query,
  };
}

module.exports = api;
