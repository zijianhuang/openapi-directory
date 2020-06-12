set currentDir=%~dp0
set yamlDir=amazonaws.com\dataexchange
cd %yamlDir%
c:\green\openapiclientgen\Fonlow.OpenApiClientGen.exe 2017-07-25\openapi.yaml ..\DemoCodeGen.json
cd %currentDir%