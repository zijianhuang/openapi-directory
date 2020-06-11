set currentDir=%~dp0
set yamlDir=amazonaws.com\appstream
cd %yamlDir%
c:\green\openapiclientgen\Fonlow.OpenApiClientGen.exe 2016-12-01\openapi.yaml ..\DemoCodeGen.json
cd %currentDir%