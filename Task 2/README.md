# test-automation
Any test automation code for personal proporse

### Install
```
git clone https://github.com/JhonnCastellanos/Task-2.git
cd cypress
npm install

npx cypress open

```
### Configuration on MacOS
```
Download the Apache Maven bin.tar.gz file from http://maven.apache.org/download.cgi.
Extract the distribution archive to  /Applications/apache-maven-3.4.5.

$ tar -xvf apache-maven-3.4.5-bin.tar.gz

Add the M2_HOME environment variable. Edit your ~/.bash_profile 

open -e ~/.bash_profile

Add the following exports

export M2_HOME=/Applications/apache-maven-3.4.5
export PATH=$PATH:$M2_HOME/bin

Then close the window and open your terminal and run:

source .bash_profile

now run mvn -version
```
### Solving problems
```
If you have any problems running cypress, I recommend installing node.js
https://apuntes.de/nodejs/instalacion-en-mac/#gsc.tab=0
```
### Run local server
```
https://github.com/swagger-api/swagger-petstore