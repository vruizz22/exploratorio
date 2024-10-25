# Instalar global expo, para INICIAR

Para instalar expo, se debe ejecutar el siguiente comando:

```bash
npm install --global eas-cli
```


# Ante caulquier problema

Si se tiene algun problema con el proyecto, se debe ejecutar el siguiente comando:

```bash
npm install metro@latest
```

Actualiza la version de metro, para que no haya problemas con el proyecto.



# Primero creamos la app

Este es el unico importate, para crear una app con expo, se debe ejecutar el siguiente comando:
```bash
npx create-expo-app@latest
```

para crearlo en vacio:

```bash
npx create-expo-app@latest [nombre_proyecto] --template blank
```

luego para correr el proyecto:

```bash
npm run web
```

## Instalar un prettier

Para instalar un prettier, se debe ejecutar el siguiente comando:

```bash
npx expo lint
```

luego,

```bash
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

luego es necesario configurar el archivo .eslintrc.js, con el siguiente contenido:

```js
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
```

luego crear un archivo .prettierrc, con el siguiente contenido:

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

y editar package.json, con el siguiente contenido:

```json
{
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest --watchAll",
    "lint": "expo lint",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write ."
  }
}
```

# Comandos para iniciar un poryecto con expo

1. Instalar expo-cli
```bash
npm install -g expo-cli
```
2. Crear un proyecto
```bash
npx expo start my-new-project
```

Luego, para configurar todo con eas-cli, se debe ejecutar el siguiente comando:

1. instalar eas-cli
```bash
npm install -g eas-cli
```

2. configurar el proyecto
```bash
eas build:configure
```

## Emular con eas

Para emular con eas en android, se debe ejecutar el siguiente comando:

```bash
eas build --platform android
```

en caso de que se quiera emular en ios, se debe ejecutar el siguiente comando:

primero instaamos expo dev client

```bash
npx expo install expo-dev-client
```

Luego, agregar esto, en el json de eas.json, lo immportante es build,agregar
la seccion deios con simulator y resourceClass, para que se pueda emular en mac m1.

```json
{
  "cli": {
    "version": ">= 12.6.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios":{
        "simulator": true,
        "resourceClass": "m-medium"
      }
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  ...
}

```

finalmente, se ejecuta el siguiente comando:

```bash
eas build --profile development --platform ios
```





