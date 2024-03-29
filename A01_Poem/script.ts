namespace Poem {
  const subject: string[] = ["the knight", "the queen", "a beggar", "a dog", "the magician"];
  const predicate: string[] = ["abuses", "rules over", "manipulates", "annihilates", "feeds"];
  const object: string[] = ["fire", "a prior", "the shire", "a liar", "the squire"];

  /*
  console.log(subject);
  console.log(predicate);
  console.log(object);
  console.log(getVerse(object, predicate, subject));
*/

  for (let i = object.length; i >= 1; i--) {
    //console.log(i);
    let verse: string = getVerse(subject, predicate, object);
    console.log(verse);
  }

  function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
    let verseAgain: string = "";
    let random: number = Math.floor(Math.random() * _subject.length);
    verseAgain += _subject.splice(random, 1)[0] + " ";
    random = Math.floor(Math.random() * _predicate.length);
    verseAgain += _predicate.splice(random, 1)[0] + " ";
    //console.log(math);
    random = Math.floor(Math.random() * _object.length);
    verseAgain += _object.splice(random, 1)[0];
    return verseAgain;
  }
}
