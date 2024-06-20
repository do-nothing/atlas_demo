exports = async function(arg){

const crypto = require('crypto');
const { ecsign, toBuffer, keccak256, bufferToHex, privateToAddress } = require('ethereumjs-util');

// 生成一个随机的私钥（32字节）
const privateKey = crypto.randomBytes(32);
console.log("Private Key:", bufferToHex(privateKey));

// 从私钥生成公钥
const address = bufferToHex(privateToAddress(privateKey));
console.log("Address:", address);

// 要签名的数据
const message = "Hello, Ethereum!";
console.log("Message:", message);

// 对消息进行哈希（使用 keccak256）
const messageHash = keccak256(Buffer.from(message));
console.log("Message Hash:", bufferToHex(messageHash));

// 使用私钥对消息哈希进行签名
const { v, r, s } = ecsign(messageHash, privateKey);

// 将签名结果转换为十六进制字符串
const signature = bufferToHex(Buffer.concat([r, s, Buffer.from([v])]));
console.log("Signature:", signature);

};