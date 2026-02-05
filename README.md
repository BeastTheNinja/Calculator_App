# Calculator App 

En moderne lommeregner-applikation bygget med React, TypeScript, Vite og Tailwind CSS.

##  Features

-  Grundlæggende regnoperationer: Plus (+), minus (-), gange (*), dividere (/)
-  Display med stort, læseligt tal
-  DELETE knap til at fjerne sidste ciffer
-  CLEAR knap til at nulstille hele beregningen
- Dark mode design med Tailwind CSS
-  Responsiv grid layout
-  Type-safe med TypeScript
-  State management med React useReducer hook

## 🛠 Tech Stack

- **React** 18+ - UI Framework
- **TypeScript** - Type safety
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - useReducer for state management

##  Installation

```bash
# Clone repositoriet
git clone https://github.com/BeastTheNinja/Calculator_App.git

# Gå ind i projektet
cd Calculator_App

# Installer dependencies
npm install

# Start development serveren
npm run dev
```

Åbn browserens på `http://localhost:5173`

##  Project Structure

```
src/
├── App.tsx                 # Root komponent
├── main.tsx               # Entry point
├── components/
│   ├── header.tsx         # Header komponent
│   ├── footer.tsx         # Footer komponent
│   └── Calculator/
│       ├── CalculatorContainer.tsx    # Main calculator komponent
│       └── CalculatorControls.tsx     # Knap-layout komponent
├── data/
│   ├── CalculatorAction.ts           # Action type definitions
│   └── CalculatorInitValue.ts        # Initial state
├── reducer/
│   └── CalculatorReducer.tsx         # State reducer logik
├── layout/
│   └── AppLayout.tsx                 # Layout wrapper
└── style/
    └── tailwind.css                  # Tailwind styling
```

##  Arkitektur

### State Management with useReducer

Lommeregner bruger **React useReducer hook** til state management:

```tsx
const [state, dispatch] = useReducer(CalculatorReducer, '');
```

### Action Types

| Action | Description |
|--------|---|
| `ADD_DIGIT` | Tilføjer et tal (0-9) til displayet |
| `ADD_+` | Tilføjer plus operator |
| `ADD_-` | Tilføjer minus operator |
| `ADD_*` | Tilføjer gange operator |
| `ADD_/` | Tilføjer dividere operator |
| `ADD_=` | Evaluerer hele udtrykket og viser resultat |
| `CLEAR` | Nulstiller lommeregner |
| `DELETE` | Sletter sidste ciffer |

### Reducer Logic

Reduceren håndterer alle operationer:

- **ADD_DIGIT**: Tilføjer ciffer til state string
- **Operators**: Tilføjer operator symbol
- **ADD_=**: Bruger `eval()` til at beregne resultatet
- **DELETE**: Fjerner sidste karakter med `slice()`
- **CLEAR**: Nulstiller state til tom streng

##  How to Use

1. **Tast tal** - Klik på tal-knapperne (0-9)
2. **Vælg operation** - Klik +, -, *, eller /
3. **Tast mere tal** - Fortsæt med at tilføje tal
4. **Beregn** - Tryk = for at få resultat
5. **Nullstil** - Tryk CLEAR for at starte forfra
6. **Slet** - Tryk DELETE for at fjerne sidste ciffer

##  Styling

Applikationen bruger Tailwind CSS med:

- **Mørkt tema**: Grå og sort baggrund
- **Farvekodede knapper**:
  - Grå: Tal-knapper
  - Blå: Operators
  - Grøn: Lighedstegn
  - Orange: Delete
  - Rød: Clear
- **Responsive design**: Centreret på skærmen

##  Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

##  License

Se LICENSE filen for detaljer

##  Author

BeastTheNinja
