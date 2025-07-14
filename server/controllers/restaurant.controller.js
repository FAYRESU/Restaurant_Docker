import Restaurant from "../models/restuarant.model.js";
const restaurantController = {};
//Creatw and save a new restaurant
restaurantController.create = async (req, res) => {
  const { name, type, imageUrl } = req.body;
  //validate data
  if (!name || !type || !imageUrl) {
    res
      .status(400)
      .send({ message: "Name, Type or ImageUrl can not be empty!" });
  }
  return;
};
await Restaurant.findOne({ where: { name: name } }).then((restaurant) => {
  if (restaurant) {
    res.status(400).send({ message: "Restaurant already exists!" });
    return;
  }
  const newRestaurant = {
    id,
    name,
    type,
    imageUrl,
  };

  Restaurant.create(newRestaurant)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something error wheile creating the restaurants",
      });
    });
});

export default restaurantController;
