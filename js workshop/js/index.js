let leftMenu=$(".leftMenu");
let rightMenu=$(".rightMenu");
let triggle =$("#triggle");
let menuItems=$(".nav-item li");

triggle.click(function(){
    let width = leftMenu.outerWidth();
    if ( triggle.attr("class")=="open")
    {
        triggle.removeClass("open").addClass("close");
        leftMenu.animate({"left" :"0"},1000);
        rightMenu.animate({"left" :`${width}`},1000);
        for (let i=1 ; i<=menuItems.length; i++){
        $(`.item${i}`).animate({"paddingTop" : "25px", "opacity": "1"},i*100+1000);
        }
    }


    else{
        triggle.removeClass("close").addClass("open");
        leftMenu.animate({"left" :-`${width}`},1000);
        rightMenu.animate({"left": "0"},1000);
        menuItems.animate({"paddingTop":"500px","opacity":"0px"},1000)
      
    }
})