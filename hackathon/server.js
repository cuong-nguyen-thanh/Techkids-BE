'use strict';

// Khoi tao
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Cau hinh
app.use(bodyParser());
app.use(express.static(__dirname + '/client'));

var articles = [
  {
    title: "Bạn không biết bắt đầu từ đâu",
    description: "Bạn không biết nên thuê đội thợ nào để làm, bạn không biết mua sắm đồ nội thất ở đâu, bạn không biết những bản vẽ kĩ thuật mà bạn được nhận từ chủ đầu tư thể hiện những cái gì?"
  }, {
    title: "Bạn bị căng thẳng vì khối lượng công việc quá lớn",
    description: "Bạn căng thẳng khi phải nhận 20 - 30 cuộc gọi điện mỗi ngày: cuộc gọi từ thợ làm tủ bếp, từ thợ sơn, thợ lắp điều hòa, từ bên bán nội thất, từ vợ hay chồng của bạn, tttừ đứa con mà bạn phải ở nhà coi thợ, từ một gã dở hơi bên bất động sản tưởng là bạn vẫn chưa tìm được nhà"
  }, {
    title: "Bạn nghĩ là nhà bạn sẽ đẹp nhưng thực ra không phải vậy",
    description: "Trước khi xây nhà bạn và chồng của bạn có rất nhiều ý tưởng tuyệt vời để xây một tổ ấm mơ ước, tuy vậy khi bắt tay vào mua đồ mới biết để có một nội thất ưng ý giá thành hợp lý thì phải đi trên dưới một tá đơn vị nội thất, ngay cả khi mua đồ ưng ý rồi về xếp vào nhà thì thấy đồ cũng chẳng ăn nhập gì với bức tường mới sơn."
  }
];

app.route('/api/article')
   .get(function(request, response){
     response.json(articles);
   });

app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '/client/index.html'));
    });

//Start Server
app.listen(3000, function(){
  console.log("Server started at port 3000!");
});
