npm create vite@latest mobylab-web-app --template react-ts

openapi-generator-cli generate -i http://localhost:5000/swagger/v1/swagger.json -g typescript-fetch -o ./src/infrastructure/apis/client --additional-properties=supportsES6=true