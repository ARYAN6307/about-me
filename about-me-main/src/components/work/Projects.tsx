"use client";

import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components"; // Ensure this path is correct

const projectsData = [
  {
    slug: "outdoor-games",
    href: "work/outdoor-games",
    images: [
      {
        src: "/images/games/outdoor/cricket.png",
        title: "Cricket",
        description: "Played with friends at Sahara Stadium and park, including senior and junior boys.",
        content: "A popular team sport where I bonded with friends and neighbors through evening matches.",
      },
      {
        src: "/images/games/outdoor/football.png",
        title: "Football",
        description: "Played in the evening under floodlights at Sahara Stadium and park.",
        content: "Intense, fast-paced game that boosted teamwork and stamina.",
      },
      {
        src: "/images/games/outdoor/basketball.png",
        title: "Basketball",
        description: "Played in school during games period.",
        content: "Enjoyed playing despite injuring my finger once. Competitive and thrilling.",
      },
      {
        src: "/images/games/outdoor/badminton.png",
        title: "Badminton",
        description: "Played near Sahara Park after passing 12th in 2021.",
        content: "Quick reflex sport that became a great post-school hobby.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "indoor-games",
    href: "work/indoor-games",
    images: [
      {
        src: "/images/games/indoor/chess.png",
        title: "Chess",
        description: "Played with friends in school and at Sahara States.",
        content: "Strategic board game that taught patience and foresight.",
      },
      {
        src: "/images/games/indoor/ludo.png",
        title: "Ludo",
        description: "Played with friends during breaks in school.",
        content: "Fun dice-based board game that brought lots of laughter.",
      },
      {
        src: "/images/games/indoor/carrom.png",
        title: "Carrom",
        description: "Played at Sahara States community center.",
        content: "Aiming and flicking coins with precision was satisfying.",
      },
      {
        src: "/images/games/indoor/uno.png",
        title: "UNO",
        description: "Played with PG roommates during B.Tech at SRM.",
        content: "Card game full of reversals, skips, and wild cards—always unpredictable.",
      },
      {
        src: "/images/games/indoor/rajamantri.png",
        title: "Rajamantri Chor Sipahi",
        description: "Played with PG roommates during B.Tech at SRM.",
        content: "A fun social deduction game involving roles and quick guesses.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "online-games",
    href: "work/online-games",
    images: [
      {
        src: "/images/games/online/freefire.png",
        title: "Free Fire",
        description: "Played since 2019, still actively playing.",
        content: "Battle royale with fast-paced action and strategic gunfights.",
      },
      {
        src: "/images/games/online/pokemon.png",
        title: "Pokemon Games",
        description: "Played FireRed, DarkGrey, Hey Monster, Pocketown, Pokeland Legends, and Go.",
        content: "Adventure-filled creature collecting and turn-based battles.",
      },
      {
        src: "/images/games/online/cod.png",
        title: "Call of Duty (COD)",
        description: "Played free-for-all rounds with friends.",
        content: "High-octane shooter with impressive graphics and team strategy.",
      },
      {
        src: "/images/games/online/amongus.png",
        title: "Among Us / Suspects",
        description: "Played with friends in 2021 after school.",
        content: "Hilarious deception game with impostors and crewmates.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "card-collections",
    href: "work/card-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png",
        title: "Pokemon Cards",
        description: "Collected a pack worth ₹1000 in 9th class. Focused on legendary, mega evolution, and EX cards.",
        content: "Traded with friends and built a powerful collection.",
      },
      {
        src: "/images/games/cards/world.png",
        title: "Wonders of the World Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Fun educational card game about famous landmarks.",
      },
      {
        src: "/images/games/cards/animals.png",
        title: "Animals Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Enjoyed comparing animal stats and playing competitively.",
      },
      {
        src: "/images/games/cards/places.png",
        title: "Places Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Cards about famous global places—boosted general knowledge.",
      },
      {
        src: "/images/games/cards/angrybirds.png",
        title: "Angry Birds Cards",
        description: "Collected 20+ free cards from Kurkure Puffcorn packs.",
        content: "Short, collectible cards featuring Angry Birds characters.",
      },
      {
        src: "/images/games/cards/pokemonevo.png",
        title: "Pokemon Evolution Cards",
        description: "Collected 20+ cards from Chocos packs.",
        content: "Evolved form cards of favorite Pokémon. Loved opening cereal packs.",
      },
      {
        src: "/images/games/cards/avengers.png",
        title: "Avengers Cards",
        description: "Top Trumps cards worth ₹100, played with neighborhood friends.",
        content: "Battle-style Marvel hero cards. Lots of fun battles.",
      },
    ],
    avatars: [],
    link: "",
  },
];

export function Projects() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.slug}
          href={project.href}
          images={project.images}
          avatars={project.avatars}
          link={project.link}
        />
      ))}
    </Column>
  );
}