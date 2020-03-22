# DesafioCovid19-Back
Repositório para a aplicação que propõe resolver o Desafio de Número 3, lançado pelo governo de Pernambuco

## Para Rodar a Aplicação

Primeiro certifique-se que você possui o Docker e o Docker Compose instalado no seu computador.

### Certificando
Docker
```
sudo docker --version
```

Docker-Compose
```
sudo docker-compose --version
```

Se nos dois aparecer a versão, significa que está tudo certo e você pode prosseguir no processo de rodar o projeto.
Caso constrário, acesse os links para instalar o [Docker](https://docs.docker.com/install/) e o [Docker-Compose](https://docs.docker.com/compose/install/).

### Rondando
Primeiro rode o build do projeto:
```
sudo docker-compose build
```

Agora rode o projeto:
```
sudo docker-compose up
```

Faça bom proveito!

## Branches
As *branches* devem seguir o seguinte formato:
* O nome da *branch* deve estar relacionado com a *issue*.

<b>Exemplo:</b>
```
RichPicture
```

* O nome da *branch* deve possuir uma 'tag' que é o número da *issue*.

<b>Exemplo:</b>
```
3RichPicture
```

* A *branch* deverá possuir o padrão CamelCase ```x-NomeDaBranch ```, em que o 'x' é o número da *issue*.

<b>Exemplo:</b>

```
3-RichPicture
```

* Caso a *branch* não esteja associada a alguma *issue*, não é necessario a adição da 'tag'.

<b>Exemplo:</b>

```
RefatorarDocumento
```

## Commits
Os *commits* devem possuir o seguinte padrão:

* Devem ser escritos em inglês, na forma infinitiva, e ainda conter uma breve descrição:

**Exemplo:**

```Create a new document```

* A *issue* deve ser citada no commit por questões de rastreabilidade, para isso, basta adicionar:

```
#<number_of_issue>
```

**Exemplo:**

```#01 Create a new document```

**Observação:** Por padrão, o caracter '#' define uma linha de comentário na mensagem do *commit*. Para resolver esse problema, digite na linha de comando:

```git config --local core.commentChar '!'```

* Para que uma pessoa seja inclusa como contribuinte no gráfico de *commits* do GitHub, basta incluir a instrução ```Co-authored-By:``` na mensagem:

**Exemplo:**

```
#01 Create a new document


Co-authored-By: João Pedro <isudjoao@gmail.com>
```

* Para *commits* que incluem uma pequena alteração em uma *issue* que já teve sua solução encerrada, deve-se iniciar a mensagem do *commit* com HOTFIX ```#<number_of_issue> message```

**Exemplo:**

```HOTFIX #02 Fix errors in document```

​
