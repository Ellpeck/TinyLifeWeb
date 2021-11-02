#addin Cake.DocFx&version=1.0.0
#tool docfx.console&version=2.58.8

var target = Argument("target", "Document");
Task("Document").Does(() => {
    DocFxBuild("docfx.json");
});
RunTarget(target);