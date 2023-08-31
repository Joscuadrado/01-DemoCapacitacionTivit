const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "jsonlogs", // ** Ruta del archivo .json **//
    reportPath: "./reports", //**Ruta del html que se creara**//
    metadata: { //**Los metadatos son solo informacion que uno personaliza para su reporte**//
        browser: {
            name: "Edge",
            version: "XX",
        },
        device: "Máquina de prueba local",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});