const utils = require('../../utils/serializers');

exports.UserSerializer = (data, many=false) => {
  const fields = ['name', 'email'];

  return utils.filterData(data, fields, many=many);
};
