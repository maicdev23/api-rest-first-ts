### Servicio REST simple with TS

    - NodeJS
    - Express
    - MongoDB
    - Firebase
---

### !mport, execution normal

    > npm i
    
    Add file .env in the / directory and edit with the following
        ----------------------------------------------------------------
        > JWT=clavesecreta
        > MONGO_URI=cadena_de_conexion_a_tu_db
        ----------------------------------------------------------------

    > npm run dev



### !mportant, execution with docker and environment variables

    Build image     --> docker build -t api-rest-ts .

    Build contanier --> docker run -it -p 5000:4000 --name api-rest api-rest-ts

    Open a terminal from your container
        ----------------------------------------------------------------
        First, open a terminal in your project
        ----------------------------------------------------------------
        > docker exec -it api-rest /bin/sh
        > apk add nano
        > nano .env
            ------------------------------------------------------------
            Add the following and save
                > JWT=clavesecreta
                > MONGO_URI=cadena_de_conexion_a_tu_db
            ------------------------------------------------------------

    Stop container  --> docker stop api-rest
    Start container --> docker start api-rest