const router = require('express').Router();
const path = require('path');

// when URL is just '/', send the user to index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// when URL is '/animals', send user to animals.html
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
// when URL is '/zookeepers', send user to zookeepers.html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});
// catch any other page that isn't listed here, send to index
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;