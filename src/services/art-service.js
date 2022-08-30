export const artService = {
  getArt,
};

const ArtList = [
  {
    type: "ILLUSTRATION",
    items: [
      {
        title: "Yearly self-portrait, October 2021",
        description: "Drawn and painted in Procreate.",
        imgs: ["../assets/imgs/illustrations/1.png"],
      },
      {
        title: "“Foreign language”",
        description: `Illustrating three foreign words with absurd meanings.

        Done as part of “Illustration basics” course at Bezalel Academy, guided by Orit Bergman.`,
        imgs: [
          "../assets/imgs/illustrations/2.png",
          "../assets/imgs/illustrations/3.png",
          "../assets/imgs/illustrations/4.png",
        ],
      },
      {
        title: "“Bjorn and Lyra under the northen lights”",
        description: `Fanart for the book trilogy “His Dark Materials” by Philip Pullman.

        Drawn in Procreate and Photoshop.`,
        imgs: ["../assets/imgs/illustrations/5.png"],
      },
      {
        title: "Rabbit, car, and a pine tree.",
        description: `
        Pastels on brown paper, 50x25 cm
        
        Done as part of “Illustration basics” course at Bezalel Academy, guided by David Polonsky.`,
        imgs: ["../assets/imgs/illustrations/6.png"],
      },
      {
        title: "Alice in Wonderland x Dungeon and Dragons",
        description: `Comic panel and concept art.

        Done in “Concept Art” course at IAC.`,
        imgs: [
          "../assets/imgs/illustrations/7.png",
          "../assets/imgs/illustrations/8.png",
          "../assets/imgs/illustrations/9.png",
          "../assets/imgs/illustrations/10.png",
          "../assets/imgs/illustrations/11.png",
        ],
      },
    ],
  },
  {
    type: "GRAPHIC DESIGN",
    items: [
      {
        title: `YMCA logo redesign and two banners for a fictive social event `,
        description: `Done as part of “Graphic Design” course at Bezalel Academy, guided by Sonja Olitsky.`,
        imgs: [
          "../assets/imgs/graphic/1.png",
          "../assets/imgs/graphic/2.png",
          "../assets/imgs/graphic/3.png",
        ],
      },
      {
        title: `Poster for Tel-Aviv’s pride parade, combining the term “Erotic” and the sculpture 
        “Fire and Water”`,
        description: `Done as part of “Graphic Design” course at Bezalel Academy, guided by Lahav Halevy.`,
        imgs: ["../assets/imgs/graphic/4.png"],
      },
      {
        title: `Vinyl cover for the tune “Define Dancing” by Thomas Newman`,
        description: `Done as part of “Shape and Form” course at Bezalel Academy, guided by Sharon Etgar.`,
        imgs: ["../assets/imgs/graphic/5.png"],
      },
      {
        title: `“BUN” Logo ( WORK IN PROGRESS )`,
        description: `Branding a fictive korean street-food style bakery called “BUN”, starting with the logo.

        Done as part of “Branding Basics” course at Bezalel Academy, guided by Dar Laor.`,
        imgs: ["../assets/imgs/graphic/10.png"],
      },
      {
        title: `Autobiography cover design for 3 Israeli creators and influencers, published by a fictive publisher “RUACH”.`,
        description: `
        Done as part of “Typography” course at Bezalel Academy, guided by Edna Liberati.`,
        imgs: [
          "../assets/imgs/graphic/6.png",
          "../assets/imgs/graphic/7.png",
          "../assets/imgs/graphic/8.png",
          "../assets/imgs/graphic/9.png",
        ],
      },
    ],
  },
];

function getArt(filterBy) {
  return ArtList;
}
