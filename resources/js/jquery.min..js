$.getJSON('data/pizza.json', function (data)  {
    let menu = data.menu;
        console.log(menu);
        $.each(menu,function (i, data) {
            // console.log(data)
            $('#daftar-menu').append('<div class="col-md-4">    <img class="card-img-top"src="img/pizza/'+ data.gambar +' ">  <div class="card-body"><h5 class="card-title">'+ data.nama +'  </h5><pclass="card-text">'+ data.deskripsi +'</p><h5class="card-title">                                                         Rp.'+ data.harga +'</h5> <a href="#" class="btn btn-primary">pesan sekarang</a></div></div></div>')
        });
        // console.log(data);
    });