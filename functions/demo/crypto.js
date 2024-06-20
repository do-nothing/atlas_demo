exports = async function(arg){
 var str1 = utils.crypto.hash(
    "sha256",
    "Hello World"
  )
  console.log(str1.toBase64())
  console.log(str1.toHex())
  
  const hmac = utils.crypto.hmac(
    "Hello World",
    "abc123",
    "sha256",
    "hex"
  )
  console.log(hmac)
  
  var message = "Hello World"
  var key = utils.crypto.hash("md5","abc123").toHex()
  const encryptedMessage = utils.crypto.encrypt("aes", message, key);
  console.log(encryptedMessage.toBase64())
  // const em = BSON.Binary.fromBase64("DfXmncDWpIlJZUaYx6tRpQozy5eoRynpeWb6QGDem4Hx5edtPKVN")
  const decryptedMessage = utils.crypto.decrypt("aes", encryptedMessage, key);
  console.log(decryptedMessage.text())
  
  
  message = "MongoDB is great!"
  // ssh-keygen -t rsa -b 2048 -m PEM -f rsakey
  const pemPrivateKey = context.values.get("pemPrivateKey")
  const signature = utils.crypto.sign("rsa", message, pemPrivateKey, "pss");
  console.log(signature.toBase64());
  
  // ssh-keygen -f rsakey -e -m pem > rsakey_pem.pub
  const pemPublicKey = context.values.get("pemPublicKey")
  const signature1 = BSON.Binary.fromBase64("LaPq6eUAHDVcE2Ege291Ug4az5XMj2hXw1YX+i60wKsBveD2B7EUPuK4kRoWXKrPeXXuotuoGuYZvrlxzaogsTixiSEidLORMeowr6MWE5/kKqCVKDMnAOtYKDT6s0lmDqgON5yzWBJFZypSbxZMOFIJ/1MH2wmbJoo3B9pzdNiiQQ8Mv32vdby1WOOdXGi+QUCJgKtwAd//VTEIodTZFppQkEx/DWejK6idUAgsedDUcj61Sg4oho1AHag8KK0GwF2SDv4igTbMzoXYIG/GdGUlkeDFmi7DwHaoLh02NK1aQ20qBSvK/WHSJA9FztDDNfOGJKsgr6IU00t6kjp82Q==")
  const isValid = utils.crypto.verify("rsa", message, pemPublicKey, signature, "pss");
  console.log(isValid);

  const signingMethod = "RS256";
  const payload = {
    "sub": "1234567890",
    "name": "Joe Example",
    "iat": 1716827690
  };
  
  const jwtPrivateKey = context.values.get("jwtPrivateKey")
  const jwt = utils.jwt.encode(signingMethod, payload, jwtPrivateKey);
  console.log(jwt)
  // ssh-keygen -f rsakey -e -m PKCS8 > rsakey_jwt.pub
  const jwtPublicKey = context.values.get("jwtPublicKey")
  let resault = utils.jwt.decode(jwt, jwtPublicKey, true);
  console.log(EJSON.stringify(resault));
};