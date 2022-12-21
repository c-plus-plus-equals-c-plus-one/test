import "./styles.css";
import keypair from "keypair";
import nodeRSA from "node-rsa";

export default function App() {
  const cipher = new nodeRSA({ b: 512 });
  const keys = keypair({ bits: 512 });
  const privateKey = keys.private;
  const pubKey = keys.public;
  console.log(pubKey, privateKey);
  cipher.importKey(pubKey, "pkcs1-public");
  const text = "Hello RSA!";
  const encrypted = cipher.encrypt(text, "base64");
  console.log("encrypted: ", encrypted);
  const decipher = new nodeRSA(privateKey, "pkcs1");
  const decrypted = decipher.decrypt(encrypted, "utf8");
  console.log("decrypted: ", decrypted);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
