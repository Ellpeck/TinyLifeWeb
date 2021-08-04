#addin Cake.DocFx&version=1.0.0
#tool docfx.console&version=2.51.0

var target = Argument("target", "Document");
Task("Document").Does(() => {
    var path = "docfx.json";
    DocFxMetadata(path);
    DocFxBuild(path);
});
RunTarget(target);