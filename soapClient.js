const soap = require("strong-soap").soap;

// WSDL URL
const url = "http://www.dneonline.com/calculator.asmx?wsdl";

// Create SOAP client
soap.createClient(url, (err, client) => {
  if (err) throw err;

  // SOAP method call
  const requestArgs = { intA: 5, intB: 3 };
  //   Subtraction
  //   client.Subtract(requestArgs, (err, result) => {
  //     if (err) throw err;
  //     console.log("Result:", result);
  //   });

  //   Addition
  client.Add(requestArgs, (err, result) => {
    if (err) throw err;
    console.log("Result:", result);
  });

  //   Multiply
  client.Multiply(requestArgs, (err, result) => {
    if (err) throw err;
    console.log("Result:", result);
  });

  //   Divide
  client.Divide(requestArgs, (err, result) => {
    if (err) throw err;
    console.log("Result:", result);
  });
});
