const sendgridMail = require("@sendgrid/mail");

export default async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end();
  }

  const apiKey = process.env.NEXT_PUBLIC_LAGERBYGG_VEST_SEND_GRID_SEND_MAIL_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.end("No Send Grid API Key");
  }

  try {
    if (!req.body || req.body === "" || !req.body.email || !req.body.name) {
      res.statusCode = 400;
      res.end();
    }

    sendgridMail.setApiKey(apiKey);

    await sendgridMail.send({
      to: "gaute@hellandutleie.no" ?? "post@lagerbyggvest.no",
      from: req.body.email,
      subject: `lagerbyggvest.no: Kontakt fra ${req.body.name}`,
      html: `<div>
          <h3>Kontaktskjema er sendt fra ${req.body.name}</h3>
          <p>Ønsker å bli kontaktet per ${
            req.body.contactType === "phone" ? "telefon" : "e-post"
          }. Hurtiglink e-post <a href="mailto:${req.body.email}">${
        req.body.email
      }</a>. Hurtiglink telefon <a href="tel:${req.body.phone}">${req.body.phone}</a>.</p>
          <p>Melding: ${req.body.message ? req.body.message : "Det ble ikke lagt inn melding."}</p>
          <p>Klikksted: ${req.body.location}</p>
        </div>`
    });

    res.statusCode = 202;
    res.end();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end();
  }
};
