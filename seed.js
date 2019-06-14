let db = require("./models");

let userList = [];

userList.push({
  username: "johnsmith",
  email: "johnsmith@gmail.com",
  password: "johnsmithpw"
});

userList.push({
  username: "johndoe",
  email: "johndoe@gmail.com",
  password: "johndoepw"
});

userList.push({
  username: "janedoe",
  email: "janedoe@gmail.com",
  password: "janedoepw"
});

let textList = [];
textList.push({
  title: "Hamlet's Soliloquy",
  lang: "English",
  author: "William Shakespeare",
  origLang: true,
  textRef_id: null,
  body: `To be, or not to be--that is the question:
        Whether 'tis nobler in the mind to suffer
        The slings and arrows of outrageous fortune
        Or to take arms against a sea of troubles
        And by opposing end them. To die, to sleep--
        No more--and by a sleep to say we end
        The heartache, and the thousand natural shocks
        That flesh is heir to. 'Tis a consummation
        Devoutly to be wished. To die, to sleep--
        To sleep--perchance to dream: ay, there's the rub,
        For in that sleep of death what dreams may come
        When we have shuffled off this mortal coil,
        Must give us pause. There's the respect
        That makes calamity of so long life.
        For who would bear the whips and scorns of time,
        Th' oppressor's wrong, the proud man's contumely
        The pangs of despised love, the law's delay,
        The insolence of office, and the spurns
        That patient merit of th' unworthy takes,
        When he himself might his quietus make
        With a bare bodkin? Who would fardels bear,
        To grunt and sweat under a weary life,
        But that the dread of something after death,
        The undiscovered country, from whose bourn
        No traveller returns, puzzles the will,
        And makes us rather bear those ills we have
        Than fly to others that we know not of?
        Thus conscience does make cowards of us all,
        And thus the native hue of resolution
        Is sicklied o'er with the pale cast of thought,
        And enterprise of great pitch and moment
        With this regard their currents turn awry
        And lose the name of action. -- Soft you now,
        The fair Ophelia! -- Nymph, in thy orisons
        Be all my sins remembered.`
});

textList.push({
  title: "Les roses d’Ispahan",
  lang: "French",
  author: "Charles Marie René Leconte de Lisle",
  origLang: true,
  textRef_id: null,
  body: `Les roses d’Ispahan dans leur gaine de mousse,
        Le jasmins de Mossoul, les fleurs de l’oranger,
        Ont un parfum moins frais, ont une odeur moins douce,
        Ô blanche Leïlah! que ton souffle léger.
        Ta lèvre est de corail et ton rire léger
        Sonne mieux que l’eau vive et d’une voix plus douce.
        Mieux que le vent joyeux qui berce l’oranger,
        Mieux que l’oiseau qui chante au bord d’un nid de mousse.
        Ô Leïlah! depuis que de leur vol léger
        Tous les baisers ont fui de ta lèvre si douce
        Il n’est plus de parfum dans le pâle oranger,
        Ni de céleste arome aux roses dans leur mousse.
        Oh! que ton jeune amour ce papillon léger
        Revienne vers mon coeur d’une aile prompte et douce.
        Et qu’il parfume encor la fleur de l’oranger,
        Les roses d’Ispahan dans leur gaine de mousse.`
});

textList.push({
  title: "Du bist wie eine Blume",
  lang: "German",
  author: "Heinrich Heine",
  origLang: true,
  textRef_id: null,
  body: `Du bist wie eine Blume,
        So hold und schön und rein;
        Ich schau’ dich an, und Wehmuth
        Schleicht mir in’s Herz hinein.

        Mir ist, als ob ich die Hände
        Auf’s Haupt dir legen sollt’,
        Betend, daß Gott dich erhalte
        So rein und schön und hold.`
});

// seed users- remove users, remove texts, create users, create texts that go with each user

db.User.remove({}, function(err, users) {
  db.Text.remove({}, function(err, texts) {
    userList.forEach(user => {
      db.User.register(new db.User({ username: user.username }), user.password, (err, newUser) => {
        if (err) { console.log(err) }
        textList.forEach(text => {
          let newText = {
            title: text.title,
            lang: text.lang,
            author: text.author,
            body: text.body,
            origLang: text.origLang,
            textRef_id: text.textRef_id,
            _user: newUser._id
          };
          db.Text.create(newText, (err, text) => {
            if (err) { console.log('error creating text', err) }
            console.log('created text', text.title, ' for user ', newUser.username);
          });
        });
      });
    });
  });
});
