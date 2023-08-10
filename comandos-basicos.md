# Curso de Docker/Comandos básicos e anotações

## Containers
### Como iniciar containers
- Toda vez que utilizar esse comando ele gera um novo container
``` 
docker run NOME_IMAGEM
``` 

### Como listar containers ativos
``` 
docker ps
``` 

### Como listar todos os containers
``` 
docker ps -a
``` 

### Iniciando um container nginx
- docker run -p PORTA_ACESSIVEL_FORA_CONTAINER:PORTA_CONTAINER nginx
``` 
docker run -p 8080:80 nginx
``` 

### Iniciando um container nginx porem liberando terminal
- docker run -d -p PORTA_ACESSIVEL_FORA_CONTAINER:PORTA_CONTAINER nginx
``` 
docker run -d -p 8080:80 nginx
``` 

### Removendo um container
``` 
docker rm ID_CONTAINER
``` 

### Removendo um container com ele ainda em uso
``` 
docker rm ID_CONTAINER -f
``` 

### Iniciando um container e removendo ele sempre que ele for parado
``` 
docker run --rm -d NOME_IMAGEM
```

### Removendo todos os containers em um comando
- O comando -q lista somente os IDs dos containers/Imagens
``` 
docker rm $(docker ps  -a -q)
```

## Imagens
### O que são imagens?
Imagens a grosso modo são uma especie de template de container que será gerado. A imagem é imutável. Todo container atraves de uma imagem possuí uma camada de gravação de arquivo
### Como listar todas as imagens
``` 
docker images
```

### Como remover uma imagem
``` 
docker rmi NOME_IMAGEM
```

### Como remover todas as imagens
``` 
docker rmi $(docker images -q) -f
```

## Dockerfile
### O que são os Dockerfile?
É um arquivo declarativo que tem objetivo de construir uma imagem através de outra imagem.
O Dockerfile possui toda a estruutra e comandos necessários para que as ações sejam executadas no processo de "build", ou seja, no processo de construção de uma imagem

## Buildando uma imagem
```
docker build -t <nome_user>/<nome_imagem>:<versao> DIRETORIO_DOCKERFILE
```


## Acessando container
```
docker exec -it <nome_container> /bin/bash
```