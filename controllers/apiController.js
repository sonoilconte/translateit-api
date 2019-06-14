function index(req, res) {
  res.json({
    message: "TranslateIt API",
    documentation_url: "https://github.com/sonoilconte/translateit-api/",
    base_url: "localhost:3001",
    endpoints: [
      { method: "GET", path: "/api", description: "Describes available endpoints" },
      { method: "GET", path: "/texts", description: "Gets all texts available in the database" }
      // TODO: Complete list of enpoints
    ]
  });
}

module.exports = {
  index: index
}
