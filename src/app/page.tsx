"use client";

import theme from "@hackclub/theme";
import { Theme, ThemeUIProvider, Button, Box, Heading, Text } from "theme-ui";
import ImageStrip from "../components/ImageStrip";
import Image from "next/image";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const scrollToAbout = () => {
    document
      .getElementById("about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeUIProvider theme={theme as Theme}>
      {/* First Page - Hero Section */}
      <Box className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
        {/* Background image */}
        <Image
          src="/icarus/scrapyard_leaders_back.png"
          alt="Icarus background"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ objectPosition: "center 80%" }}
          priority
        />
        {/* Dark overlay for readability */}
        <Box className="absolute inset-0 -z-10 bg-black/60" />

        <Box className="flex flex-col max-w-5xl translate-y-[1vh] md:translate-y-[2vh] lg:translate-y-[3vh]">
          <Box className="flex items-center justify-center mb-4 md:mb-6 gap-x-6">
            <Heading
              as="h1"
              className="font-extrabold tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mr-3 md:mr-6"
            >
              Icarus Club
            </Heading>
            <Image
              src="/flag-standalone.png"
              alt="Icarus flag"
              width={128}
              height={128}
              className="w-12 sm:w-16 md:w-24 lg:w-28 xl:w-32 h-auto transform -rotate-6 drop-shadow-xl"
            />
          </Box>

          <Box className="flex flex-col items-center gap-4 lg:-translate-y-6">
            <Text className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl opacity-95 mb-12 md:mb-16 lg:mb-20 font-semibold leading-relaxed whitespace-normal lg:whitespace-nowrap">
              Un club tecnológico de estudiantes en Barranquilla, Colombia
            </Text>

            <Button
              variant="ctaLg"
              onClick={scrollToAbout}
              className="text-base sm:text-lg md:text-xl py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Conoce mas
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Second Page - About Section */}
      <Box
        id="about-section"
        className="relative min-h-screen flex items-start justify-start px-8 md:px-24 md:py-8"
      >
        {/* Subtle background pattern */}
        {/* <Box className="absolute inset-0 opacity-5">
          <Box className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></Box>
          <Box className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></Box>
        </Box> */}
        <Box className="w-full flex flex-col relative z-10 gap-4">
          {/* Title positioned at top left */}
          <Box className="mb-16">
            <Heading
              as="h2"
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none"
            >
              ¿Quiénes somos?
            </Heading>
            {/* Decorative line */}
            {/* <Box className="w-full h-1 bg-gradient-to-r from-cyan-400 to-orange-500 mt-6"></Box> */}
          </Box>

          <Box className="flex flex-col lg:flex-row items-stretch w-full gap-12 lg:gap-20">
            {/* Left side - Text content */}
            <Box className="text-white w-full lg:w-1/2">
              <Box
                backgroundColor="darker"
                className="backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-dashed border-muted min-h-[300px] flex items-center"
              >
                <Text className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
                  Somos{" "}
                  <Text color="cyan" className="font-bold">
                    Icarus Club
                  </Text>
                  , un club de tecnología con sede en{" "}
                  <Text className="font-bold">Barranquilla, Colombia</Text>,
                  liderado por estudiantes que formamos parte de{" "}
                  <Text color="red" className="font-bold">
                    Hack Club
                  </Text>
                  . Nuestro objetivo es hacer que participen niños de toda{" "}
                  <Text color="yellow" className="font-bold">
                    Colombia
                  </Text>{" "}
                  y mostrar a Barranquilla como la{" "}
                  <Text color="green" className="font-bold">
                    capital de la tecnología
                  </Text>{" "}
                  para niños y jóvenes del{" "}
                  <Text color="orange" className="font-bold">
                    futuro
                  </Text>
                  .
                </Text>
              </Box>
            </Box>

            {/* Right side - Leaders photo */}
            <div className="flex w-full lg:w-1/2 justify-center items-center lg:justify-end lg:items-start">
              <div className="relative w-full h-full min-h-[300px] group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/icarus/scrapyard_leaders.png"
                  alt="Icarus Club Leaders"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </Box>
        </Box>
      </Box>

      {/* Third Page - Achievements Section */}
      <Box
        id="achievements-section"
        className="relative min-h-screen flex items-start justify-start px-8 md:px-24 py-16"
      >
        <Box className="w-full flex flex-col gap-8">
          {/* Title */}
          <Box className="mb-8">
            <Heading
              as="h2"
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none"
            >
              Logros
            </Heading>
          </Box>

          {/* Main content - Bento Box Layout */}
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
            {/* Top Left - Hackathon Text */}
            <Box className="text-white lg:col-span-2">
              <Text className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Hemos organizado otros hackathons como{" "}
                <Text color="green" className="font-bold">
                  Scrapyard
                </Text>
                , un hackathon con más de{" "}
                <Text className="font-bold">100 participantes</Text>, realizado
                el 15 de marzo de 2025 en la{" "}
                <Text color="pink" className="font-bold">
                  Universidad del Norte
                </Text>
                . Fue el{" "}
                <Text color="blue" className="font-bold">
                  primer
                </Text>{" "}
                hackathon para{" "}
                <Text color="yellow" className="font-bold">
                  jóvenes
                </Text>{" "}
                del <Text className="font-bold">Caribe Colombiano</Text>.
              </Text>
            </Box>

            {/* Top Right - Scrapyard Event Image */}
            <Box className="flex flex-1 justify-center items-center">
              <div className="relative w-full max-w-md h-[200px] md:h-[250px]">
                <Image
                  src="/icarus/scrapyard_event.png"
                  alt="Scrapyard Event"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </Box>

            {/* Bottom Left - NASA Space Apps Image */}
            <Box className="flex justify-center">
              <div className="relative w-full max-w-md h-[200px] md:h-[250px]">
                <Image
                  src="/icarus/nasa_space_apps.png"
                  alt="NASA Space Apps Challenge"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </Box>

            {/* Bottom Center - NASA Achievement Text */}
            <Box className="text-white flex flex-col justify-center">
              <Text className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Además, fuimos{" "}
                <Text color="blue" className="font-bold">
                  finalistas internacionales
                </Text>{" "}
                en el{" "}
                <Text className="font-bold">
                  NASA Space Apps Challenge 2024
                </Text>
                , representando a nuestra ciudad ante la{" "}
                <Text color="red" className="font-bold">
                  NASA
                </Text>
                .
              </Text>
            </Box>

            {/* Bottom Right - Logos */}
            <Box className="flex flex-col items-center justify-center gap-6">
              {/* Scrapyard Logo */}
              <div className="relative w-9/12 h-full min-h-20">
                <Image
                  src="/icarus/scrapyardlogo.png"
                  alt="Scrapyard Barranquilla"
                  fill
                  className="object-contain"
                />
              </div>

              {/* NASA Space Apps Logo */}
              <div className="relative w-9/12 h-full min-h-20">
                <Image
                  src="/icarus/spaceappswhite.png"
                  alt="NASA Space Apps Challenge"
                  fill
                  className="object-contain"
                />
              </div>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Fourth Page - Partners Section */}
      <Box
        id="partners-section"
        backgroundColor="Background"
        className="relative min-h-screen  flex items-start justify-start "
      >
        <Box className="w-full flex flex-col relative z-10 h-screen px-8 md:px-24 py-16">
          {/* Title */}
          <Box className="mb-8">
            <Heading
              as="h2"
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-800 leading-none"
            >
              Aliados
            </Heading>
          </Box>

          {/* Description */}
          <Box className="mb-12">
            <Text className="text-lg md:text-xl lg:text-2xl text-gray-700 ">
              Nuestras actividades están{" "}
              <Text color="blue" className="font-bold">
                financiadas
              </Text>{" "}
              y apoyadas por diversas <br />
              <Text color="purple" className="font-bold">
                organizaciones y empresas
              </Text>{" "}
              como
            </Text>
          </Box>

          {/* ImageStrip Component */}
          <Box className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <ImageStrip
              start={{ x: -200, y: 500 }}
              end={{ x: 1600, y: 0 }}
              speed={12}
              className="absolute bottom-0 left-0 w-full h-screen"
              imgHeightTW="h-32 sm:h-40 md:h-44"
              imgWidthTW="w-auto mx-12"
            />
          </Box>

          {/* Call to Action */}
          <Box className="flex flex-col absolute bottom-8 right-8 text-right">
            <Text className="text-lg md:text-xl text-gray-700">
              Si quieres estar aquí,{" "}
              <Text color="blue" className="font-bold">
                ¡escríbenos!
              </Text>
            </Text>
            <Text className="text-lg md:text-xl text-gray-600 mt-2">
              contacto@icarusclub.org
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Fifth Page - Leaders Section */}
      <Box
        id="leaders-section"
        className="relative min-h-screen  flex items-start justify-start px-8 md:px-24 py-16"
      >
        <Box className="w-full flex flex-col pb-12">
          {/* Title */}
          <Box className="mb-8">
            <Heading
              as="h2"
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white"
            >
              Líderes
            </Heading>
          </Box>

          {/* Description */}
          <Box className=" max-w-4xl">
            <Text className="text-lg md:text-xl lg:text-2xl text-gray-300 ">
              Nosotros somos el equipo detrás de{" "}
              <Text color="blue" className="font-bold">
                Icarus Club
              </Text>
              , ¿quieres{" "}
              <Text color="green" className="font-bold">
                colaborar
              </Text>{" "}
              y ser parte de la{" "}
              <Text color="orange" className="font-bold">
                revolución
              </Text>{" "}
              en el Caribe? No dudes{" "}
              <Text className="font-bold">en contactarnos!</Text>
            </Text>
          </Box>

          {/* Team Members */}
          <Box className="flex flex-wrap justify-center gap-8 lg:gap-20 pt-2 w-full">
            <ProfileCard
              imagePath="/leaders/nathan.png"
              name="Nathan Alspaugh"
              role="Club Leader"
              instagram="https://instagram.com/notaroomba"
              github="https://github.com/notaroomba"
              linkedin="https://linkedin.com/in/notaroomba"
              email="kg5inb1@hotmail.com"
            />

            <ProfileCard
              imagePath="/leaders/juliana.png"
              name="Juliana Taboada"
              role="Co-Leader"
              instagram="https://www.instagram.com/hubhop.bop"
              email="julianatacas@gmail.com"
            />

            <ProfileCard
              imagePath="/leaders/sojo.png"
              name="Juan Pablo Sojo"
              role="Co-Leader"
              instagram="https://www.instagram.com/sojoo_oooo"
              github="https://github.com/Sojoooo"
            />

            <ProfileCard
              imagePath="/leaders/francesca.png"
              name="Francesca Martinez"
              role="Co-Leader"
              instagram="https://instagram.com/frandorturtles"
              github="https://github.com/frandorturtles"
              linkedin="http://linkedin.com/in/frandorturtles"
              email="mfrancesca@uninorte.edu.co"
            />

            <ProfileCard
              imagePath="/leaders/valeria.png"
              name="Valeria Quintero"
              role="Jefe de Prensa"
              instagram="https://www.instagram.com/valequintero_j"
            />

            <ProfileCard
              imagePath="/leaders/santiago.png"
              name="Santiago Beltran"
              role="Jefe de Logística"
              github="https://github.com/sbeltranc"
              email="sbeltranco08@gmail.com"
            />

            <ProfileCard
              imagePath="/leaders/ashlee.png"
              name="Ashlee Yin"
              role="Embajadora"
              instagram="https://www.instagram.com/ashlee_yin"
              github="https://github.com/awangran"
              email="inquiries.ayin@gmail.com"
              linkedin="https://www.linkedin.com/in/ashlee-yin-romero-63204223a"
            />
          </Box>
        </Box>
      </Box>

      {/* Sixth Page - Information Section */}
      <Box
        id="information-section"
        className="relative min-h-screen  flex items-start justify-start px-8 md:px-24 py-16"
      >
        <Box className="w-full flex flex-col gap-8">
          {/* Title */}
          <Box className="mb-6">
            <Heading
              as="h2"
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white"
            >
              ¿Quieres participar?
            </Heading>
          </Box>
          {/* Two info boxes: requirements + general info */}
          <Box className="w-full mt-8">
            <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[50vh] lg:min-h-[65vh]">
              {/* Left: Requirements */}
              <Box className="rounded-2xl border-2 border-dashed border-gray-500 p-8 bg-black/40 h-full flex flex-col justify-around">
                <Box className="h-fit pb-12">
                  <Heading
                    as="h3"
                    className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white mb-6"
                  >
                    Requisitos
                  </Heading>

                  <Box as="ul" className="list-disc list-inside">
                    <Box as="li" className="py-3">
                      <Text className="text-2xl md:text-3xl text-white">
                        Ser un ser vivo
                      </Text>
                    </Box>
                    <Box as="li" className="py-3">
                      <Text className="text-2xl md:text-3xl text-white">
                        Ser estudiante de bachillerato
                      </Text>
                    </Box>
                    <Box as="li" className="py-3">
                      <Text className="text-2xl md:text-3xl text-white">
                        Vivir en{" "}
                        <Text as="span" className="font-bold">
                          Colombia
                        </Text>
                      </Text>
                    </Box>
                    <Box as="li" className="py-3">
                      <Text className="text-2xl md:text-3xl text-white">
                        Tener ganas de aprender y{" "}
                        <Text as="span" className="font-bold">
                          hacer locuras
                        </Text>
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box className="flex justify-center">
                  <Button
                    variant="ctaLg"
                    disabled
                    aria-disabled={true}
                    onClick={() => 0}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-4 md:py-5 lg:py-6 px-8 md:px-10 lg:px-12 rounded-full font-bold transition-all duration-300 opacity-50 cursor-not-allowed"
                  >
                    El formulario abrirá pronto
                  </Button>
                </Box>
              </Box>

              {/* Right: General Information */}
              <Box className="rounded-2xl border-2 border-dashed border-gray-500 p-8 bg-black/40 h-full flex flex-col">
                <Heading
                  as="h3"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6"
                >
                  Información general
                </Heading>

                <Box as="nav" className="mt-2 flex-1">
                  <Box as="ul" className="list-disc list-inside">
                    <Box as="li" className="py-3">
                      <a
                        href="https://hackclub.com"
                        className="underline text-2xl md:text-3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pagina de{" "}
                        <span className="font-bold text-red-500">
                          Hack Club
                        </span>
                      </a>
                    </Box>
                    <Box as="li" className="py-3">
                      <a
                        href="https://dashboard.hackclub.com/join-club?code=8INYUEJL"
                        className="underline text-2xl md:text-3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dashboard de{" "}
                        <span className="font-bold text-sky-400">
                          Icarus Club
                        </span>
                      </a>
                    </Box>
                    <Box as="li" className="py-3">
                      <a
                        href="https://hackclub.com/conduct/"
                        className="underline text-2xl md:text-3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Codigo de{" "}
                        <span className="font-bold text-orange-400">
                          Conducto
                        </span>
                      </a>
                    </Box>
                    <Box as="li" className="py-3">
                      <a
                        href="https://hcb.hackclub.com/icarus-club/transactions"
                        className="underline text-2xl md:text-3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nuestras{" "}
                        <span className="font-bold text-emerald-400">
                          Finanzas
                        </span>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeUIProvider>
  );
}
