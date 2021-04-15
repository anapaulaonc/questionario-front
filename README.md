#Guia de Instalação - Frontend

Node e NPM

LINUX
```sh
curl --version
```
Caso ele não retorne uma versão rode:
```sh
sudo apt install curl
```
 - Ubuntu:
 - ```sh
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs```
- Debian:
 - ```sh
curl -sL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs```

Para verificar a versão:
```sh
node -v
npm -v
```


MAC
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew --version
```
```sh
brew install node@14
```
Adicione ao arquivo `~/.bashrc` (ou `~/.zshrc` caso você utilize o shell zsh) a seguinte linha:
```sh
brew install node@14
```

Reinicie o terminal
```sh
node -v
npm -v
```

