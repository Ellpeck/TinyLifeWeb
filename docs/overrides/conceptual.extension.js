exports.preTransform = function (model) {
    if (model._path.includes("Changelog") || model._path.includes("InGameNews")) {
        // reduce header levels by 1
        model.conceptual = model.rawTitle + model.conceptual;
        for (let i = 5; i >= 1; i--) {
            model.conceptual = model.conceptual.replaceAll(`<h${i}`, `<h${i + 1}`);
            model.conceptual = model.conceptual.replaceAll(`</h${i}`, `</h${i + 1}`);
        }

        // set appropriate title
        model.title = model._path.includes("Changelog") ? "Changelog" : "In-Game News";
        model.rawTitle = `<h1>${model.title}</h1>`;
    }
    return model;
};
