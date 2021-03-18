# tailwind_alpine_starterkit
### TAILWINDCSS, ALPINEJS, Gulp, Browserify, PostCSS, Sass-ITCSS, Twig, ES6 is tailwind_alpine_starterkit

## Installation global requeriments
- Npm
- Gulp
- Php (or another server simulator pointing to port 20080)

## Project setup
```
cp .env.development .env
```
```
npm install
```

## Monitor server
```
cd html
```

```
php -S localhost:20080
```

### Compiles assets and hot-reloads for development
```
gulp
```


## Compiles in production
```
cp .env.production .env
```
### Compiles assets for production
```
gulp
```