# Plán tvorby webu: Výcvik psů hravě

## Fáze 1: Příprava a Nastavení
1.  **Analýza podkladů:** Prohlédnutí obrázků ve složce `Obrazky/` a vizuálu letáku (až bude dodán).
2.  **Struktura složek:** Ověření existence `Obrazky/` a vytvoření základních souborů (`index.html`, `style.css`, `script.js`).
3.  **Assety:** 
    - Generování SVG favikonu v brandových barvách.
    - Příprava fontů (Google Fonts: Poppins & Outfit/Inter).

## Fáze 2: Design Systém (CSS)
1.  **Globální proměnné:** Definice barev (HEX), zaoblení (16-24px), stínů a spacingu (8px grid).
2.  **Typografie:** Nastavení `clamp()` pro responzivní nadpisy a `rem` pro text.
3.  **Reset a Základy:** Moderní CSS reset a nastavení základních stylů pro tělo a layout.

## Fáze 3: Sémantická HTML Struktura
1.  **Header:** Logo vlevo, menu vpravo (hamburger pro mobil).
2.  **Hero Sekce:** H1, podnadpis, 2x CTA tlačítko.
3.  **Intro ("Možná to znáte"):** Textový blok s důrazem na empatii.
4.  **Služby (Bento Grid):** 
    - Výcvik v reálném prostředí.
    - Výcvik na cvičáku.
    - Socializace.
    - Kurz veterinární manipulace (obsáhlejší karta).
5.  **Přístup a O mně:** Sekce vysvětlující filozofii výcviku.
6.  **Reference:** Karty s citacemi klientek (Jana, Petra).
7.  **Rezervace:** Přehledné odkazy na Dogres.
8.  **Kontakt:** Formulář (Honeypot, Email) + adresa.
9.  **Patička:** Kompletní firemní údaje, IČO, Facebook link.

## Fáze 4: Vizuální vylepšení a Interaktivita
1.  **Glassmorphism:** Aplikace efektu na karty služeb/referencí.
2.  **Animace:** 
    - Hover efekty na tlačítkách a kartách.
    - Jemný "fade-in" efekt při scrollu (Intersection Observer).
3.  **Mobilní menu:** Plynulé vysouvání hamburger menu.
4.  **Cookie lišta:** Decentní pruh v mintové/brand barvě.

## Fáze 5: SEO a Technické náležitosti
1.  **Meta Tagy:** Title, Description, Open Graph (náhledy).
2.  **Strukturovaná data:** JSON-LD pro LocalBusiness.
3.  **Roboti a Mapy:** Vytvoření `robots.txt`, `sitemap.xml` a `llms.txt`.
4.  **Optimalizace:** 
    - Lazy loading obrázků.
    - Kontrola kontrastu (min 4.5:1).
    - Kanonické URL.

## Fáze 6: Testování a Předání
1.  **Responzivita:** Testování (4K, Desktop, Tablet, Mobil).
2.  **Funkčnost:** Testování formuláře a odkazů.
3.  **Performance:** Kontrola rychlosti načítání.
4.  **Finální kontrola:** Odstranění chyb 404 a ověření textů dle zadání.
