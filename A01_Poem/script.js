"use strict";
var Poem;
(function (Poem) {
    let object = ["the knight", "the queen", "a beggar", "a dog", ""];
    let predicate = ["abuses", "rules over", "manipulates", "annihilates", "feeds"];
    let subject = ["fire", "a prior", "the shire", "a liar", "the squire"];
    console.log(getVerse(object, predicate, subject));
    for (let i = object.length; i >= 1; i--) {
        getVerse();
    }
    function getVerse(_object, _predicate, _subject) {
        return "blub";
    }
    console.log();
})(Poem || (Poem = {}));
//# sourceMappingURL=script.js.map