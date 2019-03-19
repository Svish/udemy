const DOMAIN = process.env.SEND_GRID_REDIRECT_DOMAIN;

module.exports = survey => {
  return `<html>
  <body>
    <div style="text-align: center">
      <h3>I'd like your input!</h3>
      <p>Please answer the following question:</p>
      <p>${survey.body}</p>
      <div>
        <a href="${DOMAIN}/thank-you">Yes</a>
        <a href="${DOMAIN}/thank-you">No</a>
      </div>
    </div>
  </body>
</html>;`;
};
