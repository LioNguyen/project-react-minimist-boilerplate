# React Minimist Boilerplate

🚀 A template to create a web application

`React + TypeScript + Vite + Storybook`

## Essential packages:

[react-minimist-utils](https://www.npmjs.com/package/react-minimist-utils)

```bash
npm i react-minimist-utils
```

## Resources

- [Plop](https://github.com/plopjs/plop)
- [Vite Env](https://vitejs.dev/guide/env-and-mode)

## Playground

- [Code Playground](https://playcode.io)
- [Regex Playground](https://regex101.com/)
- [Mock API](https://mockapi.io/)
- [Free Test Data](https://freetestdata.com/)
- [Generate data tool](https://generatedata.com/)
- [Lorem](https://loremipsum.io/)


## Tree Structure
```
my-app/
│
├── assets/                              # Tài nguyên tĩnh
│   ├── images/                          # Hình ảnh
│   │   ├── logo.png                     # Logo của ứng dụng
│   │   └── ...                          # Các hình ảnh khác
│   ├── styles/                          # CSS global và SASS files
│   └── fonts/                           # Fonts
│
├── config/                              # Cấu hình cho ứng dụng
│   ├── playwright.config.ts             # Cấu hình cho Playwright
│   ├── vite.config.ts                   # Cấu hình cho Vite
│   └── ...                              # Các file cấu hình khác
│
├── env/
│   ├── .env
│   └── ...  
│
├── plop/                                # Plop cho automation và scaffolding
│   ├── modules/                         # Các modules Plop
│   │   ├── serviceGenerator.js          # Generator cho services
│   │   └── ...                          # Các generator khác
│   ├── templates/                       # Templates cho Plop
│   │   ├── component.hbs                # Template cho components
│   │   ├── service.hbs                  # Template cho services
│   │   └── ...                          # Các template khác
│   └── plopfile.js                      # File cấu hình Plop
│
├── tests/                               # Scripts cho testing
│   ├── unit/                            # Unit tests
│   │   ├── components/                  # Tests cho components
│   │   └── ...                          # Các unit tests khác
│   ├── integration/                     # Integration tests
│   │   └── ...                          # Các integration tests
│   └── e2e/                             # End-to-end tests
│       ├── featureA/                    # E2E tests cho Feature A
│       └── ...                          # Các E2E tests khác
│
├── src/                                 # Mã nguồn chính của ứng dụng
│   ├── components/                      # Components UI theo Atomic Design
│   │   ├── featureA/                    # Components cho Feature A
│   │   │   ├── atoms/                   # Atoms cho Feature A
│   │   │   ├── molecules/               # Molecules cho Feature A
│   │   │   ├── organisms/               # Organisms cho Feature A
│   │   │   ├── templates/               # Templates cho Feature A
│   │   │   └── pages/                   # Pages cho Feature A
│   │   └── ...                          # Components cho các feature khác
│   │
│   ├── core/                            # Core Logic theo Clean Architecture
│   │   ├── featureA/                    # Logic cho Feature A
│   │   │   ├── domain/                  # Domain models
│   │   │   ├── services/                # Services
│   │   │   ├── use-cases/               # Use cases
│   │   │   └── presenters/              # Presenters
│   │   └── ...                          # Core cho các feature khác
│   │
│   ├── common/                          # Components và Utilities dùng chung
│   │   ├── components/                  # Common components
│   │   ├── constants/                   # Constants dùng chung
│   │   ├── hooks/                       # Custom hooks dùng chung
│   │   ├── styles/                      # Common styles
│   │   ├── types/                       # Common type definitions
│   │   └── utils/                       # Common utilities
│   │
│   ├── store/                           # Redux store hoặc trạng thái quản lý khác
│   ├── hooks/                           # Hooks cấp cao cho ứng dụng
│   ├── App.js                           # Component App chính
│   └── index.js                         # Entry point của ứng dụng
│
├── package.json                         # Quản lý dependencies và các scripts
└── ...

```

## Tips
```js
import.meta.env.VITE_BASE_URL
```
