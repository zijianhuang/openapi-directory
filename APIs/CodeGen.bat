set currentDir=%~dp0
set yamlDir=bbci.co.uk
cd %yamlDir%
c:\green\openapiclientgen\Fonlow.OpenApiClientGen.exe 1.0\openapi.yaml ..\DemoCodeGen.json
cd %currentDir%