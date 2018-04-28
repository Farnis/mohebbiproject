$(document).ready(function () {

    $('#BodyAbout').html('    <div  id="asideLeft" class="asideLeft">\n' +
        '        <div id="mySidenav" class="sidenav">\n' +
        '            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\n' +
        '            <a href="#">About</a>\n' +
        '            <a href="#">Services</a>\n' +
        '            <a href="#">Clients</a>\n' +
        '            <a href="#">Contact</a>\n' +
        '        </div>\n' +
        '        <div id="main">\n' +
        '                <span style="font-size:30px;cursor:pointer;font-weight: bold;height: 150px;color: #977750;"\n' +
        '                      onclick="openNav()"> &#8285;</span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <img id="LogoGallery" src="IMG/LogoColor/AboutMeLogo.png"/>\n' +
        '        </div>\n' +
        '        <h2>AboutMe</h2>\n' +
        '    </div> <div id="asideRight" class="asideRight">\n' +
        '        <video class="MyVideo" controls>\n' +
        '            <source src="VideoGallery/mov_bbb.mp4" type="video/mp4">\n' +
        '        </video>\n' +
        '        <br/>\n' +
        '        <div class="parentFab">\n' +
        '        <input type="checkbox" id="share">\n' +
        '        <label title="Share" for="share" id="share"></label>\n' +
        '        <span class="iconFab" title="facebook" id="facebook"></span>\n' +
        '        <span class="iconFab" title="twitter" id="twitter"></span>\n' +
        '        <span class="iconFab" title="Google +" id="googleplus"></span>\n' +
        '        <span class="iconFab" title="instagram" id="instagram"></span>\n' +
        '        <span class="iconFab" title="vero" id="vero"></span>\n' +
        '        <span class="iconFab" title="viber" id="viber"></span>\n' +
        '        <span class="iconFab" title="linkdin" id="linkdin"></span>\n' +
        '        <span class="iconFab" title="telegram" id="telegram"></span>\n' +
        '        <span class="iconFab" title="pinterest" id="pinterest"></span>\n' +
        '        <span class="iconFab" title="whatsapp" id="whatsapp"></span>\n' +
        '        </div>\n' +
        '\n' +
        '    </div><div id="content" class="content">\n' +
        '        <p>\n' +
        '            What is W3Schools?\n' +
        '            W3Schools is a web developers site, with tutorials and references on web development languages such as HTML,\n' +
        '            CSS, JavaScript, PHP, SQL, W3.CSS, and Bootstrap, covering most aspects of web programming.\n' +
        '\n' +
        '            The site derives its name from the World Wide Web (W3), but is not affiliated with the W3C.\n' +
        '\n' +
        '            W3Schools was originally created in 1998 by Refsnes Data, a Norwegian software development and consulting\n' +
        '            company.\n' +
        '        </p>\n' +
        '        <input class="closebtnEndX" type="button" onclick="windowClose();">\n' +
        '    </div>\n');

    $(".item4").click(function () {
        $(".item1").fadeOut();
        $(".item2").fadeOut();
        $(".item3").fadeOut();
        $(".item4").fadeOut();
        $(".item5").fadeOut();
        $(".item6").fadeOut();
        $(".item7").fadeOut();
        $("#Gallery").fadeOut(2100);
        $("#Education").fadeOut(2400);
        $("#Article").fadeOut(2600);
        $("#Empty-a").fadeOut(2800);
        $("#login").fadeOut(3000);
        $("#Empty-b").fadeOut(3100);
        $("#Empty-c").fadeOut(3400);
        $("#Empty-d").fadeOut(3600);
        $("#Empty-e").fadeOut(3800);
       $("#AboutMe").fadeOut(4000);
       //window.setTimeout("abb();", 15000); //call fade in 3 seconds
       setTimeout(abb, 100);
        function abb() {
            $('#BodyAbout').show();

        }
});

});