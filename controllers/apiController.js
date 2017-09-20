function index(req, res){
  res.json({
    message: "TranslateIt API",
    documentation_url: "https://github.com/sonoilconte/translateit-api/",
    base_url: "localhost:3001",
    endpoints: [
      {
        method: "GET", path: "/api", description: "Describes available endpoints",
        // TODO: FILL OUT
      }
    ]
  });
}

module.exports = {
  index: index
}
