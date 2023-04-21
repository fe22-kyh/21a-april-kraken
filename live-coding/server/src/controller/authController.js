import authService from "../service/authService.js";


async function register(req, res) {
  const { username, password } = req.body;

  if (username == undefined || password == undefined) return res.sendStatus(403);
  if (username.length <= 4) return res.status(403).send("Username must be longer than 4 characters");
  if (password.length <= 4) return res.status(403).send("Password must be longer than 4 characters");
  if (username.includes(" ") || password.includes(" ")) return res.status(403).send("Password and username must not have whitespaces");

  let result = await authService.createUser(username, password);

  if(result.upsertedCount == 1) {
    return res.status(201).send("Account created successfully!");
  } else {
    return res.status(409).send("Account already exist");
  }
} 

function login(req, resp) {
  // # TODO login with jwt token
}


export default { register, login };