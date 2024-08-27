
# Share-it Clone

A share it clone for my computer networks project where i am gonna make an android app to share files among other android devices with P2P connection.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

- Android Device
- Android 8+


# Installation

**from your command line *(using npm)*:**

```bash
# clone this repository
$ git clone https://github.com/emkis/dropbox-clone.git

# go into the repository
$ cd dropbox-clone

# create a .env file based on the example and define the api url
# you can use the api that is used in production: https://dropbox-clone-back.herokuapp.com
$ cp .env.example .env

# install dependencies
$ npm install

# run the app in development mode
$ npm run start
```

---

## Running the tests

Lalalalala

## Deployment

Help me out if you want to, all the help is appreciated.

## Built With

- [ReactJS](https://github.com/facebook/react/)
- CSS only
- [Socket.IO](https://github.com/socketio/socket.io-client)
- [Axios](https://github.com/axios/axios)

# Rest api
all data is being consumed from an rest api written in node, you can check the [repo here](https://github.com/emkis/dropbox-clone-api)

# Note
every file you store here is deleted about every 30 minutes, so dont worry 

the api that storages all files is hosted on [heroku](https://www.heroku.com/), and heroku always erase everything when the app is restarted, thats why it happen

but if you use another host service for the api you can use this app without this prolem


## Authors

Just me , myself and I for now.
Also this repo was highly inspired by another repo on github which i forgot, if somebody remembers just remind me.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

- Hat tip to anyone whose code is used
- Inspiration
- etc
