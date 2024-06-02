const receiveEvent = async (event) => {

  console.log('----------eventtt pro', event)
  console.log('----------eventtt pro', event)
  console.log('----------eventtt pro', event)
  console.log('----------eventtt pro', event)
  return {
    statusCode: 200,
    body: JSON.stringify({ res: "res" }),
  };
};

module.exports = {
  receiveEvent,
};
