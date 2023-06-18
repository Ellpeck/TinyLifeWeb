const darkStorage = localStorage.getItem("dark");
const darkTheme = darkStorage === null ? window.matchMedia("(prefers-color-scheme: dark)").matches : darkStorage === "true";

$(function () {
    $(".navbar-collapse a").on("click", () => $(".navbar-collapse").collapse("hide"));

    let mode = $("#dark-mode");
    mode.prop("checked", darkTheme);
    mode.on("click", function () {
        localStorage.setItem("dark", $(this).prop("checked"));
        location.hash = "";
        location.reload();
    });
});
