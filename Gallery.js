
$(document).ready(function () {
    // onclick Gallery
    $(".item1").click(function () {
        $('.item1').fadeOut();
        $(".item2").fadeOut();
        $(".item3").fadeOut();
        $(".item4").fadeOut();
        $(".item5").fadeOut();
        $(".item6").fadeOut();
        $(".item7").fadeOut();
        $("#Education").fadeOut(1100);
        $("#Article").fadeOut(1400);
        $("#AboutMe").fadeOut(1600);
        $("#Empty-a").fadeOut(1800);
        $("#login").fadeOut(2000);
        $("#Empty-b").fadeOut(2100);
        $("#Empty-c").fadeOut(2400);
        $("#Empty-d").fadeOut(2600);
        $("#Empty-e").fadeOut(2800);
        $("#Gallery").fadeOut(3000);


            var GalleryLine = '';

    GalleryLine += '    <div id="asideLeft" class="asideLeft">\n' +
        '        <div id="mySidenav" class="sidenav">\n' +
        '            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\n' +
        '            <a href="#">About</a>\n' +
        '            <a href="#">Services</a>\n' +
        '            <a href="#">Clients</a>\n' +
        '            <a href="#">Contact</a>\n' +
        '        </div>\n' +
        '        <div id="main">\n' +
        '                <span style="font-size:30px;cursor:pointer;color: #79c6be;font-weight: bold;height: 150px"\n' +
        '                      onclick="openNav()"> &#8285;</span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <img id="LogoGallery" src="IMG/LogoColor/GalleryLogo.png"/>\n' +
        '        </div>\n' +
        '        <h2>Gallery</h2>\n' +
        '    </div>\n';
    GalleryLine += '    <div id="asideRight" class="asideRight">\n' +
        '        <video controls class="VIDEO">\n' +
        '            <source src="VideoGallery/mov_bbb.mp4" type="video/mp4">\n' +
        '            <source src="VideoGallery/mov_bbb.ogg" type="video/ogg">\n' +
        '            Your browser does not support HTML5 video.\n' +
        '        </video>\n' +
        '    </div>\n';
    GalleryLine += '    <div id="content" class="content">\n' +
        '        <ul id="SearchHide">\n' +
        '            <div id="LoadPlaceAjax">\n' +
        '                <li class="li1"><i class="featured-place-group ">\n' +
        '                    <div class="image">\n' +
        '                        <img src="IMG/testjpg/629qyO.jpg"/>\n' +
        '                    </div>\n' +
        '\n' +
        '                </i></li>\n' +
        '                <li class="li4"><i class="featured-place-group ">\n' +
        '                    <div class="image">\n' +
        '                        <img src="IMG/testjpg/List-of-Veterinary-Clinics-Abu-Dhabi.jpg"/>\n' +
        '                    </div>\n' +
        '\n' +
        '                </i></li>\n' +
        '            </div>\n' +
        '        </ul>\n' +
        '        <input class="closebtnEnd" type="button" onclick="windowClose();">\n' +
        '    </div>\n';

    $('#BodyArticle').html(GalleryLine);

    });
});

function windowClose() {
    window.open('', '_parent', '');
    window.close();
}
function openNav() {
    document.getElementById("mySidenav").style.width = "10%";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("asideLeft").style.marginLeft = "10%";
    document.getElementById("content").style.marginLeft = "10%";
    document.getElementById("asideRight").style.width = "26%";


}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("asideLeft").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("asideRight").style.width = "35%";
}