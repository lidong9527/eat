/**
 * Created by Administrator on 2017/7/5 0005.
 */
$('#btn').click(function(){
    $.ajax({
        url:'http://apis.juhe.cn/cook/query.php',
        type:'get',
        data:{key:'6f6bdb6d8ca07dba65f1ce5fe54c294a',menu:$('#text').val()},
        dataType:'jsonp',
        success:function(data){
            data = data.result;
            console.log(data);
            var html = template('titList',data);
            $('.msg').html('一共有'+data.data.length+'种结果');
            console.log(data);
            $('#tit').html(html);
            add(data.data);

        }
    });
});

function add(data){
    $('#tit > li').click(function(){
        for(var i=0;i<data.length;i++){
            if(data[i].id == $(this).attr('Mid')){
                var datas={},sDatas={},tags={};
                datas.result = data[i];
                sDatas.result = data[i].steps;
                html = template('menu',datas);
                $('.content').html(html);
                html = template('step',sDatas);
                $('#menuList').html(html);
                var s = data[i].tags;
                tags.result = s.split(';');
                html = template('tag',tags);
                $('#biaoqian').html(html);
                $('.box').css({display:'block'});

            }
        }
    });
}


//点击关闭菜单
$('#close').click(function(){
    $('.box').css({display:'none'});
})



//addEvent(document,'mousewheel',function(){
//    console.log(123);
//})
//document.attachEvent('onmousewheel',function(){
//    console.log(123);
//})
//
//$('.box').bind('mousewheel',function(event){
//    event = event || window.event;
//    console.dir(event);
//})

//滚动条
//if($('.content').height() > $('.box').height()){
//    $('.bar').css({height:$('.box').height()/$('.content').height() * $('.box').height()});
//}else{
//    $('.bar').css({height:0});
//}
//$('.bar').mousedown(function(event){
//    var pageY = event.pageY;
//    var BoxY = pageY-$('.box').offset().top - $('.bar').offset().top;
//    console.log(BoxY);
//    $(document).mousemove(function(event){
//        var pageY = event.pageY;
//        var boxY = pageY - $('.box').offset().top;
//        var barY = boxY - BoxY;
//        //让bar跟着鼠标在盒子中的坐标走
//        $('.bar').css({top:barY});
//    })
//
//});
