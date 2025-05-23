"use client"; // This is a Client Component

import { Column, Grid, Heading, Flex, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components"; // Ensure this path is correct
import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation'; // For client-side routing

// Your hardcoded projectsData (now inside the client component)
const projectsData = [
  {
    slug: "outdoor-games",
    category: "Games", // Added category
    type: "Outdoor", // Added type for more granular filtering/display
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
    category: "Games",
    type: "Indoor",
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
    category: "Games",
    type: "Online",
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
    category: "Collections", // Added category
    type: "Cards", // Added type
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
  {
    slug: "sticker-collections",
    category: "Collections",
    type: "Stickers",
    href: "work/sticker-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png", // Reusing image for example
        title: "Tazos & Stickers",
        description: "Collected Tazos from Lays/Cheetos and stickers from various snacks.",
        content: "A childhood passion of collecting and trading. Tazos were especially popular.",
      },
    ],
    avatars: [],
    link: "",
  },
  {
    slug: "stamp-collections",
    category: "Collections",
    type: "Stamps",
    href: "work/stamp-collections",
    images: [
      {
        src: "/images/games/cards/pokemon.png", // Reusing image for example
        title: "Stamp Collection",
        description: "Collected various stamps, especially commemorative ones.",
        content: "A fascinating hobby of exploring history and geography through stamps.",
      },
    ],
    avatars: [],
    link: "",
  },
];

interface ProjectsProps {
  initialCategory: string;
  initialPage: number;
  initialSearchTerm: string;
}

export function Projects({ initialCategory, initialPage, initialSearchTerm }: ProjectsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchInput, setSearchInput] = useState(initialSearchTerm);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'all');
    setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
    setSearchTerm(searchParams.get('search') || '');
    setSearchInput(searchParams.get('search') || '');
  }, [searchParams]);

  const filteredAndPaginatedProjects = useMemo(() => {
    let tempProjects = projectsData;

    if (activeCategory !== 'all') {
      tempProjects = tempProjects.filter(
        (project) => project.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      tempProjects = tempProjects.filter(
        (project) =>
          project.slug.toLowerCase().includes(lowerCaseSearchTerm) ||
          project.images.some(
            (image) =>
              image.title.toLowerCase().includes(lowerCaseSearchTerm) ||
              image.description.toLowerCase().includes(lowerCaseSearchTerm) ||
              image.content.toLowerCase().includes(lowerCaseSearchTerm)
          ) ||
          project.type.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    const projectsPerPage = 4;
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const paginated = tempProjects.slice(startIndex, endIndex);

    const totalPages = Math.ceil(tempProjects.length / projectsPerPage);

    return { projects: paginated, totalPages };
  }, [activeCategory, currentPage, searchTerm]);

  const allCategories = useMemo(() => {
    const categories = new Set(projectsData.map(p => p.category));
    return ['All', ...Array.from(categories)];
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category.toLowerCase());
    setCurrentPage(1);
    updateUrl({ category: category.toLowerCase(), page: 1, search: searchTerm });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl({ category: activeCategory, page: page, search: searchTerm });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setCurrentPage(1);
    updateUrl({ category: activeCategory, page: 1, search: searchInput });
  };

  const updateUrl = ({ category, page, search }: { category: string, page: number, search: string }) => {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.set('category', category);
    if (page && page > 1) params.set('page', page.toString());
    if (search) params.set('search', search);
    router.push(`/work?${params.toString()}`);
  };

  // Determine grid columns based on active category
  const gridColumns = activeCategory === 'collections' ? '1' : '2'; // 'collections' for full width, '2' for others

  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* Search Input */}
      <Flex horizontal="center" fillWidth>
        <form onSubmit={handleSearchSubmit} className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search projects by title, description, type..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full p-3 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          <button type="submit" className="sr-only">Search</button>
        </form>
      </Flex>

      {/* Category Filters */}
      <Flex gap="m" wrap={true} horizontal="center">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full border ${activeCategory === cat.toLowerCase() ? 'border-brand-solid-strong text-brand-solid-strong bg-brand-solid-weak' : 'border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'} hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`}
          >
            {cat}
          </button>
        ))}
      </Flex>

      {/* Projects Grid - FIX IS HERE */}
      {filteredAndPaginatedProjects.projects.length > 0 ? (
        <Grid columns={gridColumns} mobileColumns="1" gap="l"> {/* Dynamically set columns */}
          {filteredAndPaginatedProjects.projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              href={project.href}
              images={project.images}
              avatars={project.avatars}
              link={project.link}
            />
          ))}
        </Grid>
      ) : (
        <Flex horizontal="center" paddingY="xl">
          <Text variant="body-default-m" onBackground="neutral-weak">
            No projects found for the current filters.
          </Text>
        </Flex>
      )}

      {/* Pagination Controls */}
      {filteredAndPaginatedProjects.totalPages > 1 && (
        <Flex horizontal="center" gap="m" marginTop="l">
          {Array.from({ length: filteredAndPaginatedProjects.totalPages }, (_, i) => i + 1).map((pNum) => (
            <button
              key={pNum}
              onClick={() => handlePageChange(pNum)}
              className={`px-4 py-2 rounded-md ${currentPage === pNum ? 'bg-brand-solid-strong text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200'} hover:bg-brand-solid-medium dark:hover:bg-neutral-600 transition-colors`}
            >
              {pNum}
            </button>
          ))}
        </Flex>
      )}
    </Column>
  );
}