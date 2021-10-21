### Installation

1. Clone the package.
2. Run `npm install` from `back` and `front` folders.

### Launch application with mock data

You can launch the app with mock data with
```
cd front
npm run start:mock
```

### Launch application with node js server
1. Launch server (one instance of server)
```
cd back
node index.js
```
Or you can launch several instances of server
```
cd back
node cluster.js
```

2. Launch front application
```
cd front
npm run start
```

### Generate API documentation
This will generate the document in the foler `back/doc`. Open `index.html` with your favorite browser.
```
cd back
apidoc -i . -o doc/
```
