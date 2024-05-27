exports = async function sendEmail() {
    const { URL } = require("url");
    const url = new URL("https://api.sendgrid.com/v3/mail/send");
    url.pathname = "/v3/mail/send";

    const weatherResponse = await context.http.post({
        url: url.toString(),
        headers: {
            "Authorization": ["Bearer " + context.values.get("sendgrid")]
        },
        body: {"personalizations": [{"to": [{"email": "lj110119@aliyun.com"}]}],"from": {"email": "lj110119@aliyun.com"},"subject": "Sending with SendGrid url","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with atlas"}]},
        encodeBodyAsJSON: true
    });
    const resault = weatherResponse;
    return resault
};