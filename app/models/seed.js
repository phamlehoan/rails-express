const models = require(require('path').resolve('./') + '/app/models');

const execute = async () => {
  const users = [
    {
      email: 'example-1@example.com',
      name: 'Example 1',
    },
    {
      email: 'example-2@example.com',
      name: 'Example 2',
    },
  ]
  try {
    await models.user.deleteMany();
    await models.user.createMany({
      data: users
    })
  } catch (err) {
		console.error(err);
	} finally {
		await models.$disconnect();
	}
}

execute()
