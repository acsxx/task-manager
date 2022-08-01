const sendJwt = (user, res) => {
  const token = user.generateJwtFromUser();

  const { COOKIE, NODE_ENV } = process.env;

  res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(COOKIE) * 60000),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      access_token: token,
      data: {
        name: user.name,
        email: user.email,
      },
    });
};

const checkToken = (req) => {
  const token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) return true

};

const getToken = (req) =>{
    const token = req.headers.authorization;
    const access_token = token.split(":").pop();
    return access_token;
}

module.exports = { sendJwt,checkToken,getToken };
