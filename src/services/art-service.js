export const artService = {
  getArt,
  getArtByType,
  getGroup,
};

const ART_LIST = [
  {
    type: "illustration",
    id: "a",
    title: "Yearly self-portrait, October 2021",
    description: "Drawn and painted in Procreate.",
    imgs: [{ url: "./src/assets/imgs/illustrations/1.png" }],
    imgsToDisplay: 1,
  },
  {
    type: "illustration",

    id: "b",
    title: "“Foreign language”",
    description: `Illustrating three foreign words with absurd meanings.
  
          Done as part of “Illustration basics” course at Bezalel Academy, guided by Orit Bergman.`,
    imgs: [
      {
        url: "./src/assets/imgs/illustrations/3.png",
        description:
          "מדוגיוואזוקו (יפנית) - אלה שאין להם ממש מה לעשות. מילולית: הבוהים בחלון.",
      },
      {
        url: "./src/assets/imgs/illustrations/2.png",
        description: "האוצ'ה לנדנזוו (סינית)-לאהוב לאכול ולסלוד מעבודה",
      },
      {
        url: "./src/assets/imgs/illustrations/4.png",
        description: "טונילה טוקואוק (אינואיט) - לאכול בבית קברות.",
      },
    ],
    imgsToDisplay: 3,
  },
  {
    type: "illustration",
    id: "c",
    title: "“Bjorn and Lyra under the northen lights”",
    description: `Fanart for the book trilogy “His Dark Materials” by Philip Pullman.
  
          Drawn in Procreate and Photoshop.`,
    imgs: [{ url: "./src/assets/imgs/illustrations/5.png" }],
    imgsToDisplay: 1,
  },
  {
    type: "illustration",
    id: "d",
    title: "Rabbit, car, and a pine tree.",
    description: `
          Pastels on brown paper, 50x25 cm
          
          Done as part of “Illustration basics” course at Bezalel Academy, guided by David Polonsky.`,
    imgs: [{ url: "./src/assets/imgs/illustrations/6.png" }],
    imgsToDisplay: 1,
  },
  {
    type: "illustration",
    id: "e",
    title: "Alice in Wonderland x Dungeon and Dragons",
    description: `Comic panel and concept art.
  
          Done in “Concept Art” course at IAC.`,
    imgs: [
      { url: "./src/assets/imgs/illustrations/7.png" },
      { url: "./src/assets/imgs/illustrations/8.png" },
      { url: "./src/assets/imgs/illustrations/9.png" },
      { url: "./src/assets/imgs/illustrations/10.png" },
      { url: "./src/assets/imgs/illustrations/11.png" },
    ],
    imgsToDisplay: 1,
  },
  {
    type: "graphicDesign",
    id: "f",
    title: `YMCA logo redesign and two banners for a fictive social event `,
    description: `Done as part of “Graphic Design” course at Bezalel Academy, guided by Sonja Olitsky.`,
    imgs: [
      { url: "./src/assets/imgs/graphic/1.png" },
      { url: "./src/assets/imgs/graphic/2.png" },
      { url: "./src/assets/imgs/graphic/3.png" },
    ],
    imgsToDisplay: 3,
  },
  {
    type: "graphicDesign",
    id: "g",
    title: `Poster for Tel-Aviv’s pride parade, combining the term “Erotic” and the sculpture 
          “Fire and Water”`,
    description: `Done as part of “Graphic Design” course at Bezalel Academy, guided by Lahav Halevy.`,
    imgs: [{ url: "./src/assets/imgs/graphic/4.png" }],
    imgsToDisplay: 1,
  },
  {
    type: "graphicDesign",
    id: "h",
    title: `Vinyl cover for the tune “Define Dancing” by Thomas Newman`,
    description: `Done as part of “Shape and Form” course at Bezalel Academy, guided by Sharon Etgar.`,
    imgs: [{ url: "./src/assets/imgs/graphic/5.png" }],
    imgsToDisplay: 1,
  },
  {
    type: "graphicDesign",
    id: "i",
    title: `“BUN” Logo ( WORK IN PROGRESS )`,
    description: `Branding a fictive korean street-food style bakery called “BUN”, starting with the logo.
  
          Done as part of “Branding Basics” course at Bezalel Academy, guided by Dar Laor.`,
    imgs: [{ url: "./src/assets/imgs/graphic/10.png" }],
    imgsToDisplay: 1,
  },
  {
    type: "graphicDesign",
    id: "j",
    title: `Autobiography cover design for 3 Israeli creators and influencers, published by a fictive publisher “RUACH”.`,
    description: `
          Done as part of “Typography” course at Bezalel Academy, guided by Edna Liberati.`,
    imgs: [
      { url: "./src/assets/imgs/graphic/6.png" },
      { url: "./src/assets/imgs/graphic/7.png" },
      { url: "./src/assets/imgs/graphic/8.png" },
      { url: "./src/assets/imgs/graphic/9.png" },
    ],
    imgsToDisplay: 1,
  },
];

function getArt() {
  return ART_LIST;
}

function getGroup(id) {
  const group = ART_LIST.find((group) => group.id === id);
  console.log(group);
  return group;
}

function getArtByType(type) {
  const artGroup = ART_LIST.filter((art) => art.type === type);
  return artGroup;
}
// const ART_LIST = [
//   {
//     type: "ILLUSTRATION",
//     items: [
//       {
//         id: "1",
//         title: "Yearly self-portrait, October 2021",
//         description: "Drawn and painted in Procreate.",
//         imgs: ["./src/assets/imgs/illustrations/1.png"],
//         imgsToDisplay: 1,
//       },
//       {
//         id: "2",
//         title: "“Foreign language”",
//         description: `Illustrating three foreign words with absurd meanings.

//           Done as part of “Illustration basics” course at Bezalel Academy, guided by Orit Bergman.`,
//         imgs: [
//           "./src/assets/imgs/illustrations/2.png",
//           "./src/assets/imgs/illustrations/3.png",
//           "./src/assets/imgs/illustrations/4.png",
//         ],
//         imgsToDisplay: 3,
//       },
//       {
//         id: "3",
//         title: "“Bjorn and Lyra under the northen lights”",
//         description: `Fanart for the book trilogy “His Dark Materials” by Philip Pullman.

//           Drawn in Procreate and Photoshop.`,
//         imgs: ["./src/assets/imgs/illustrations/5.png"],
//         imgsToDisplay: 1,
//       },
//       {
//         id: "4",
//         title: "Rabbit, car, and a pine tree.",
//         description: `
//           Pastels on brown paper, 50x25 cm

//           Done as part of “Illustration basics” course at Bezalel Academy, guided by David Polonsky.`,
//         imgs: ["./src/assets/imgs/illustrations/6.png"],
//         imgsToDisplay: 1,
//       },
//       {
//         id: "5",
//         title: "Alice in Wonderland x Dungeon and Dragons",
//         description: `Comic panel and concept art.

//           Done in “Concept Art” course at IAC.`,
//         imgs: [
//           "./src/assets/imgs/illustrations/7.png",
//           "./src/assets/imgs/illustrations/8.png",
//           "./src/assets/imgs/illustrations/9.png",
//           "./src/assets/imgs/illustrations/10.png",
//           "./src/assets/imgs/illustrations/11.png",
//         ],
//         imgsToDisplay: 1,
//       },
//     ],
//   },
//   {
//     type: "GRAPHIC DESIGN",
//     items: [
//       {
//         id: "6",
//         title: `YMCA logo redesign and two banners for a fictive social event `,
//         description: `Done as part of “Graphic Design” course at Bezalel Academy, guided by Sonja Olitsky.`,
//         imgs: [
//           "./src/assets/imgs/graphic/1.png",
//           "./src/assets/imgs/graphic/2.png",
//           "./src/assets/imgs/graphic/3.png",
//         ],
//         imgsToDisplay: 3,
//       },
//       {
//         id: "7",
//         title: `Poster for Tel-Aviv’s pride parade, combining the term “Erotic” and the sculpture
//           “Fire and Water”`,
//         description: `Done as part of “Graphic Design” course at Bezalel Academy, guided by Lahav Halevy.`,
//         imgs: ["./src/assets/imgs/graphic/4.png"],
//         imgsToDisplay: 1,
//       },
//       {
//         id: "8",
//         title: `Vinyl cover for the tune “Define Dancing” by Thomas Newman`,
//         description: `Done as part of “Shape and Form” course at Bezalel Academy, guided by Sharon Etgar.`,
//         imgs: ["./src/assets/imgs/graphic/5.png"],
//         imgsToDisplay: 1,
//       },
//       {
//         id: "9",
//         title: `“BUN” Logo ( WORK IN PROGRESS )`,
//         description: `Branding a fictive korean street-food style bakery called “BUN”, starting with the logo.

//           Done as part of “Branding Basics” course at Bezalel Academy, guided by Dar Laor.`,
//         imgs: ["./src/assets/imgs/graphic/10.png"],
//         imgsToDisplay: 1,
//       },
//       {
//         id: "10",
//         title: `Autobiography cover design for 3 Israeli creators and influencers, published by a fictive publisher “RUACH”.`,
//         description: `
//           Done as part of “Typography” course at Bezalel Academy, guided by Edna Liberati.`,
//         imgs: [
//           "./src/assets/imgs/graphic/6.png",
//           "./src/assets/imgs/graphic/7.png",
//           "./src/assets/imgs/graphic/8.png",
//           "./src/assets/imgs/graphic/9.png",
//         ],
//         imgsToDisplay: 1,
//       },
//     ],
//   },
// ];
