const exp = require('express');
const path = require('path');
const app = exp();
const PORT = process.env.PORT || 3000;

app.use(exp.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`app connected to port ${PORT}`);
});
