var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const upload = multer();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile') ,(req,res)=>{
  console.log(req.file)
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
  
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

/*1. You should provide your own project, not the example URL.
Waiting:2. You can submit a form that includes a file upload.
Waiting:3. The form file input field has the name attribute set to upfile.
Waiting:4. When you submit a file, you receive the file name, type, and 
size in bytes within the JSON response.*/
