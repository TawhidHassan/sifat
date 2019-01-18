$(document).ready(function(){

    flag = 0;
    $(".menuIcon").click(function(){

        if(flag==0){
            $(".open").hide();
            $(".close").show();
            $(".main").fadeIn(1000);
            var i1 = $(".menuItem:nth-child(1)");
            var i2 = $(".menuItem:nth-child(2)");
            var i3 = $(".menuItem:nth-child(3)");
            var i4 = $(".menuItem:nth-child(4)");
            i1.animate({left: '50%', opacity: '1',transition:'1s'}, "slow");
            i2.animate({left: '50%', opacity: '1',transition:'2s'}, "slow");
            i3.animate({left: '50%', opacity: '1',transition:'3s'}, "slow");
            i4.animate({left: '50%', opacity: '1',transition:'4s'}, "slow");

            flag=1;
        }
        else{
            $(".open").show();
            $(".close").hide();
            var i1 = $(".menuItem:nth-child(1)");
            var i2 = $(".menuItem:nth-child(2)");
            var i3 = $(".menuItem:nth-child(3)");
            var i4 = $(".menuItem:nth-child(4)");
            i1.animate({left: '-50%', opacity: '1',transition:'4s'}, "slow");
            i2.animate({left: '-50%', opacity: '1',transition:'3s'}, "slow");
            i3.animate({left: '-50%', opacity: '1',transition:'2s'}, "slow");
            i4.animate({left: '-50%', opacity: '1',transition:'1s'}, "slow");
            $(".main").fadeOut();
            flag=0;
        }
    });
});