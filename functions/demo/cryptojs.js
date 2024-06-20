exports = async function(arg){
  const crypto = require("crypto-js");
  
  let data = crypto.SHA256("Hello World")
  console.log(data.toString(crypto.enc.Base64))
  console.log(data.toString(crypto.enc.Hex))
  
  data = crypto.HmacSHA256("Hello World", "abc123")
  console.log(data.toString(crypto.enc.Hex))
  
  // data = crypto.AES.encrypt("Hello World", "603082712271C525E087BD999A4E0738")
  // console.log(data.toString())
  
  // data = crypto.AES.decrypt(data, "603082712271C525E087BD999A4E0738")
  // console.log(data.toString(crypto.enc.Utf8))
};