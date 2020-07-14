$(function () {
    $(document).scroll(function () {
        console.log("scroll")
        let $nav = $("#main-navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});