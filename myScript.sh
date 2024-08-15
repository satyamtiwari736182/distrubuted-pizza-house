# !bin/bash
# brew services start mongodb-community@6.0
# brew services start postgresql@16
# brew services start zookeeper
# brew services start kafka

brew services stop mongodb-community@6.0
brew services stop postgresql@16
brew services stop kafka
brew services stop zookeeper
