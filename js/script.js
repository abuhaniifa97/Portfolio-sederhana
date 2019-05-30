// event pada saat link di klik
 $ ('.page-scroll').on('click',function(e){
    
    // ambil isi a href
    var tujuan = $ (this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
   
    // pindahkan scroll
     $ ('body').animate ({
        ScrollTop:elemenTujuan.offset().top-50
     },1000,'easeOutExpo');

    e.preventDefault();

});