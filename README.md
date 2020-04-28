# MongoDBGettingStarted
MongoDBQuickStartGuide

Paste the below command in a macOS Terminal or Linux shell prompt to install Homebrew for mac.

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

Homebrew is used to package all useful files.

install homebrew and run the following commands to install MongoDB on Mac

steps:
sudo chown -R $(whoami) $(brew --prefix)

then: 
brew tap mongodb/brew

then:
brew install mongodb-community@4.2

then:
brew services start mongodb-community

then:
ps aux | grep -v grep | grep mongod


then execute below command in new Terminal.
mongo

to verify you can run show dbs in the mongo shell

To stop a mongod running as a macOS service, use the following command as needed:
brew services stop mongodb-community@4.2

To run MongoDB (i.e. the mongod process) manually as a background process, issue the following:
mongod --config /usr/local/etc/mongod.conf --fork

To verify that MongoDB is running, search for mongod in your running processes:
ps aux | grep -v grep | grep mongod

To begin using MongoDB, connect a mongo shell to the running instance. From a new terminal, issue the following:
mongo
