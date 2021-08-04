#addin Cake.DocFx&version=1.0.0
#tool docfx.console&version=2.51.0

var target = Argument("target", "Document");
Task("Document").Does(() => {
    DocFxBuild("docfx.json");
});
RunTarget(target);