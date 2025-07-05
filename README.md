## 🛠 Tecnologias Utilizadas

- Node.js (>=20)
- NestJS
- Prisma ORM
- Docker e Docker Compose
- MySQL
- Swagger (Documentação de APIs)
- Clean Code
- Clean Architecture
- Kubernetes

## 🌐 Recursos Adicionais

- [Documentação do NestJS](https://docs.nestjs.com/)
- [Prisma ORM](https://www.prisma.io/docs/orm)
- [Docker Documentation](https://docs.docker.com/)


## 🚀 Instruções para Instalação

Clone o repositorio para seu ambiente

```bash
git clone git@github.com:lealfelipealves/xpe-pa-cc-backend.git
```

Acesse o repositório

```bash
cd xpe-pa-cc-backend/
```

Copie o arquivo .env.example para .env

```bash
cp .env.example .env
```

Subir o ambiente completo:

```bash
docker-compose up -d
```

Aplicar migrações do Prisma na base de dados:

```bash
npx prisma migrate deploy
```

Popular a base com dados iniciais (Seed):

```bash
npm install;
npx prisma db seed;
```

## 📖 Swagger

Para acessar a documentação do swagger

<a href="http://localhost:3333/docs" target="_blank">Link para acessar o swagger localmente</a>

```bash
http://localhost:3333/docs
```

## ▶️ Executar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## ▶️ K8s

```bash
$ minikube start

$ kubectl apply -f k8s/

$ kubectl get pods

$ kubectl get hpa

$ kubectl get svc

$ minikube service fastfood-service

$ kubectl run fortio --rm -i --tty --image=fortio/fortio -- load -qps 800 -t 60s -c 100 "http://fastfood-service/orders"
```

### Autor

---

<a href="https://github.com/lealfelipealves">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/17007124?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Felipe Leal</b></sub></a> <a href="https://github.com/lealfelipealves" title="Felipe Leal Profile">🚀</a>

Feito por Felipe Leal 👋🏽

[![Gmail Badge](https://img.shields.io/badge/-contato@felipeleal.eng.br-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:contato@felipeleal.eng.br)](mailto:contato@felipeleal.eng.br)
