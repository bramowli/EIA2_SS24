namespace Poem {
    let object: string[] = ["the knight", "the queen", "a beggar", "a dog", ""];
    let predicate: string[] = ["abuses", "rules over", "manipulates", "annihilates", "feeds"];
    let subject: string[] = ["fire", "a prior", "the shire", "a liar", "the squire"];

    console.log(getVerse(object, predicate, subject))

    for(let i = object.length; i>=1; i--) {
        getVerse()
    }

    function getVerse(_object: string[], _predicate: string[], _subject: string[]): string{
        return "blub";
    }

    console.log()
}
