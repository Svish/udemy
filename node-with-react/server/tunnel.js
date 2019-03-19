const { sendgrid } = require('./services/sendgrid');

(async () => {
  try {
    // Create tunnel for callback
    const ngrok = require('ngrok');
    const url = await ngrok.connect({
      proto: 'http',
      bind_tls: true,
      addr: process.env.PORT,
      authtoken: process.env.NGROK_AUTH_TOKEN,
      region: 'eu',
    });
    console.log('Tunnel started:\n', url);

    // Configure SendGrid callback url
    const config = {
      enabled: true,
      url: url + '/api/surveys/sendgrid-callback',
      click: true,
    };

    const request = sendgrid.emptyRequest({
      method: 'PATCH',
      path: '/v3/user/webhooks/event/settings',
      body: config,
    });

    await sendgrid.API(request);
    console.log('SendGrid configured:\n', config);
  } catch (e) {
    console.error(e);
  }
})();
