// CORE
"use client";
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
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, #005A9C 50%, rgba(255,255,255,1) 100%)",
            color: "#FFFFFF",
          }}
          xs={8}
          mt={6}
          mb={6}
        >
          <Typography variant="h3" component="h2" mt={3} mb={2}>
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

        <Grid item xs={8}>
          <Paper sx={{ padding: "0 15px 15px" }}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              component="ol"
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
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>KOMITET TURNIEJU</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent={"space-evenly"}
                  sx={{ textAlign: "center" }}
                >
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    xs={4}
                    gap={3}
                  >
                    <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://bi.im-g.pl/im/97/81/1c/z29892503Q,Cristiano-Ronaldo.jpg"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Rafał Bielawa</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    xs={4}
                    gap={3}
                  >
                    <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://bi.im-g.pl/im/97/81/1c/z29892503Q,Cristiano-Ronaldo.jpg"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Maciej Gemborys</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    xs={4}
                    gap={3}
                  >
                    <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://bi.im-g.pl/im/97/81/1c/z29892503Q,Cristiano-Ronaldo.jpg"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Karol Kusaj</Typography>
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>FORMUŁA</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid container direction="column">
                  <Typography>
                    Turniej otwarty dla graczy posiadających licencję
                    Międzynarodowej Federacji Footgolfa (FIFG) rozgrywany na 27
                    dołkach Pola. PAR 36 (3 rundy po 9 dołków).
                  </Typography>
                  <Typography>
                    <strong>
                      Kolejność startów oraz grupy w rundach turniejowych :
                    </strong>
                  </Typography>
                  <Grid item container direction="column" component="ul">
                    <Grid item component="li">
                      ogłoszone na stronie gscore.eu i obowiązują przez pierwsze
                      18 dołków turnieju,
                    </Grid>
                    <Grid item component="li">
                      po rozegraniu 18 dołków turnieju przeprowadza się
                      klasyfikację i podział na grupy zgodnie z zajętymi
                      miejscami oraz rozgrywa się kolejne 9 dołków turnieju.
                      Zawodnicy w rundzie finałowej turnieju starują w odwrotnej
                      kolejności do zajętych miejsc w pierwszej rundzie
                      turnieju,
                    </Grid>
                    <Grid item component="li">
                      Limit uczestników turnieju – 36 zawodników, decyduje
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>ROZPOCZĘCIE</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid container direction="column" component="ul">
                  <Grid item component="li">
                    Rundy turniejowe rozgrywane są zgodnie z harmonogramem
                    zamieszczonym na{" "}
                    <a href="https://www.facebook.com/PFFG1">
                      https://www.facebook.com/PFFG1
                    </a>{" "}
                    <u>od 07.04.2024 r do 29.09.2024</u> r.
                  </Grid>
                  <Grid item component="li">
                    Liga Footgolfa 2024 składa się z ośmiu rund turniejowych,
                  </Grid>
                  <Grid item component="li">
                    Start każdej rundy - godz. 10:00.
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <strong>OPŁATY</strong>
                <Grid container direction="column" component="ul">
                  <Grid item component="li">
                    150,00 PLN – osoby dorosłe
                  </Grid>
                  <Grid item component="li">
                    50,00 PLN – juniorzy ( zawodnik/zawodniczka urodzony/a w
                    2006 roku lub młodszy)
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
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>ZGŁOSZENIA</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid item>
                  Przed każdą rundą, na 18 godzin przed startem, poprzez
                  elektroniczne zgłoszenie na stronie gscore.eu oraz dokonaniem
                  wpłaty na konto Polskiej Federacji Footgolfa : Numer rachunku
                  17 1750 0012 0000 0000 3572 6837 lub poprzez gscore.eu.
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>FORMAT: Stroke Play Brutto</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid container direction="column" component="ul">
                  <Grid item component="li">
                    Punktacja turnieju
                  </Grid>
                  <Typography>
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
                    Footgolfa 2024 Stroke Play Brutto zalicza się sumę punktów
                    zdobytych w sześciu najlepszych rundach ligowych.
                  </Grid>
                  <Grid item component="li">
                    Do klasyfikacji generalnej Ligi Footgolfa 2024 będą także
                    doliczone punkty za start w Mistrzostwach Polski 2024. Z
                    punktacji tej będą wyłączeni zawodnicy, którzy nie wezmą
                    udziału w żadnej rundzie Ligi Footgolfa 2024.
                  </Grid>
                  <Typography>
                    Punktacja z Mistrzostw Polski zgodna z zasadami rundy
                    turniejowej.
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>KATEGORIE</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Typography>
                  Oprócz klasyfikacji głównej LIGI FOOTGOLFA będzie
                  przeprowadzona klasyfikacja w następujących kategoriach:
                </Typography>
                <Grid container direction="column" component="ul">
                  <Grid item component="li">
                    MEN; zawodnicy urodzeni w 1979 roku i młodsi,
                  </Grid>
                  <Grid item component="li">
                    SENIOR; zawodnicy urodzeni w 1978 roku i starsi,
                  </Grid>
                  <Grid item component="li">
                    WOMEN; zawodniczki urodzone w 2005 roku i starsze,
                  </Grid>
                  <Grid item component="li">
                    JUNIOR/JUNIORKA, zawodnicy/zawodniczki urodzeni w 2006 roku
                    i młodsi,
                  </Grid>
                  <Grid item component="li">
                    DRUŻYNOWA.
                  </Grid>
                </Grid>
                <Typography>
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
                <Typography>
                  Natomiast do klasyfikacji w każdej kategorii zaliczane są
                  wszystkie rundy Ligi Footgolfa 2024 oraz z Mistrzostw Polski
                  2024.
                </Typography>
                <Typography>
                  W klasyfikacji drużynowej biorą udział zawodnicy
                  reprezentujący dany klub w dniu rozgrywania zawodów. Zgodnie
                  ze zgłoszeniem do turnieju. Dopuszcza się start Zawodnika
                  tylko w jednym Klubie w Lidze FootGolfa 2024.
                </Typography>
                <Grid container direction="column" component="ul">
                  <Typography>
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
                <Typography>
                  Do klasyfikacji drużynowej zalicza się punkty ze wszystkich
                  ośmiu rund ligowych. Nie będą wliczane punkty za start w
                  Mistrzostwach Polski 2024.
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>NAGRODY</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Typography>
                  I-Miejsce Puchar Przechodni oraz Dyplom i Tytuł „Mistrza LIGI
                  FOOTGOLFA 2024”
                </Typography>
                <Typography>
                  II-Miejsce: Dyplom i Tytuł „I-Vice- Mistrza LIGI FOOTGOLFA
                  2024”
                </Typography>
                <Typography>
                  III-Miejsce: Dyplom i Tytuł „II-Vice- Mistrza LIGI FOOTGOLFA
                  2024”
                </Typography>
                <Typography>
                  I-Miejsce w kategorii Brutto – Puchar Przechodni Polskiej
                  Federacji FootGolfa oraz Tytuł Mistrza Challenger Ligi
                  FootGolfa 2024
                </Typography>
                <Typography>I Miejsce w Kategorii MEN: Statuetka</Typography>
                <Typography>I Miejsce w Kategorii SENIOR: Statuetka</Typography>
                <Typography>I Miejsce w Kategorii WOMEN: Statuetka</Typography>
                <Typography>
                  I Miejsce w Kategorii JUNIOR/JUNIORKA: Statuetka
                </Typography>
                <Typography>
                  I Miejsce w Kategorii DRUŻYN: nagroda finansowa 2000 zł oraz
                  Puchar Przechodni
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>WARUNKI</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Typography>
                  W dniu rozgrywania zawodów zabronione jest trenowanie na polu,
                  na którym odbywają się zawody. Dopuszcza się przejście po
                  obszarze gry w celu zapoznania się z charakterystyką pola.
                  Trening może odbywać się tylko na terenie do tego
                  przeznaczonym lub wyznaczonym przez organizatora.
                </Typography>
                <Grid container direction="column" component="ul">
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>ROZSTRZYGNIĘCIA W PRZYPADKU REMISU</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid item>
                  <Typography>
                    O miejscach po rozegraniu 18 dołków, jeśli potrzebne będzie
                    rozstrzygnięcie przy podziale do grup finałowych decyduje
                    kolejno:
                  </Typography>
                </Grid>
                <Grid container direction="column" component="ul">
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
                <Grid item>
                  <Typography>
                    O miejscach po rozegraniu 27 dołków (klasyfikacja rundy)
                  </Typography>
                </Grid>
                <Grid container direction="column" component="ul">
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
                  <Grid item component="ul">
                    <Typography>
                      o pozostałych miejscach decyduje kolejno:
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
                    <Typography>
                      Jeśli wynik będzie dalej nierozstrzygnięty punkty z tych
                      miejsc są sumowane i podzielone na tych graczy.
                    </Typography>
                    <Typography>
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
                >
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>POSTANOWIENIA KOŃCOWE</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <SportsSoccerIcon />
                  </Grid>
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid container direction="column" component="ul">
                  <Typography>
                    Rejestracja na turniej przez osobę pełnoletnią oznacza, że
                    osoba zapoznała się z:
                  </Typography>
                  <Grid container direction="column" component="ul">
                    <Grid item component="li">
                      Regulaminem Ligi FootGolfa 2024,
                    </Grid>
                    <Grid item component="li">
                      Regułami Gry w Footgolfa Międzynarodowej Federacji
                      FootGolfa i akceptuje ich postanowienia,
                    </Grid>
                  </Grid>
                  <Grid item component="li">
                    Rejestracja na turniej przez osobę nieletnią oznacza, że
                    rodzic lub opiekun prawny osoby nieletniej zapoznał się z
                    Regulaminem Ligi Footgolfa 2024 i regułami Gry w Footgolfa
                    Międzynarodowej Federacji FootGolfa i akceptuje ich
                    postanowienia oraz że ponosi odpowiedzialność za
                    prawidłowość danych zawartych w zgłoszeniu nieletniego i
                    wyraża zgodę na uczestnictwo nieletniego w Turnieju.
                  </Grid>
                  <Grid item component="li">
                    W uzasadnionych przypadkach Komitet Turnieju zastrzega sobie
                    prawo do zmian w zapisie tego regulaminu.
                  </Grid>
                  <Grid item component="li">
                    Wszystkie kwestie sporne, nie zawarte w tym regulaminie,
                    rozstrzyga Organizator.
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
