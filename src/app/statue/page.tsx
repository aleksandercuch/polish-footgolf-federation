"use client";

// CORE
import React from "react";

// ASSETS

import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

//COMPONENTS
import { PageHeader } from "@/components/reusable/page-title/page-title";

const page = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          sx={{
            textAlign: "center",
            background:
              "linear-gradient(90deg, #5a9628 0%, #005A9C 50%, #5a9628 100%)",
            color: "#FFFFFF",
          }}
          sm={8}
          xs={12}
          mt={6}
          mb={6}
        >
          <Typography variant="h1" mt={3} mb={2}>
            Regulamin Footgolfa
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            sx={{ textAlign: "center" }}
            mb={3}
          >
            LIGA FOOTGOLFA 2024 z dnia 06.02.2024r.
          </Typography>
        </Grid>

        <Grid item sm={8} xs={12}>
          <Paper sx={{ padding: "0 15px 15px" }}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              typography={"subtitle1"}
              sx={{ textAlign: "left" }}
              gap={10}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>KOMITET TURNIEJU</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent={"space-evenly"}
                  sx={{ textAlign: "center" }}
                  gap={10}
                >
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    sm={3}
                    xs={12}
                    gap={3}
                  >
                    {/* <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/members%2FRafa%C5%82.jpg?alt=media&token=aa2864de-0789-4d96-9c3e-282546274865"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid> */}
                    <Grid item>
                      <Typography variant="h4">Rafał Bielawa</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    sm={3}
                    xs={12}
                    gap={3}
                  >
                    {/* <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/members%2FMaciej.jpg?alt=media&token=c885e021-508f-4371-81b3-3621f8a56a5d"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid> */}
                    <Grid item>
                      <Typography variant="h4">Maciej Gemborys</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    sm={3}
                    xs={12}
                    gap={3}
                  >
                    {/* <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/members%2FKarol.jpg?alt=media&token=52b5e32a-2071-4b88-bbe5-efe5753679dc"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid> */}
                    <Grid item>
                      <Typography variant="h4">Karol Kusaj</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  ml={5}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>CEL ZAWODÓW</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid container direction="column" sx={{ padding: "0 10px" }}>
                  <Grid
                    item
                    container
                    direction="column"
                    component="ul"
                    sx={{ padding: "0 10px" }}
                  >
                    <Grid item component="li">
                    Popularyzacja aktywności fizycznej prorodzinnej oraz zdrowego stylu życia dzięki
                    dyscyplinie sportowej jaką jest FootGolf.
                    </Grid>
                    <Grid item component="li">
                    Wzrost świadomości oraz wyrobienie nawyku systematycznej aktywności fizycznej w życiu
                    człowieka.
                    </Grid>
                    <Grid item component="li">
                    Propagowanie idei aktywności fizycznej poprzez FootGolf oraz integracji społecznej wśród
                    mieszkańców Polski i innych krajów.
                    </Grid>
                    <Grid item component="li">
                    Promowanie i utrwalanie zasad „fair play” w społeczeństwie, w szczególności wśród
                    uczestników zawodów.
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  ml={5}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>FORMUŁA</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid container direction="column" sx={{ padding: "0 10px" }}>
                  <Typography variant="subtitle1">
                    Turniej otwarty dla graczy posiadających licencję Międzynarodowej Federacji Footgolfa
                    (FIFG) rozgrywany:
                  </Typography>
                  <Grid
                    item
                    container
                    direction="column"
                    component="ul"
                    sx={{ padding: "0 10px" }}
                  >
                    <Grid item component="li">
                    na 27 dołkach pola 9 dołkowego do footgolfa (2 rundy - pierwsza 18 dołków , druga 9
                      dołków).
                    </Grid>
                    <Grid item component="li">
                    na 18 dołkach pola 18 dołkowego do footgolfa ( 1 runda )
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle1" sx={{mt: 4}}>
                    <strong>
                      Kolejność startów oraz grupy w rundach turniejowych :
                    </strong>
                  </Typography>
                  <Grid
                    item
                    container
                    direction="column"
                    component="ul"
                    sx={{ padding: "0 10px" }}
                  >
                    <Grid item component="li">
                      ogłoszone na stronie gscore.eu i obowiązują przez pierwsze
                      18 dołków turnieju,
                    </Grid>
                    <Grid item component="li">
                      po rozegraniu 18 dołków turnieju przeprowadza się klasyfikację i podział na grupy
                      zgodnie z zajętymi miejscami oraz rozgrywa się kolejne 9 dołków turnieju. Zawodnicy
                      w rundzie finałowej turnieju starują w odwrotnej kolejności do zajętych miejsc w
                      pierwszej rundzie turnieju. Niniejsze zasady dotyczą tylko zawodów rozgrywanych na
                      polach 9 -dołkowych.
                    </Grid>
                    <Grid item component="li">
                      Limit uczestników turnieju – 72 zawodników, decyduje
                      kolejność zgłoszeń.
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  sx={{ padding: "0 10px", flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>RUNDY</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid
                  container
                  direction="column"
                  component="ul"
                  sx={{ padding: "0 10px" }}
                >
                  <Grid item component="li">
                    Rundy turniejowe rozgrywane są zgodnie z harmonogramem
                    zamieszczonym na{" "}
                    <a href="https://www.facebook.com/PFFG1">
                      https://www.facebook.com/PFFG1
                    </a>{" "}
                    oraz <a href="www.pffg.pl">www.pffg.pl</a> w dniach od 13.04.2025 r. do
                      05.10.2025 r.
                  </Grid>
                  <Grid item component="li">
                    Liga Footgolfa 2025 składa się z ośmiu rund turniejowych oraz dwóch rund Otwartych
                    Mistrzostw Polski w FootGolfie Polish Open 2025.
                  </Grid>
                  <Grid item component="li">
                    Start godzinowy poszczególnych rund:
                    <p>1 runda Postołowo – 10:00</p>
                    <p>2 runda Binowo – 14:00</p>
                    <p>3 runda Ustronie Morskie – 10:00</p>
                    <p>4 runda Świdnica – 14:00</p>
                    <p>5 runda Brzeźno – 10:00</p>
                    <p>6 runda Lisia Polana – 14:00</p>
                    <p>7 runda – TBA</p>
                    <p>8 runda Postołowo – 10:00</p>
                  </Grid>
                  <Grid item component="li">Zawody 5 rundy Ligi FootGolfa Brzeźno będą jednocześnie zawodami o „Koronę Bolesława
                  Chrobrego”</ Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <strong>OPŁATA STARTOWA</strong>
                <Grid
                  container
                  direction="column"
                  component="ul"
                  sx={{ padding: "0 10px" }}
                >
                  <Grid item component="li">
                    160,00 PLN – osoba dorosła/zawody*
                  </Grid>
                  <Grid item component="li">
                    60,00 PLN – juniorzy ( zawodnik/zawodniczka urodzony/a w 2007 roku lub
                    młodszy)/zawody*
                  </Grid>
                  <p>(*) – udział w zawodach tj. jednej z ośmiu rund Ligi FootGolfa</p>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  sx={{ padding: "0 10px", flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>ZGŁOSZENIA</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid item>
                  Przed każdą rundą do 18 godzin przed startem rundy, poprzez elektroniczne zgłoszenie na
                  stronie gscore.eu Potwierdzeniem udziału jest dokonanie opłaty startowej na konto Polskiej
                  Federacji Footgolfa numer rachunku BNP PARIBAS 17 1750 0012 0000 0000 3572 6837 .
                </Grid>
                <Grid item>
                  Dokonanie rejestracji na zawody Ligi FootGolfa 2025, wniesienie opłaty startowej i
                  przystąpienie do startu w zawodach jest równoznaczne z :
                  <ul>
                    <li>
                      oświadczeniem zawodnika, że bierze on udział w zawodach na własną
                      odpowiedzialność,
                    </li>
                    <li>
                      oświadczeniem zawodnika o zapoznaniu się z Regulaminem Ligi FootGolfa 2025 oraz
                      zobowiązaniem do jego przestrzegania,
                    </li>
                    <li>
                      zgodą na przetwarzanie swoich danych osobowych przez Polską Federację FootGolfa
                      jako organizatora zawodów,
                    </li>
                    <li>
                      zgodą na wykorzystanie wizerunku startującego do celów promocyjnych przez PFFG,
                    </li>
                    <li>
                      Osoba startująca w zawodach Ligi FootGolfa 2025 oświadcza, że nie posiada
                      przeciwskazań zdrowotnych oraz że jest zdolna do udziału w zawodach,
                    </li>
                    <li>
                      Osoba, która nie ukończyła 18 lat do dnia rozpoczęcia zawodów, zostaje
                      dopuszczona do startu w zawodach pod warunkiem posiadania pisemnej zgody
                      rodzica lub opiekuna prawnego na udział w zawodach (formularz w załączniku nr 1)
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {" "}
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>FORMAT: Stroke Play Brutto</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid
                  container
                  direction="column"
                  component="ul"
                  sx={{ padding: "0 10px" }}
                >
                  <Grid item component="li">
                    Punktacja turnieju
                  </Grid>
                  <Typography variant="subtitle1">
                    Zawodnik otrzymuje punkty według reguły 92% poprzedniej
                    pozycji, gdzie za 1 miejsce można uzyskać 100 punktów:
                  </Typography>
                  <Grid item>I miejsce - 100 pkt.,</Grid>
                  <Grid item>II miejsce - 92 pkt.,</Grid>
                  <Grid item>III miejsce - 85 pkt.,</Grid>
                  <Grid item>IV miejsce -78 pkt.,</Grid>
                  <Grid item>V miejsce - 72 pkt.,</Grid>
                  <Grid item>VI miejsce - 66 pkt.,</Grid>
                  <Grid item>VII miejsce - 61 pkt.,</Grid>
                  <Grid item>VIII miejsce - 56 pkt.,</Grid>
                  <Grid item>IX miejsce - 52 pkt.,</Grid>
                  <Grid item>X miejsce - 48 pkt.,</Grid>
                  <Grid item>XI miejsce - 44 pkt.,</Grid>
                  <Grid item>XII miejsce - 40 pkt.,</Grid>
                  <Grid item>XIII miejsce - 37pkt.,</Grid>
                  <Grid item>XIV miejsce - 34 pkt.,</Grid>
                  <Grid item>XV miejsce - 31 pkt.</Grid>
                  <Grid item component="li">
                    Do punktacji końcowej w klasyfikacji generalnej Ligi
                    Footgolfa 2025 Stroke Play Brutto zalicza się sumę punktów
                    zdobytych w sześciu najlepszych rundach ligowych.
                  </Grid>
                  <Grid item component="li">
                    Do klasyfikacji generalnej Ligi Footgolfa 2025 będą także doliczone punkty za start w
                    Otwartych Mistrzostwach Polski w FootGolfie Polish Open 2025. Przyznawanie punktów z
                    Mistrzostw Polski do Ligi FootGolfa zgodna z zasadami rundy turniejowej.
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>KATEGORIE</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid item sx={{ padding: "0 10px" }}>
                  <Grid container direction="column" component="ul">
                    <Grid item component="li">
                      klasyfikacja główna/generalna LIGI FOOTGOLFA,
                    </Grid>
                    <Grid item component="li">
                      MEN; zawodnicy urodzeni w latach 1980 roku do 2006 roku,
                    </Grid>
                    <Grid item component="li">
                      SENIOR; zawodnicy urodzeni w 1979 roku i starsi,
                    </Grid>
                    <Grid item component="li">
                      WOMEN; zawodniczki urodzone w 2006 roku i starsze,
                    </Grid>
                    <Grid item component="li">
                      JUNIOR/JUNIORKA, zawodnicy/zawodniczki urodzeni w 2007
                      roku i młodsi,
                    </Grid>
                    <Grid item component="li">
                      DRUŻYNOWA.
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle1">
                    Do sklasyfikowania w poszczególnej kategorii potrzebny jest
                    udział w conajmniej:
                  </Typography>
                  <Grid container direction="column" component="ul">
                    <Grid item component="li">
                      4 rundach w MEN,
                    </Grid>
                    <Grid item component="li">
                      4 rundach w SENIOR,
                    </Grid>
                    <Grid item component="li">
                      3 rundach w WOMEN,
                    </Grid>
                    <Grid item component="li">
                      3 rundach w JUNIOR/JUNIORKA,
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle1">
                    Natomiast do klasyfikacji w każdej kategorii zaliczane są
                    wszystkie rundy Ligi Footgolfa 2025 oraz z Mistrzostw Polski
                    2024.
                  </Typography>
                  <Typography variant="subtitle1">
                    W klasyfikacji drużynowej biorą udział zawodnicy
                    reprezentujący dany klub w dniu rozgrywania zawodów. Zgodnie
                    ze zgłoszeniem do turnieju. Dopuszcza się start Zawodnika
                    tylko w jednym Klubie w Lidze FootGolfa 2025.
                  </Typography>
                  <Grid container direction="column" component="ul">
                    <Typography variant="subtitle1">
                      Do punktacji drużynowej wlicza się sumę punktów zawodników
                      danego klubu ze wszystkich kategorii. Punktuje gracz z
                      najlepszym wynikiem danej drużyny z każdej kategorii
                      wiekowej, tj.
                    </Typography>
                    <Grid item component="li">
                      MEN,
                    </Grid>
                    <Grid item component="li">
                      SENIOR,
                    </Grid>
                    <Grid item component="li">
                      WOMEN,
                    </Grid>
                    <Grid item component="li">
                      JUNIOR/JUNIORKA,
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle1">
                    Do klasyfikacji drużynowej zalicza się punkty ze wszystkich
                    ośmiu rund ligowych. Nie będą wliczane punkty za start w
                    Mistrzostwach Polski 2025.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>NAGRODY</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Typography variant="subtitle1">
                  I-Miejsce w klasyfikacji głównej/generalnej - Puchar Przechodni oraz Dyplom i Tytuł
                  „Mistrza LIGI FOOTGOLFA 2025” oraz bezpłatny udział w Mistrzostwach Polski 2026
                </Typography>
                <Typography variant="subtitle1">
                  II-Miejsce: Dyplom i Tytuł „I-Vice- Mistrza LIGI FOOTGOLFA 2025”
                </Typography>
                <Typography variant="subtitle1">
                  III-Miejsce: Dyplom i Tytuł „II-Vice- Mistrza LIGI FOOTGOLFA 2025”
                </Typography>
                <Typography variant="subtitle1">
                  I-Miejsce w kategorii Brutto – Puchar Przechodni Polskiej Federacji FootGolfa oraz
                  Tytuł Mistrza Challenger Ligi FootGolfa 2025
                </Typography>
                <Typography variant="subtitle1">
                  I Miejsce w Kategorii MEN: Statuetka
                </Typography>
                <Typography variant="subtitle1">
                  I Miejsce w Kategorii SENIOR: Statuetka
                </Typography>
                <Typography variant="subtitle1">
                  I Miejsce w Kategorii WOMEN: Statuetka
                </Typography>
                <Typography variant="subtitle1">
                  I Miejsce w Kategorii JUNIOR/JUNIORKA: Statuetka
                </Typography>
                <Typography variant="subtitle1">
                  I Miejsce w Kategorii DRUŻYN: Puchar Przechodni oraz uzyskuje możliwość startu w
                  kwalifikacjach do klubowych Mistrzostw Świata w 2026 r.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>WARUNKI</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Typography variant="subtitle1" sx={{ padding: "0 10px" }}>
                  W dniu rozgrywania zawodów zabronione jest trenowanie na polu,
                  na którym odbywają się zawody. Dopuszcza się przejście po
                  obszarze gry w celu zapoznania się z charakterystyką pola.
                  Trening może odbywać się tylko na terenie do tego
                  przeznaczonym lub wyznaczonym przez organizatora.
                </Typography>
                <Grid
                  container
                  direction="column"
                  component="ul"
                  sx={{ padding: "0 10px" }}
                >
                  <Grid item component="li">
                    Gracz zobowiązany jest do odbioru turniejowej karty wyników
                    przed startem swojej grupy.
                  </Grid>
                  <Grid item component="li">
                    Każdy zawodnik musi posiadać własną pikę do gry.
                    Dopuszczalny rozmiar to nr 5.
                  </Grid>
                  <Grid item component="li">
                    Obowiązuje stój zgodny z regułami gry do footgolfa.
                  </Grid>
                  <Grid item component="li">
                    Gracze przed startem wymieniają się Score Cardami. Każdy
                    gracz notuje wyniki partnera w rubryce PLAYER oraz swoje
                    własne w rubryce MARKER. Gracze powinni oznaczyć swoje
                    piłki.
                  </Grid>
                  <Grid item component="li">
                    Po zakończeniu zawodów gracze powinni zwrócić swoje karty
                    wyników do biura zawodów. W innym wypadku gracz nie będzie
                    klasyfikowany.
                  </Grid>
                  <Grid item component="li">
                    Wyniki rundy turniejowej będą publikowane do godz. 16:00 w
                    następnym dniu po jej rozegraniu na stronie internetowej:
                    <a href="https://www.facebook.com/PFFG1">
                      https://www.facebook.com/PFFG1
                    </a>
                    .
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>ROZSTRZYGNIĘCIA W PRZYPADKU REMISU</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid item sx={{ padding: "0 10px" }}>
                  <Typography variant="subtitle1">
                    O miejscach po rozegraniu 18 dołków, jeśli potrzebne będzie rozstrzygnięcie przy podziale
                    do grup finałowych (na polu 9 dołkowym) decyduje kolejno:
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="column"
                  component="ul"
                  sx={{ padding: "0 10px" }}
                >
                  <Grid item component="li">
                    lepszy wynik na ostatnich 9 dołkach,
                  </Grid>
                  <Grid item component="li">
                    lepszy wynik na ostatnich 6 dołkach,
                  </Grid>
                  <Grid item component="li">
                    lepszy wynik na ostatnich 3 dołkach,
                  </Grid>
                  <Grid item component="li">
                    lepszy wynik na ostatnich 2 dołkach,
                  </Grid>
                  <Grid item component="li">
                    lepszy wynik ostatniego dołka,
                  </Grid>
                  <Grid item component="li">
                    5 (pięć) rzutów karnych na dołku wyznaczonym przez
                    organizatora, po których w razie potrzeby następuje nagła
                    (pojedyncza) seria rzutów karnych, aż do wyłonienia
                    zwycięzcy.
                  </Grid>
                </Grid>
                <Grid item sx={{ padding: "0 10px" }}>
                  <Typography variant="subtitle1">
                    O miejscach po rozegraniu 27 dołków (klasyfikacja rundy na polu 9 dołkowym) oraz po 18
                    dołkach (klasyfikacja rundy na polu 18 dołkowym)
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="column"
                  component="ul"
                  sx={{ padding: "0 10px" }}
                >
                  <Grid item component="li">
                    - o 1 miejscu zadecyduje dogrywka na maksymalnie trzech
                    dołkach wyznaczonych przez organizatora. W przypadku
                    rozstrzygnięcia wyniku na jednym z dołków, kolejne nie będą
                    już rozgrywane. Jeśli po rozegraniu trzech dołków będzie
                    nadal remis, należy rozegrać serię pięciu rzutów karnych, po
                    których w razie potrzeby następuje nagła (pojedyncza) seria
                    rzutów karnych, aż do wyłonienia zwycięzcy. Dołek na którym
                    rozgrywane będą karne wyznacza Organizator.
                  </Grid>
                  <Grid item component="li">
                    o miejsca 2 i 3 dogrywka na dołku w formie serii pięciu
                    rzutów karnych po których w razie potrzeby następuje nagła
                    (pojedyncza) seria rzutów karnych, aż do wyłonienia
                    zwycięzcy. Dołek na którym rozgrywane będą rzuty karne
                    wyznacza Organizator.
                  </Grid>
                  <Grid item component="ul" sx={{ padding: "0 10px" }}>
                    <Typography variant="subtitle1">
                      O pozostałych miejscach decyduje kolejno:
                    </Typography>
                    <Grid item component="li">
                      lepszy wynik na ostatnich 9 dołkach,
                    </Grid>
                    <Grid item component="li">
                      lepszy wynik na ostatnich 6 dołkach,
                    </Grid>
                    <Grid item component="li">
                      lepszy wynik na ostatnich 3 dołkach,
                    </Grid>
                    <Grid item component="li">
                      lepszy wynik na ostatnich 2 dołkach,
                    </Grid>
                    <Grid item component="li">
                      lepszy wynik ostatniego dołka,
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Jeśli wynik będzie dalej nierozstrzygnięty punkty z tych
                      miejsc są sumowane i podzielone na tych graczy.
                    </Typography>
                    <Typography variant="subtitle1">
                      W uzasadnionych przypadkach Komitet Turnieju zastrzega
                      sobie prawo do zmiany tego zapisu.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                  sx={{ flexWrap: "nowrap" }}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>POSTANOWIENIA KOŃCOWE</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid
                  container
                  direction="column"
                  component="ul"
                  sx={{ padding: "0 10px" }}
                >
                  <Typography variant="subtitle1">
                    Rejestracja na turniej przez osobę pełnoletnią oznacza, że
                    osoba zapoznała się z:
                  </Typography>
                  <Grid container direction="column" component="ul">
                    <Grid item component="li">
                      Regulaminem Ligi FootGolfa 2025,
                    </Grid>
                    <Grid item component="li">
                      Regułami Gry w Footgolfa Międzynarodowej Federacji FootGolfa (FIFG),
                    </Grid>
                    <Grid item component="li">
                      Regulamin rozgrywek WT Międzynarodowej Federacji FootGolfa (FIFG)2025 i
                      akceptuje ich postanowienia,
                    </Grid>
                  </Grid>
                  <Grid item>
                    Rejestracja na turniej przez osobę nieletnią oznacza, że rodzic lub opiekun prawny osoby
                    nieletniej zapoznał się z Regulaminem Ligi Footgolfa 2025, regułami Gry w Footgolfa
                    Międzynarodowej Federacji FootGolfa (FIFG) oraz z regulaminem rozgrywek WT
                  </Grid>
                  <Grid item>
                    Międzynarodowej Federacji FootGolfa (FIFG)2025 i akceptuje ich postanowienia oraz że
                    ponosi odpowiedzialność za prawidłowość danych zawartych w zgłoszeniu nieletniego i
                    wyraża zgodę na uczestnictwo nieletniego w Turnieju.
                  </Grid>
                  <Grid item>
                    Organizator nie ponosi odpowiedzialności za szkody powstałe podczas uczestnictwa w
                    Lidze Footgolfa 2025
                  </Grid>
                  <Grid item>
                    W uzasadnionych przypadkach Komitet Turnieju zastrzega sobie prawo do zmian w zapisie
                    tego regulaminu.
                  </Grid>
                  <Grid item>
                    Wszystkie kwestie sporne, nie zawarte w tym regulaminie, rozstrzyga Organizator.
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
