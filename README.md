Inside coin-protocol-bots

"hn" inside coin-protocol to create an ethereum node that is has the coin contracts deployed to it (in progress with the deploy script stuff)
"tsc" to compile
"h run --no-compile --network bot dist/src/boot.js" to run the compiled js file

`docker build -t "docker-medium" .` to build the docker package and run. Probably need to update the run command in Dockerfile to be the same as the run command above


Consult this if you get lost: 
https://medium.com/@VincentSchoener/development-of-nodejs-application-with-docker-and-typescript-part-2-4dd51c1e7766