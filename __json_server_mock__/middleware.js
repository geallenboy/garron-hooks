// json_server 模拟中间件
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或密码错误" });
    }
  }else if (req.method === "GET" && req.path === "/me") {
    return res.status(200).json({
      user: {
        token: "123",
        name:'123'
      },
    });
  }else if (req.method === "POST" && req.path === "/register") {
    return res.status(200).json({
      user: {
        token: "12345",
        name:'aaa'
      },
    });
  }
  next();
};