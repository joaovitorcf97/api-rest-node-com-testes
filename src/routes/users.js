module.exports = () => {
  const findAll = (request, response) => {
    const users = [
      {
        name: 'John Doe',
        email: 'john@email.com',
      },
    ];

    response.status(200).json(users);
  };

  const create = (request, response) => {
    response.status(201).send(request.body);
  };

  return {
    findAll,
    create,
  };
};
