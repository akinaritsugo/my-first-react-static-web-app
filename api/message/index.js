module.exports = async function (context, req) {
  // context.res = {
  //   body: "Hello World !"
  // };
  context.res.json({
    text: "Hello World !"
  });
}