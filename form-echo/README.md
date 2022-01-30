This code just returns the information entered in a form.

TO-DO: At the moment: /ping returns "Pong"


If you want to test this in [heroku](https://heroku.com/), you will need to create an account there and install heroku client on your system.

- To create an app: `heroku create`
- If you already have an app: `heroku git:remote -a your-app-name`
- To deploy your changes: `git push heroku master`
- To deploy a branch: `git push heroku <branch_to_deploy>:master`


## To open a SSL proxy for development:

npm install -g local-ssl-proxy
local-ssl-proxy --source 3030 --target 3000 --key localhost-key.pem --cert localhost.pem
local-ssl-proxy --source 3030 --target 3000 --key another.domain-key.pem --cert another.domain.pem

You must add the certificate for your browser

### Generate cerficates:
From https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8:
1) Change to directory ssl.
2) Generate root CA (once:)
```
openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout DevelopmentRootCA.key -out DevelopmentRootCA.pem -subj "/C=US/CN=Development-Root-CA"
openssl x509 -outform pem -in DevelopmentRootCA.pem -out DevelopmentRootCA.crt
```
3) Generate certificates for the hosts:
```
openssl req -new -nodes -newkey rsa:2048 -keyout localhost.key -out localhost.csr -subj "/C=US/ST=YourState/L=YourCity/O=Example-Certificates/CN=localhost.local"
openssl x509 -req -sha256 -days 1024 -in localhost.csr -CA DevelopmentRootCA.pem -CAkey DevelopmentRootCA.key -CAcreateserial -extfile ../domains.ext -out localhost.crt
```
4) Launch proxy from main directory:
`local-ssl-proxy --source 3030 --target 3000 --key ./ssl/localhost.key --cert ./ssl/localhost.crt`

Application will be available on port 3030
