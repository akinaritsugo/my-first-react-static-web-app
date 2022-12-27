module.exports = async function (context, req) {
  var rows = context.bindings.messages;
  var text = "Hello World !";

  if (rows.length > 0) {
    var tuple = rows[0];
    text = tuple.message;
  }

  context.res.json({ text });
}