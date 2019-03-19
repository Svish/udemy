module.exports = survey => {
  return `<html>
  <body>
    <div style="text-align: center">
      <h3>I'd like your input!</h3>
      <p>Please answer the following question:</p>
      <p>${survey.body}</p>
      <div>
        <a href="${SEND_GRID_REDIRECT_DOMAIN}/thank-you">Yes</a>
        <a href="${SEND_GRID_REDIRECT_DOMAIN}/thank-you">No</a>
      </div>
    </div>
  </body>
</html>;`;
};
