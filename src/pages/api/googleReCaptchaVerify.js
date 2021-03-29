export default async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end();
  }

  const apiKey = process.env.NEXT_PUBLIC_LAGERBYGG_VEST_GOOGLE_RECAPTCHA_V3_SECRET_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.end("No Google ReCaptcha Secret Key");
  }

  try {
    if (!req.body || req.body === "" || !req.body.token) {
      res.statusCode = 400;
      res.end();
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `secret=${process.env.NEXT_PUBLIC_LAGERBYGG_VEST_GOOGLE_RECAPTCHA_V3_SECRET_KEY}&response=${req.body.token}`
    });

    return res.status(200).json(await response.json());
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end();
  }
};
