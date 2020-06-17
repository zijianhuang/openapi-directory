set currentDir=%~dp0
set yamlDir=akeneo.com
cd %yamlDir%
c:\green\openapiclientgen\Fonlow.OpenApiClientGen.exe 1.0.0\swagger.yaml DemoCodeGen.json
cd %currentDir%