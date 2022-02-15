$('.wrap').fullpage({
    navigationr:true,
    anchors:['1page'  ,  '2page' , '3page' , '4page' , '5page'],
    afterLoad: function(){
        $('#video').trigger('play');
    }

});

$('.img1').colorbox({innerWidth:800, innerHeight:600,rel:'img1'});
$('.youtube').colorbox({iframe:true,innerWidth:1280, innerHeight:720,rel:'img1'})