$(document).ready(function () {
    // onclick Article
    $(".item3").click(function () {
        $(".item1").fadeOut();
        $(".item2").fadeOut();
        $(".item3").fadeOut();
        $(".item4").fadeOut();
        $(".item5").fadeOut();
        $(".item6").fadeOut();
        $(".item7").fadeOut();
        $("#Gallery").fadeOut(1100);
        $("#Education").fadeOut(1400);
        $("#AboutMe").fadeOut(1600);
        $("#Empty-a").fadeOut(1800);
        $("#login").fadeOut(2000);
        $("#Empty-b").fadeOut(2100);
        $("#Empty-c").fadeOut(2400);
        $("#Empty-d").fadeOut(2600);
        $("#Empty-e").fadeOut(2800);
        $("#Article").fadeOut(3000);

        var ArticleLine='';

        var ArticleLine = '    <div id="asideRight" class="asideRight">\n' +
            '        <div>\n' +
            '            <h4>Articles\'s Name</h4>\n' +
            '            <div id="p">\n' +
            '                <p>\n' +
            '\n' +
            '                    W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve\n' +
            '                    reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid\n' +
            '                    errors, but we cannot warrant full correctness of all content. While using this site, you agree to have\n' +
            '                    read and accepted our terms of use, cookie and privacy policy.\n' +
            '                    Copyright 1999-2018 by Refsnes Data. All Rights Reserved.<br/> W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve\n' +
            '                    reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid\n' +
            '                    errors, but we cannot warrant full correctness of all content. While using this site, you agree to have\n' +
            '                    read and accepted our terms of use, cookie and privacy policy.\n' +
            '                    Copyright 1999-2018 by Refsnes Data. All Rights Reserved.<br/> W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve\n' +
            '                    reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid\n' +
            '                    errors, but we cannot warrant full correctness of all content. While using this site, you agree to have\n' +
            '                    read and accepted our terms of use, cookie and privacy policy.\n' +
            '                    Copyright 1999-2018 by Refsnes Data. All Rights Reserved.<br/> W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve\n' +
            '                    reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid\n' +
            '                    errors, but we cannot warrant full correctness of all content. While using this site, you agree to have\n' +
            '                    read and accepted our terms of use, cookie and privacy policy.\n' +
            '                    Copyright 1999-2018 by Refsnes Data. All Rights Reserved.<br/> W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve\n' +
            '                    reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid\n' +
            '                    errors, but we cannot warrant full correctness of all content. While using this site, you agree to have\n' +
            '                    read and accepted our terms of use, cookie and privacy policy.\n' +
            '                    Copyright 1999-2018 by Refsnes Data. All Rights Reserved.<br/> W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve\n' +
            '                    reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid\n' +
            '                    errors, but we cannot warrant full correctness of all content. While using this site, you agree to have\n' +
            '                    read and accepted our terms of use, cookie and privacy policy.\n' +
            '                    Copyright 1999-2018 by Refsnes Data. All Rights Reserved.<br/>\n' +
            '\n' +
            '                </p>\n' +
            '            </div>\n' +
            '\n' +
            '        </div>\n' +
            '    </div>\n';


        ArticleLine += '    <div id="asideLeft" class="asideLeft">\n' +
            '        <div id="mySidenav" class="sidenav">\n' +
            '            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\n' +
            '            <a href="#">About</a>\n' +
            '            <a href="#">Services</a>\n' +
            '            <a href="#">Clients</a>\n' +
            '            <a href="#">Contact</a>\n' +
            '        </div>\n' +
            '        <div id="main">\n' +
            '                <span style="font-size:30px;cursor:pointer;font-weight: bold;height: 150px;color: #0c5460;"\n' +
            '                      onclick="openNav()"> &#8285;</span>\n' +
            '        </div>\n' +
            '        <div>\n' +
            '            <img id="LogoGallery" src="IMG/LogoColor/ArticleLogo.png"/>\n' +
            '        </div>\n' +
            '        <h2>Article</h2>\n' +
            '    </div>';

        ArticleLine += '    <div id="content" class="content">\n' +
            '        <div class="article">\n' +
            '            <a><i class="far fa-file-alt"></i> Article\'s Name</a><br/>\n' +
            '            <a><i class="far fa-file-alt"></i> Article\'s Name</a><br/>\n' +
            '\n' +
            '        </div>\n' +
            '\n' +
            '        <input class="closebtnEnd" type="button" onclick="windowClose();">\n' +
            '    </div>\n';

        console.log(ArticleLine);
        $('#BodyArticle').html(ArticleLine);

    });
});