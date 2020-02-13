var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.ppic.path;
      var newpath = 'C:/Users/Yash/images/' + files.ppic.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.end("<script>alert('welcome "+fields.uname+"')</script>");
      });
      var name=fields.uname;
      var email=fields.email;
      var mysql=require('mysql');
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "xelpmoc"
      });
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO register VALUES ('"+fields.uname+"', '"+files.ppic.name+"', '"+fields.email+"','"+fields.pswd+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'YOUR EMAIL',
          pass: 'YOUR PASSWORD'
        }
      });
      var mailOptions = {
        from: 'YOUR EMAIL',
        to: email,
        subject: 'Thankyou for Registering',
        text: "Dear "+name+",\n Thankyou for registering with us... \nWe have recorded your information...\nRegards"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });       
 });
}).listen(8081);