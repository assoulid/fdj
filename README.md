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
1. Launch server (several instances of server)
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
The API documentation can be found [here](https://github.com/assoulid/fdj/tree/master/back/doc).

You can also generate it in the folder `back/doc`. Open `index.html` with your favorite browser.
```
cd back
apidoc -i . -o doc/
```
