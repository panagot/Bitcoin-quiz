const qBank = [
  {
    question:
      "Πότε δημοσιεύτηκε το Whitepaper από τον Satoshi Nakamoto;  ",
    answers: ["1 Νοεμβρίου 2009", "6 Σεπτεμβρίου 2011", "31 Οκτωβρίου 2008", "18 Δεκεμβρίου 2009"],
    correct: "31 Οκτωβρίου 2008",
    questionId: "099099"
  },
  {
    question:
      'Πόσα Bitcoin θα παραχθούν συνολικά',
    answers: ["5 εκατομμύρια", "20 εκατομμύρια ", "≈ 21 εκατομμύρια", "25 εκατομμύρια"],
    correct: "≈ 21 εκατομμύρια",
    questionId: "183452"
  },
  {
    question:
      "Πόσα Bitcoin κέρδιζαν οι miners αρχικά σε κάθε block",
    answers: ["100", "50 ", "40", "60"],
    correct: "50 ",
    questionId: "267908"
  },
  {
    question: "Πότε δημιουργήθηκε το πρώτο Block;",
    answers: [
      "2 Σεπτεμβρίου 2010",
      "15 Μαρτίου 2009",
      "10 Ιανουαρίου 2008",
      "3 Ιανουαρίου 2009"
    ],
    correct: "3 Ιανουαρίου 2009",
    questionId: "333247"
  },
  {
    question: "Ποιος είναι ο πρώτος χρήστης που έλαβε Bitcoin;",
    answers: ["Hal Finney", "Roger Ver", "Panagot ", "Charlie Shrem"],
    correct: "Hal Finney",
    questionId: "496293"
  },

  {
    question: "Τι γιορτάζουμε στις 22 Μαϊου;",
    answers: ["Burger Day", "Satoshi Day", "Beer Day", "Pizza Day"],
    correct: "Pizza Day",
    questionId: "1071006"
  },
  {
    question: "Ποια είναι η Mascot του Bitcoin;",
    answers: ["Μελοασβός ", "Αρκούδα", "Ταύρος", "Φάλαινα"],
    correct: "Μελοασβός ",
    questionId: "1174154"
  },
  {
    question:
      "Ποια είναι η πιο χρήσιμη υπηρεσία για το Bitcoin ",
    answers: ["Revolut", "BitPay", "Wirex", "Bitfortip"],
    correct: "Bitfortip",
    questionId: "1822532"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
