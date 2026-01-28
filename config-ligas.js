// config-ligas.js

// URL de tu Google Apps Script Web App
const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbw8o_5FBVw52QyNpcaR2xDih9xVDx31lwek1Gxh4AyuXKxIZnVjj6Cu8w9zCOXLm7VHYA/exec";

// Nombres legibles para mostrar al usuario
const leagueNames = {
  "esp.1": "LaLiga España",
  "eng.1": "Premier League Inglaterra",
  "ita.1": "Serie A Italia",
  "ger.1": "Bundesliga Alemania",
  "fra.1": "Ligue 1 Francia",
  "ned.1": "Eredivisie Países Bajos",
  "mex.1": "Liga MX México",
  "usa.1": "MLS Estados Unidos",
  "bra.1": "Brasileirão Brasil",
  "gua.1": "Liga Nacional Guatemala",
  "ksa.1": "Pro League Arabia Saudita",
  "tur.1": "Super Lig Turquía",
  "uefa.champions": "UEFA Champions League"
};

// Mapeo de códigos a nombres exactos de las hojas (deben coincidir con las claves del JSON)
const leagueCodeToName = {
  "esp.1": "España_LaLiga",
  "eng.1": "Inglaterra_PremierLeague",
  "ger.1": "Alemania_Bundesliga",
  "ita.1": "Italia_SerieA",
  "fra.1": "Francia_Ligue1",
  "ned.1": "PaísesBajos_Eredivisie",
  "mex.1": "México_LigaMX",
  "usa.1": "EstadosUnidos_MLS",
  "bra.1": "Brasil_Brasileirao",
  "gua.1": "Guatemala_LigaNacional",
  "ksa.1": "Arabia_Saudi_ProLeague",
  "tur.1": "Turquia_SuperLig",
  "uefa.champions": "UEFA_Champions_League"
};

// Clasificación por regiones (para el <optgroup> en el select)
const leagueRegions = {
  "esp.1": "Europa",
  "eng.1": "Europa",
  "ita.1": "Europa",
  "ger.1": "Europa",
  "fra.1": "Europa",
  "ned.1": "Europa",
  "tur.1": "Europa",
  "bra.1": "Sudamérica",
  "mex.1": "Norteamérica",
  "usa.1": "Norteamérica",
  "gua.1": "Centroamérica",
  "ksa.1": "Asia",
  "uefa.champions": "Copas Internacionales"
};
