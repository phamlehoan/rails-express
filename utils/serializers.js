exports.filterData = (data, fields, many=false) => {
  if (!many) data = [data];
  const output = data.map(item => fields.reduce((a, e) => (a[e] = item[e], a), {}));

  return many ? output : output[0]
};
