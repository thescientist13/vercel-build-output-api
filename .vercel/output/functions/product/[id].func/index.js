export default async function handler (request, response) {
  const { body, url, headers = {}, method, query } = request;
  console.log({ request });
  console.log({ body, url, headers, method, query });
  
  response.status(200);
  response.send(`
    <html>
      <head>
        <title>Vercel Build Output API demo</title>
      </head>
      <body>
        <h1>Hello from Product Details Page</h1>
      </body>
    </html>  
  `);
}