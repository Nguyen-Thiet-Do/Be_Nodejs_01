
const getHomePage = (req, res) => {
  res.send('Hello World!,  this is the home page!');
}

const getTestPage = (req, res) => {
  res.render('test.ejs');
}

module.exports = {
  getHomePage,
  getTestPage
}; // export the function to use in routes